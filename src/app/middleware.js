// middleware.js
import createMiddleware from 'next-intl/middleware';
import i18nConfig from './next-intl.config';

export default createMiddleware(i18nConfig);

export const config = {
  matcher: ['/', '/(en|fr|es)/:path*']
};
