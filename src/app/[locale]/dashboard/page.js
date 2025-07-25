import { useTranslations } from "next-intl";
import Sidebar from "../components/Sidebar";

export default function DashboardPage() {
  const t = useTranslations();
  return (
    <main>
      <Sidebar />

      <div className="page-title-bar flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-white">{t('dashboard')}</h1>
        <a href="#" className="btn-primary inline-flex items-center gap-2 bg-brand-green text-white px-4 py-2 rounded-md font-semibold hover:bg-emerald-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          <span>{t('createTemplate')}</span>
        </a>
      </div>

      <div className="stats-grid grid grid-cols-4 gap-4 mb-8">
        <div className="dashboard-card bg-gray-800 p-4 rounded">
          <div className="dashboard-card-header mb-2"><h2 className="font-semibold">Messages Sent (7d)</h2></div>
          <div className="stat-value text-2xl font-bold">1,428</div>
          <div className="stat-change"><span className="increase text-green-500">+12.5%</span></div>
        </div>
        <div className="dashboard-card bg-gray-800 p-4 rounded">
          <div className="dashboard-card-header mb-2"><h2 className="font-semibold">Delivery Rate</h2></div>
          <div className="stat-value text-2xl font-bold">99.2%</div>
          <div className="stat-change"><span className="decrease text-red-500">-0.1%</span></div>
        </div>
        <div className="dashboard-card bg-gray-800 p-4 rounded">
          <div className="dashboard-card-header mb-2"><h2 className="font-semibold">API Calls</h2></div>
          <div className="stat-value text-2xl font-bold">3,912</div>
          <div className="stat-change"><span className="increase text-green-500">+8.2%</span></div>
        </div>
        <div className="dashboard-card bg-gray-800 p-4 rounded">
          <div className="dashboard-card-header mb-2"><h2 className="font-semibold">Balance</h2></div>
          <div className="stat-value text-2xl font-bold">$42.50</div>
          <div className="stat-change text-sm text-gray-400">Auto-recharge at $10</div>
        </div>
      </div>

      <div className="main-grid grid grid-cols-4 gap-4">
        <div className="dashboard-card bg-gray-800 p-4 rounded col-span-2">
          <div className="dashboard-card-header flex justify-between items-center mb-2">
            <h2 className="font-semibold">Recent Activity</h2>
            <a href="#" className="text-brand-green hover:underline">View All Logs →</a>
          </div>
          <div className="table-wrapper overflow-x-auto">
            <table className="activity-table w-full text-sm">
              <thead>
                <tr>
                  <th className="text-left py-2">Timestamp</th>
                  <th className="text-left py-2">Type</th>
                  <th className="text-left py-2">Details</th>
                  <th className="text-left py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2 mins ago</td>
                  <td>Message</td>
                  <td>To: +14155551234 (order_shipped)</td>
                  <td><span className="status-badge approved bg-green-600 text-white px-2 py-1 rounded">Delivered</span></td>
                </tr>
                <tr>
                  <td>15 mins ago</td>
                  <td>Template</td>
                  <td>Created "new_promo_q2"</td>
                  <td><span className="status-badge pending bg-yellow-500 text-white px-2 py-1 rounded">Pending</span></td>
                </tr>
                <tr>
                  <td>21 mins ago</td>
                  <td>Message</td>
                  <td>To: +13125558901 (password_reset)</td>
                  <td><span className="status-badge rejected bg-red-600 text-white px-2 py-1 rounded">Failed</span></td>
                </tr>
                <tr>
                  <td>1 hour ago</td>
                  <td>WABA</td>
                  <td>Credit line top-up: $50.00</td>
                  <td><span className="status-badge approved bg-green-600 text-white px-2 py-1 rounded">Success</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="dashboard-card bg-gray-800 p-4 rounded">
          <div className="dashboard-card-header flex justify-between items-center mb-2">
            <h2 className="font-semibold">API &amp; Webhooks</h2>
            <a href="#" className="text-brand-green hover:underline">Settings →</a>
          </div>
          <p className="text-xs text-gray-400 mb-6 -mt-2">Your secret key and webhook endpoint.</p>
          <strong>API Key</strong>
          <p className="font-mono bg-gray-900 p-3 rounded text-xs mt-2">sk_live_••••••••••••••••••••</p>
        </div>
        <div className="dashboard-card bg-gray-800 p-4 rounded">
          <div className="dashboard-card-header flex justify-between items-center mb-2">
            <h2 className="font-semibold">Template Status</h2>
            <a href="#" className="text-brand-green hover:underline">Manage →</a>
          </div>
          <div className="table-wrapper overflow-x-auto">
            <table className="activity-table w-full text-sm">
              <tbody>
                <tr>
                  <td>order_shipped</td>
                  <td><span className="status-badge approved bg-green-600 text-white px-2 py-1 rounded">Approved</span></td>
                </tr>
                <tr>
                  <td>password_reset</td>
                  <td><span className="status-badge approved bg-green-600 text-white px-2 py-1 rounded">Approved</span></td>
                </tr>
                <tr>
                  <td>abandoned_cart</td>
                  <td><span className="status-badge rejected bg-red-600 text-white px-2 py-1 rounded">Rejected</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}