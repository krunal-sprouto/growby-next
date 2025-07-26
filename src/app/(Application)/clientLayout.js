// src/app/[locale]/ClientLayout.js
'use client';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import { ThemeProvider } from './components/ThemeProvider';

export default function ClientLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <ThemeProvider>
      <div className="flex">
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        <div className={`flex-1 min-h-screen flex flex-col ${collapsed ? 'ml-16' : 'ml-64'}`}>
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
