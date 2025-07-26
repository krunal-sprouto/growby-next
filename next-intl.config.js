// next-intl.config.js
export default {
  locales: ['en','fr','es'],
  defaultLocale: 'en',
  localePath: './messages',
  localeDetection: false,
  messages: {
    en: () => import('./messages/en.json'),
    fr: () => import('./messages/fr.json'),
    es: () => import('./messages/es.json'),
  },
};
  