// middleware.js
import { NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default function middleware(req) {
	const { pathname } = req.nextUrl;

	const parts = pathname.split('/');
	const locale = parts[1];
	const isLocaleRoute = ['az', 'en', 'ru'].includes(locale);

	// Ana sayfa veya locale'li route ise
	if (pathname === '/' || isLocaleRoute) {
		return intlMiddleware(req);
	}

	// Diğer tüm durumlarda devam et
	const res = NextResponse.next();
	res.headers.set('x-pathname', pathname);
	return res;
}

export const config = {
	matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
