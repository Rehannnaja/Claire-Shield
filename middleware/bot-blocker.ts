import { NextRequest, NextResponse } from 'next/server'
import { isBlockedUserAgent } from '@/lib/isbot'

export function middleware(req: NextRequest) {
  const userAgent = req.headers.get('user-agent') || ''
  const url = req.nextUrl.clone()
  const cookieVerified = req.cookies.get('verified')?.value === '1'

  // Blokir jika user-agent termasuk dalam daftar bot
  if (isBlockedUserAgent(userAgent)) {
    url.pathname = '/403'
    return NextResponse.redirect(url)
  }

  // Jika belum verifikasi, arahkan ke /verify
  if (!cookieVerified && !url.pathname.startsWith('/verify')) {
    url.pathname = '/verify'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/anime/:path*', '/manga/:path*', '/read/:path*', '/api/:path*'],
}
