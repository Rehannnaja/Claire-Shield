import { NextRequest, NextResponse } from 'next/server'
import { rateLimitStore } from '@/lib/store'

const LIMIT = 100 // max requests
const WINDOW = 60 * 1000 // 1 minute

export function rateLimiter(req: NextRequest) {
  const ip = req.ip || req.headers.get('x-forwarded-for') || 'unknown'
  const now = Date.now()

  const requests = rateLimitStore.get(ip) || []
  const recent = requests.filter(ts => now - ts < WINDOW)

  if (recent.length >= LIMIT) {
    return NextResponse.redirect(new URL('/403', req.url))
  }

  rateLimitStore.set(ip, [...recent, now])
  return null
}
