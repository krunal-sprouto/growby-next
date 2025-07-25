'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
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
  ChevronDown,
  Hamburger,
  AlignLeft
} from 'lucide-react';

const navLinks = [
  {
    group: 'main',
    links: [
      { href: '/dashboard', icon: LayoutDashboard, label: 'dashboard' },
      { href: '/template-management', icon: FileText, label: 'templateManagement' },
      { href: '/my-waba', icon: MessageSquare, label: 'myWaba' },
      { href: '/api-setup', icon: Settings, label: 'apiSetup' },
      { href: '/sdk-code-samples', icon: Code, label: 'sdkCodeSamples' },
    ],
  },
  {
    group: 'reseller',
    links: [
      { href: '/reseller/dashboard', icon: LayoutDashboard, label: 'resellerDashboard' },
      { href: '/reseller/manage-users', icon: Users, label: 'manageUsers' },
      { href: '/reseller/pricing-plans', icon: DollarSign, label: 'pricingPlans' },
    ],
  },
  {
    group: 'account',
    links: [
      { href: '/account/add-user', icon: UserPlus, label: 'addUser' },
      { href: '/account/billing-subscription', icon: CreditCard, label: 'billingSubscription' },
      { href: '/account/my-orders', icon: ShoppingBag, label: 'myOrders' },
    ],
  },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const t = useTranslations();
  const pathname = usePathname();
  const { theme } = useTheme();

  // Helper for active link
  const isActive = (href) => pathname === href;

  return (
    <>
      <aside className={`sidebar bg-gray-900 border-r border-gray-800 min-h-screen fixed top-0 left-0 z-20 flex flex-col transition-all duration-200 ${collapsed ? 'w-16' : 'w-64'}`}>
        <div className="sidebar-header flex items-center justify-between p-4">
          <Link href="/" className="logo" aria-label="Growby Home">
            <img
              src={theme === 'light' ? 'https://www.growby.net/growby.svg' : 'https://www.growby.net/images/growby-white-logo.png'}
              alt="Growby Logo"
              className="h-8 transition-all"
            />
          </Link>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="ml-2 text-gray-400 hover:text-brand-green"
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
              <div className="nav-group-title text-xs uppercase text-gray-500 px-4 mt-4">{t(group.group)}</div>
              <ul>
                {group.links.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-800 ${
                          isActive(link.href)
                            ? 'bg-brand-green-dim text-brand-green font-semibold'
                            : 'text-gray-200'
                        }`}
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
        className={`sidebar-overlay fixed inset-0 bg-black/50 z-10 ${collapsed ? 'hidden' : 'block'} md:hidden`}
        onClick={() => setCollapsed(true)}
        aria-hidden="true"
      ></div>
    </>
  );
}