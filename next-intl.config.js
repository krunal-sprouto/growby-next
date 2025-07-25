// next-intl.config.js
export default {
  locales: ['en'],
  defaultLocale: 'en',
  localeDetection: true,
  messages: {
    en: () => import('./locales/en.json')
  },
};
  