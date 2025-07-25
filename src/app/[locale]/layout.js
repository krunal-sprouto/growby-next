import { ThemeProvider } from './components/ThemeProvider';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';

export default function LocaleLayout({ children }) {
  const messages = useMessages();
  return (
      <ThemeProvider>
        <div className="flex">
          <Sidebar />
          <div className="flex-1 ml-64 min-h-screen flex flex-col">
            <Topbar />
            <main className="flex-1 p-8">{children}</main>
            <footer className="border-t border-gray-800 p-4 text-xs text-gray-500 flex justify-between">
              <span>© 2025 Growby by Sprouto InfoSolutions Pvt Ltd.</span>
              <div className="flex gap-4">
                <a href="#">Support</a>
                <a href="#">Docs</a>
                <a href="#">API Status</a>
              </div>
            </footer>
          </div>
        </div>
      </ThemeProvider>
  );
}