'use client';
import { useTranslations, useLocale, NextIntlClientProvider, useMessages } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(newLocale) {
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <select
      value={locale}
      onChange={e => switchLocale(e.target.value)}
      className="bg-gray-800 border border-gray-700 text-gray-400 rounded-lg p-2"
    >
      <option value="en">EN</option>
    </select>
  );
}