//app/[locale]/dashboard/page.js
'use client';
import { useTranslations } from "next-intl";
import { useTheme } from "../components/ThemeProvider";

export default function DashboardPage() {
  const t = useTranslations();
  const { theme } = useTheme();

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className={theme === 'dark' ? 'text-lg lg:text-2xl font-bold text-white' : 'text-lg lg:text-2xl font-bold text-gary-800'}>{t('dashboard')}</h1>
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-emerald-500 text-white px-2 lg:px-4 py-2 rounded-md font-semibold hover:bg-emerald-600 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          <span>{t('createTemplate')}</span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className={theme === 'dark' ? "bg-gray-800 p-4 border border-gray-800 rounded-2xl" : "bg-white p-4 border border-gray-300 rounded-2xl"}>
          <div className="mb-2">
            <h2 className={theme === 'dark' ? "font-semibold text-white" : "font-semibold text-gray-800"}>Messages Sent (7d)</h2>
          </div>
          <div className={theme === 'dark' ? 'text-2xl font-bold text-white' : 'text-2xl font-bold text-gary-800'}>1,428</div>
          <div>
            <span className="text-green-500 font-semibold">+12.5%</span>
          </div>
        </div>
        <div className={theme === 'dark' ? "bg-gray-800 p-4 border border-gray-800 rounded-2xl" : "bg-white p-4 border border-gray-300 rounded-2xl"}>
          <div className="mb-2">
            <h2 className={theme === 'dark' ? "font-semibold text-white" : "font-semibold text-gray-800"}>Delivery Rate</h2>
          </div>
          <div className={theme === 'dark' ? 'text-2xl font-bold text-white' : 'text-2xl font-bold text-gary-800'}>99.2%</div>
          <div>
            <span className="text-red-500 font-semibold">-0.1%</span>
          </div>
        </div>
        <div className={theme === 'dark' ? "bg-gray-800 p-4 border border-gray-800 rounded-2xl" : "bg-white p-4 border border-gray-300 rounded-2xl"}>
          <div className="mb-2">
            <h2 className={theme === 'dark' ? "font-semibold text-white" : "font-semibold text-gray-800"}>API Calls</h2>
          </div>
          <div className={theme === 'dark' ? 'text-2xl font-bold text-white' : 'text-2xl font-bold text-gary-800'}>3,912</div>
          <div>
            <span className="text-green-500 font-semibold">+8.2%</span>
          </div>
        </div>
        <div className={theme === 'dark' ? "bg-gray-800 p-4 border border-gray-800 rounded-2xl" : "bg-white p-4 border border-gray-300 rounded-2xl"}>
          <div className="mb-2">
            <h2 className={theme === 'dark' ? "font-semibold text-white" : "font-semibold text-gray-800"}>Balance</h2>
          </div>
          <div className={theme === 'dark' ? 'text-2xl font-bold text-white' : 'text-2xl font-bold text-gary-800'}>$42.50</div>
          <div className="text-sm text-gray-400">Auto-recharge at $10</div>
        </div>
      </div>
      <div className={theme === 'dark' ? "bg-gray-800 grid p-4 border border-gray-800 rounded-2xl mb-8" : "bg-white grid p-4 border border-gray-300 rounded-2xl mb-8"}>
        <div className="flex justify-between items-center mb-2">
          <h2 className={theme === 'dark' ? "font-semibold text-white" : "font-semibold text-gray-800"}>Recent Activity</h2>
          <a href="#" className="text-emerald-400 hover:underline">
            View All Logs →
          </a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-300 border-separate border-spacing-y-2">
            <thead>
              <tr>
                <th className={theme === 'dark' ? 'py-2 px-4 bg-gray-900 text-white' : 'py-2 px-4 text-gray-800 border-b border-gray-300'}>Timestamp</th>
                <th className={theme === 'dark' ? 'py-2 px-4 bg-gray-900 text-white' : 'py-2 px-4 text-gray-800 border-b border-gray-300'}>Type</th>
                <th className={theme === 'dark' ? 'py-2 px-4 bg-gray-900 text-white' : 'py-2 px-4 text-gray-800 border-b border-gray-300'}>Details</th>
                <th className={theme === 'dark' ? 'py-2 px-4 bg-gray-900 text-white' : 'py-2 px-4 text-gray-800 border-b border-gray-300'}>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className={theme === 'dark' ? 'bg-gray-700 rounded-2xl text-gray-300' : 'rounded-2xl text-gray-800'}>
                <td className={theme === 'dark' ? "py-2 px-4" : "py-2 px-4 border-b border-gray-300"}>2 mins ago</td>
                <td className={theme === 'dark' ? "py-2 px-4" : "py-2 px-4 border-b border-gray-300"}>Message</td>
                <td className={theme === 'dark' ? "py-2 px-4" : "py-2 px-4 border-b border-gray-300"}>To: +14155551234 (order_shipped)</td>
                <td className={theme === 'dark' ? "py-2 px-4" : "py-2 px-4 border-b border-gray-300"}>
                  <span className="bg-green-50 text-green-500 px-2 py-1 rounded-2xl text-xs font-semibold">
                    DELIVERED
                  </span>
                </td>
              </tr>
              <tr className={theme === 'dark' ? 'bg-gray-700 rounded-2xl text-gray-300' : 'rounded-2xl text-gray-800'}>
                <td className={theme === 'dark' ? "py-2 px-4" : "py-2 px-4 border-b border-gray-300"}>15 mins ago</td>
                <td className={theme === 'dark' ? "py-2 px-4" : "py-2 px-4 border-b border-gray-300"}>Template</td>
                <td className={theme === 'dark' ? "py-2 px-4" : "py-2 px-4 border-b border-gray-300"}>Created "new_promo_q2"</td>
                <td className={theme === 'dark' ? "py-2 px-4": "py-2 px-4 border-b border-gray-300"}>
                  <span className="bg-yellow-50 text-yellow-500 px-2 py-1 rounded-2xl text-xs font-semibold">
                    Pending
                  </span>
                </td>
              </tr>
              <tr className={theme === 'dark' ? 'bg-gray-700 rounded-2xl text-gray-300' : 'rounded-2xl text-gray-800'}>
                <td className={theme === 'dark' ? "py-2 px-4" : "py-2 px-4 border-b border-gray-300"}>21 mins ago</td>
                <td className={theme === 'dark' ? "py-2 px-4" : "py-2 px-4 border-b border-gray-300"}>Message</td>
                <td className={theme === 'dark' ? "py-2 px-4" : "py-2 px-4 border-b border-gray-300"}>To: +13125558901 (password_reset)</td>
                <td className={theme === 'dark' ? "py-2 px-4" : "py-2 px-4 border-b border-gray-300"}>
                  <span className="bg-red-100 text-red-500 px-2 py-1 rounded-2xl text-xs font-semibold">
                    Failed
                  </span>
                </td>
              </tr>
              <tr className={theme === 'dark' ? 'bg-gray-700 rounded-2xl text-gray-300' : 'rounded-2xl text-gray-800'}>
                <td className={theme === 'dark' ? "py-2 px-4" : "py-2 px-4 border-b border-gray-300"}>1 hour ago</td>
                <td className={theme === 'dark' ? "py-2 px-4" : "py-2 px-4 border-b border-gray-300"}>WABA</td>
                <td className={theme === 'dark' ? "py-2 px-4" : "py-2 px-4 border-b border-gray-300"}>Credit line top-up: $50.00</td>
                <td className={theme === 'dark' ? "py-2 px-4" : "py-2 px-4 border-b border-gray-300"}>
                  <span className="bg-green-100 text-green-500 px-2 py-1 rounded-2xl text-xs font-semibold">
                    Success
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className={theme === 'dark' ? "bg-gray-800 p-4 border border-gray-800 rounded-2xl" : "bg-white p-4 border border-gray-300 rounded-2xl"}>
          <div className="flex justify-between items-center mb-2">
            <h2 className={theme === 'dark' ? "font-semibold text-white" : "font-semibold text-gray-800"}>API &amp; Webhooks</h2>
            <a href="#" className="text-emerald-400 hover:underline">
              Settings →
            </a>
          </div>
          <p className="text-xs text-gray-400 mb-6 -mt-2 dark:text-white">
            Your secret key and webhook endpoint.
          </p>
          <strong className="text-gray-400 dark:text-white">API Key</strong>
          <p className="font-mono bg-gray-900 p-3 rounded-2xl text-xs mt-2 text-white">
            sk_live_••••••••••••••••••••
          </p>
        </div>
        <div className={theme === 'dark' ? "bg-gray-800 p-4 border border-gray-800 rounded-2xl" : "bg-white p-4 border border-gray-300 rounded-2xl"}>
          <div className="flex justify-between items-center mb-2">
            <h2 className={theme === 'dark' ? "font-semibold text-white" : "font-semibold text-gray-800"}>Template Status</h2>
            <a href="#" className="text-emerald-400 hover:underline">
              Manage →
            </a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-300 border-separate border-spacing-y-2">
              <tbody>
                <tr className={theme === 'dark' ? 'bg-gray-700 rounded-2xl text-gray-300' : 'rounded-2xl text-gray-800'}>
                  <td className={theme === 'dark' ? 'py-2 px-4 text-white' : 'py-2 px-4 text-gray-800 border-b border-gray-300'}>order_shipped</td>
                  <td className={theme === 'dark' ? 'py-2 px-4 text-white' : 'py-2 px-4 text-gray-800 border-b border-gray-300'}>
                    <span className="bg-green-600 text-white px-2 py-1 rounded-2xl text-xs font-semibold">
                      Approved
                    </span>
                  </td>
                </tr>
                <tr className={theme === 'dark' ? 'bg-gray-700 rounded-2xl text-gray-300' : 'rounded-2xl text-gray-800'}>
                  <td className={theme === 'dark' ? 'py-2 px-4 text-white' : 'py-2 px-4 text-gray-800 border-b border-gray-300'}>password_reset</td>
                  <td className={theme === 'dark' ? 'py-2 px-4 text-white' : 'py-2 px-4 text-gray-800 border-b border-gray-300'}>
                    <span className="bg-green-600 text-white px-2 py-1 rounded-2xl text-xs font-semibold">
                      Approved
                    </span>
                  </td>
                </tr>
                <tr className={theme === 'dark' ? 'bg-gray-700 rounded-2xl text-gray-300' : 'rounded-2xl text-gray-800'}>
                  <td className={theme === 'dark' ? 'py-2 px-4 text-white' : 'py-2 px-4 text-gray-800 border-b border-gray-300'}>abandoned_cart</td>
                  <td className={theme === 'dark' ? 'py-2 px-4 text-white' : 'py-2 px-4 text-gray-800 border-b border-gray-300'}>
                    <span className="bg-red-600 text-white px-2 py-1 rounded-2xl text-xs font-semibold">
                      Rejected
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}