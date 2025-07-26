'use client';
import { useTranslations } from 'next-intl';
import { ChevronDown, MessageSquare, Settings } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';

export default function Topbar() {
  const t = useTranslations();
  const { theme } = useTheme();

  return (
    <header
      className={`sticky top-0 z-10 flex flex-wrap items-center justify-between px-4 sm:px-6 py-3 sm:py-4 backdrop-blur border-b ${
        theme === 'dark' ? 'border-gray-700' : 'border-gray-300'
      }`}
    >
      {/* Left - Company Info */}
      <div className="flex items-center gap-3 mb-2 sm:mb-0">
        <button className="flex items-center gap-2 border border-gray-300 px-3 py-2 rounded-lg">
          <span className="bg-emerald-500 rounded p-1">
            <MessageSquare size={16} className="text-white" />
          </span>
          <span className="hidden sm:flex flex-col text-left">
            <span className="font-semibold text-sm">ACME Inc.</span>
            <span className="text-xs text-gray-400">+1 555-0102</span>
          </span>
          <ChevronDown size={16} className="text-gray-400 hidden sm:inline" />
        </button>
      </div>

      {/* Right - Settings */}
      <div className="flex flex-wrap items-center gap-2">
        <ThemeToggle />
        <LanguageSwitcher />
        <button
          className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${
            theme === 'dark'
              ? 'border-gray-300 bg-white text-gray-800'
              : 'border-gray-300 text-gray-800'
          }`}
        >
          <Settings size={16} />
          <span className="text-sm hidden sm:inline">{t('myProfile')}</span>
        </button>
      </div>
    </header>
  );
}
