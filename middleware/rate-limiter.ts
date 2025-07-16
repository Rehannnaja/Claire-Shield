import { NextRequest, NextResponse } from 'next/server'
import { isRateLimited } from '@/lib/rate-limit'

export function rateLimiter(req: NextRequest) {
  const ip = req.ip || req.headers.get('x-forwarded-for') || 'unknown'

  if (isRateLimited(ip)) {
    return NextResponse.redirect(new URL('/403', req.url))
  }

  return null
}
