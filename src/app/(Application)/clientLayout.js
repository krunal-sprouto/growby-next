// src/app/[locale]/ClientLayout.js
'use client';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import { ThemeProvider } from './components/ThemeProvider';
import Footer from './components/Footer';

export default function ClientLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <ThemeProvider>
      <div className="flex">
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        <div className={`flex-1 min-h-screen flex flex-col ${collapsed ? 'ml-16' : 'lg:ml-64'}`}>
          <Topbar />
          <main className="flex-1 p-8">{children}</main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}
