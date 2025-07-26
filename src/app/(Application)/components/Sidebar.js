//app/[locale]/components/Sidebar.js

'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { useTheme } from './ThemeProvider';
import Link from 'next/link';
import {
  LayoutDashboard,
  FileText,
  MessageSquare,
  Settings,
  Code,
  Users,
  DollarSign,
  UserPlus,
  CreditCard,
  ShoppingBag,
  AlignLeft
} from 'lucide-react';
import Image from 'next/image';

export default function Sidebar({ collapsed, setCollapsed }) {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const { theme } = useTheme();

  const navLinks = [
    {
      group: 'main',
      links: [
        { href: `/dashboard`, icon: LayoutDashboard, label: 'dashboard' },
        { href: `/template`, icon: FileText, label: 'templateManagement' },
        { href: `/my-waba`, icon: MessageSquare, label: 'myWaba' },
        { href: `/api-setup`, icon: Settings, label: 'apiSetup' },
        { href: `/sdk-code-samples`, icon: Code, label: 'sdkCodeSamples' },
      ],
    },
    {
      group: 'reseller',
      links: [
        { href: `/reseller/dashboard`, icon: LayoutDashboard, label: 'resellerDashboard' },
        { href: `/reseller/manage-users`, icon: Users, label: 'manageUsers' },
        { href: `/reseller/pricing-plans`, icon: DollarSign, label: 'pricingPlans' },
      ],
    },
    {
      group: 'account',
      links: [
        { href: `/account/add-user`, icon: UserPlus, label: 'addUser' },
        { href: `/account/billing-subscription`, icon: CreditCard, label: 'billingSubscription' },
        { href: `/account/my-orders`, icon: ShoppingBag, label: 'myOrders' },
      ],
    },
  ];  

  // Helper for active link
  const isActive = (href) => pathname === href;

  return (
    <>
      <aside className={`sidebar min-h-screen h-full fixed top-0 left-0 z-30 flex flex-col ${collapsed ? 'w-16' : 'w-64'} ${theme === 'dark' ? 'bg-gray-900 text-white border-r border-gray-700' : 'bg-white text-gray-800'} shadow-lg`}>
        <div className="sidebar-header flex items-center justify-between p-4">
          <Link href={`/dashboard`} className="logo" aria-label="Growby Home" as={'dashboard'}>
            <Image
              priority={true}
              src={theme === 'dark' ? '/growby-dark.svg' : '/growby.svg'}
              alt="Growby Logo"
              width={350}
              height={50}
              className="h-8 transition-all"
            />
          </Link>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="ml-2 text-gray-400 hover:text-brand-green cursor-pointer"
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            <AlignLeft
              size={20}
              className={`transition-transform duration-200 ${collapsed ? 'rotate-180' : ''}`}
            />
          </button>
        </div>
        <nav className="sidebar-nav flex-1 overflow-y-auto">
          {navLinks.map((group) => (
            <div key={group.group}>
              <div className={`nav-group-title text-xs uppercase text-gray-800 px-4 mt-4 dark:text-white ${collapsed ? 'hidden' : ''}`}>{t(group.group)}</div>
              <ul>
                {group.links.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <li key={link.href} className='my-1 mx-1'>
                      <Link
                        href={link.href}
                        className={`flex items-center gap-3 px-4 py-2 rounded-md
                          ${isActive(link.href)
                            ? 'bg-gray-800 text-white'
                            : theme === 'dark'
                              ? 'hover:bg-gray-800 text-white hover:text-white'
                              : 'hover:bg-gray-800 text-gray-800 hover:text-white'}
                          ${collapsed ? 'justify-center' : 'justify-start'}
                        `}
                      >
                        <IconComponent size={20} className="flex-shrink-0" />
                        {!collapsed && <span>{t(link.label)}</span>}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
      {/* Overlay for mobile only, show when sidebar is open and screen is small */}
      <div
        className={`sidebar-overlay fixed inset-0 bg-black/50 z-20 ${collapsed ? 'hidden' : 'block'} md:hidden`}
        onClick={() => setCollapsed(true)}
        aria-hidden="true"
      ></div>
    </>
  );
}