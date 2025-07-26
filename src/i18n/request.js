// i18n/request.js

import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  const localeVal = locale || 'en';

  return {
    locale: localeVal,
    messages: (await import(`../../messages/${localeVal}.json`)).default
  };
});
    