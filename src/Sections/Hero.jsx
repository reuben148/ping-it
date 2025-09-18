// src/components/Dashboard.jsx
import React from "react";

const Dashboard = () => {
  return (
    <section className="w-full max-w-6xl mx-auto mt-12 border border-black shadow-[3px_3px_0px_0px_black] bg-white rounded-md">
      {/* Top Bar */}
      <div className="flex justify-between items-center border-b px-4 py-3">
        <div className="flex items-center space-x-2 font-semibold">
          <span>📌</span>
          <span>Ping It</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-green-600 text-sm bg-green-100 px-3 py-1 rounded-full">
            Connected: 0x742d...35d
          </span>
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            👤
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-56 border-r px-4 py-6 space-y-4 text-sm">
          <div className="font-medium">Overview</div>
          <div className="text-blue-600 font-medium">My Contracts</div>
          <div className="text-gray-600">Notifications</div>
          <div className="text-gray-600">Activity History</div>
          <div className="text-gray-600">Settings</div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-bold">My Contracts</h2>
              <p className="text-gray-600 text-sm">
                Manage and monitor your smart contract subscriptions
              </p>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium shadow hover:bg-blue-700">
              + Add Contract
            </button>
          </div>

          {/* Stats Boxes */}
          <div className="grid grid-cols-4 gap-4 mt-6">
            <div className="bg-white border rounded-md p-4 text-center shadow-sm">
              <p className="text-sm text-gray-500">Total Contracts</p>
              <p className="text-xl font-bold">8</p>
            </div>
            <div className="bg-white border rounded-md p-4 text-center shadow-sm">
              <p className="text-sm text-gray-500">Active</p>
              <p className="text-xl font-bold text-green-600">6</p>
            </div>
            <div className="bg-white border rounded-md p-4 text-center shadow-sm">
              <p className="text-sm text-gray-500">Paused</p>
              <p className="text-xl font-bold text-yellow-600">2</p>
            </div>
            <div className="bg-white border rounded-md p-4 text-center shadow-sm">
              <p className="text-sm text-gray-500">Notifications Today</p>
              <p className="text-xl font-bold text-purple-600">24</p>
            </div>
          </div>

          {/* Search + Layout Toggle */}
          <div className="flex justify-between items-center mt-6">
            <div className="flex space-x-2">
              <select className="border rounded px-2 py-1 text-sm">
                <option>All Contracts</option>
              </select>
              <select className="border rounded px-2 py-1 text-sm">
                <option>All Networks</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Search contracts..."
                className="border rounded px-3 py-1 text-sm"
              />
              <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm">
                + Add Contract
              </button>
            </div>
          </div>

          {/* Uniswap Contract Card */}
          <div className="mt-6 border rounded-md p-4 shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">
                  Uniswap V3 Pool (USDC/ETH)
                </h3>
                <p className="text-xs text-gray-500 break-all">
                  0x8e6a0c2ddd26efbb...35f640
                </p>
                <div className="flex space-x-2 mt-2 text-xs">
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded">
                    Active
                  </span>
                  <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded">
                    DeFi
                  </span>
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded">
                    Ethereum
                  </span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">12 Events Tracked</p>
                <p className="text-xs text-gray-400">Last notification: 2 hours ago</p>
              </div>
            </div>

            <div className="flex space-x-4 mt-4 text-xs text-gray-600">
              <span>Monitored Events: Swap, Mint, Burn</span>
              <span>Channels: Email, Telegram</span>
              <span>Filters: Amount  1000 USDC</span>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Dashboard;
