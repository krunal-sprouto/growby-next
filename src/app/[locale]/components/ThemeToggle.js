'use client';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <>
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="border border-gray-700 rounded-lg p-2 text-gray-400 hover:text-brand-green"
      title="Toggle theme"
    >
      {theme === 'dark' ? (
        <Moon size={16} />
      ) : (
        <Sun size={16} />
      )}
    </button>   
    </>
  );
}