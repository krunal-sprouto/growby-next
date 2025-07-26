//app/[locale]/components/LanguageSwitcher.js

'use client';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { theme } from '../../../../tailwind.config';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  async function switchLocale(newLocale) {
    await fetch(`/api/set-locale?lang=${newLocale}`, { method: 'POST' });
    router.refresh();
  }

  return (
    <select
      value={locale}
      onChange={e => switchLocale(e.target.value)}
      className={theme === 'dark' ? "bg-gray-800 text-white border border-gray-700 rounded-lg px-3 py-2" : "bg-white text-gray-800 border border-gray-300 rounded-lg px-3 py-2"}
    >
      <option value="en">English</option>
      <option value="fr">French</option>
      <option value="es">Spanish</option>
    </select>
  );
}
