import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const cookieStore = await cookies();
  const id = cookieStore.get('userID');

  if (!id) {
    if (req.nextUrl.pathname === '/dashboard') {
      return NextResponse.redirect(new URL('/', req.url));
    }
  }

  return NextResponse.next();
}
