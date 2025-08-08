// middleware.js
import { NextResponse } from "next/server";

const DEFAULT_LOCALE = "az";
const SUPPORTED_LOCALES = ["az", "en", "tr"];

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // Statik fayllar, API və _next qovluqlarını keç
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/static") ||
    pathname.match(/\.(.*)$/)
  ) {
    return;
  }

  // URL-də locale var?
  const pathnameLocale = pathname.split("/")[1];

  if (SUPPORTED_LOCALES.includes(pathnameLocale)) {
    return; // Locale varsa, yönləndirmə yoxdur
  }

  // Locale yoxdursa, default locale-ə yönləndir
  const url = req.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api).*)"],
};
