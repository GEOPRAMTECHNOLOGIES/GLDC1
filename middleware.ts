import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  const host = req.headers.get('host') || '';

  // The public M-Pesa callback URL is intentionally the API hostname root:
  // https://api.gldc.co.ke
  // Internally rewrite that root request to the Next.js route handler without
  // exposing /api/... as the configured Daraja callback URL.
  if ((host === 'api.gldc.co.ke' || host.startsWith('api.gldc.co.ke:')) && pathname === '/') {
    const u = req.nextUrl.clone();
    u.pathname = '/api/mpesa-callback';
    return NextResponse.rewrite(u);
  }

  const p = process.env.ADMIN_PATH || '/gldc-management-portal-7f3x';
  if (pathname === p) {
    const u = req.nextUrl.clone();
    u.pathname = '/admin';
    return NextResponse.rewrite(u);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
