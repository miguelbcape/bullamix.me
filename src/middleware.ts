import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'es', 'fr'],
 
  // Used when no locale matches
  defaultLocale: 'en',
});
 
// export const config = {
//   // Match only internationalized pathnames
//   matcher: ['/', '/(fr|es|en)/:path*']
// };

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ['/((?!api|_next|.*\\..*).*)']
};