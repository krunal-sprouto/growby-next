// src/app/[locale]/layout.js

import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { getMessages } from 'next-intl/server';
import '../globals.css'; // Ensure global styles are imported
import ClientLayout from './clientLayout';
import { cookies } from 'next/headers';

export default async function LocaleLayout(props) {
  const { children } = props;
  const cookieStore = await cookies();
  const locale = cookieStore.get('NEXT_LOCALE')?.value || 'en';

  const messages = await getMessages({ locale });
  
  return (
    <html lang={locale}>
        <head>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" /> 
        </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ClientLayout>{children}</ClientLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
