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
     <header className="sticky top-0 z-10 flex items-center justify-between bg-gray-800/80 border-b border-gray-700 px-6 py-4 backdrop-blur">
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 bg-gray-700 px-3 py-2 rounded-lg">
          <span className="bg-emerald-500 rounded p-1">
            <MessageSquare size={16} className="text-white" />
          </span>
          <span>
            <div className="font-semibold text-white text-sm">ACME Inc.</div>
            <div className="text-xs text-gray-400">+1 555-0102</div>
          </span>
          <ChevronDown size={16} className="text-gray-400" />
        </button>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 rounded-lg border border-gray-700 hover:bg-gray-700"
        >
          <ThemeToggle />
        </button>
        <button className="flex items-center gap-2 border border-gray-700 px-3 py-2 rounded-lg hover:bg-gray-700">
          <Globe size={16} />
          <LanguageSwitcher />
          <ChevronsDown size={12} />
        </button>
        <button className="flex items-center gap-2 border border-gray-700 px-3 py-2 rounded-lg hover:bg-gray-700">
          <Settings size={16} />
          <span className="text-sm">{t('myProfile')}</span>
        </button>
      </div>
    </header>
  );
}