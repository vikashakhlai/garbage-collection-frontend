// middleware.ts
import Cookies from 'js-cookie';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
	const token = Cookies.get('accessToken');
	const pathname = request.nextUrl.pathname;

	if (pathname.startsWith('/manage')) {
		if (!token) {
			return NextResponse.redirect(new URL('/login', request.url));
		}

		try {
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
		} catch (e) {
			return NextResponse.redirect(new URL('/login', request.url));
		}
	}

	return NextResponse.next();
}
