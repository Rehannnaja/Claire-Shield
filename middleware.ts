import { botBlocker } from './middleware/bot-blocker'
import { rateLimiter } from './middleware/rate-limiter'
import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const blockedByUA = botBlocker(req)
  if (blockedByUA) return blockedByUA

  const blockedByRate = rateLimiter(req)
  if (blockedByRate) return blockedByRate

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/anime/:path*', '/manga/:path*', '/read/:path*', '/api/:path*'],
}
