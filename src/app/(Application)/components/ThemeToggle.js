//app/[locale]/components/ThemeToggle.js


'use client';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <>
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={theme === 'dark' ? "text-gray-400 hover:text-gray-100 m-2" : "text-gray-600 hover:text-gray-800 m-2"}
      title="Toggle theme"
    >
      {theme === 'dark' ? (
        <Moon size={20}/>
      ) : (
        <Sun size={20} />
      )}
    </button>   
    </>
  );
}