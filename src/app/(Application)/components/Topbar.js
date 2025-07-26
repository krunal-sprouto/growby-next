//app/[locale]/components/Topbar.js

'use client';
import { useTranslations } from 'next-intl';
import { ChevronDown, ChevronsDown, Globe, MessageSquare, Moon, Settings, Sun } from 'lucide-react';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';

export default function Topbar() {
  const t = useTranslations();
  const [theme, setTheme] = useState('dark');

  return (
     <header className={theme === 'dark' ? "sticky top-0 z-10 flex items-center justify-between px-6 py-4 backdrop-blur border-b border-gray-700" : "sticky top-0 z-10 flex items-center justify-between px-6 py-4 backdrop-blur border-b border-gray-300"}>
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 border border-gray-300 px-3 py-2 rounded-lg">
          <span className="bg-emerald-500 rounded p-1">
            <MessageSquare size={16} className="text-white" />
          </span>
          <span>
            <div className="font-semibold  text-sm">ACME Inc.</div>
            <div className="text-xs text-gray-400">+1 555-0102</div>
          </span>
          <ChevronDown size={16} className="text-gray-400" />
        </button>
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <LanguageSwitcher />
        <button className={theme === 'dark' ? "flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-800" : "flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300"}>
          <Settings size={16} />
          <span className="text-sm">{t('myProfile')}</span>
        </button>
      </div>
    </header>
  );
}