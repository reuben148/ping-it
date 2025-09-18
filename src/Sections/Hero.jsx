// src/components/Dashboard.jsx
import React from "react";

const Dashboard = () => {
  return (
    <section className="w-full max-w-6xl mx-auto mt-12 border border-black shadow-[3px_3px_0px_0px_black] bg-white rounded-md">
      {/* Top Bar */}
      <div className="flex justify-between items-center border-b px-4 py-3">
        <div className="flex items-center space-x-2 font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
          >
            <path
              d="M12.9033 0.604492C16.2782 0.604727 19.0136 3.34089 19.0136 6.71582V12.8271C19.0134 16.2019 16.278 18.9373 12.9033 18.9375H6.79196C3.41703 18.9375 0.680868 16.202 0.680634 12.8271V6.71582C0.680634 3.34075 3.41689 0.604492 6.79196 0.604492H12.9033Z"
              fill="#FCFCFC"
            />
            <path
              d="M12.9033 0.604492C16.2782 0.604727 19.0136 3.34089 19.0136 6.71582V12.8271C19.0134 16.2019 16.278 18.9373 12.9033 18.9375H6.79196C3.41703 18.9375 0.680868 16.202 0.680634 12.8271V6.71582C0.680634 3.34075 3.41689 0.604492 6.79196 0.604492H12.9033Z"
              stroke="#E5E7EB"
            />
            <path
              d="M9.94235 4.42383C9.57264 4.42383 9.27395 4.72252 9.27395 5.09223V5.49327C7.74915 5.80241 6.60034 7.15175 6.60034 8.76845V9.16113C6.60034 10.1428 6.23898 11.0911 5.58729 11.8264L5.43272 11.9998C5.25726 12.1961 5.21549 12.4781 5.32202 12.7183C5.42854 12.9585 5.66875 13.1131 5.93193 13.1131H13.9528C14.216 13.1131 14.4541 12.9585 14.5627 12.7183C14.6713 12.4781 14.6274 12.1961 14.452 11.9998L14.2974 11.8264C13.6457 11.0911 13.2844 10.1449 13.2844 9.16113V8.76845C13.2844 7.15175 12.1355 5.80241 10.6108 5.49327V5.09223C10.6108 4.72252 10.3121 4.42383 9.94235 4.42383ZM10.8886 14.7277C11.1392 14.477 11.2792 14.1366 11.2792 13.7815H9.94235H8.60554C8.60554 14.1366 8.74549 14.477 8.99614 14.7277C9.24679 14.9783 9.58726 15.1183 9.94235 15.1183C10.2974 15.1183 10.6379 14.9783 10.8886 14.7277Z"
              fill="black"
            />
          </svg>
          <span>Ping It</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-green-600 text-sm bg-green-100 px-3 py-1 rounded-full">
            Connected: 0x742d...35d
          </span>
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="10"
              viewBox="0 0 9 10"
              fill="none"
            >
              <g clip-path="url(#clip0_235_6919)">
                <path
                  d="M4.22221 5.33333C4.83 5.33333 5.41289 5.09189 5.84266 4.66212C6.27243 4.23235 6.51388 3.64945 6.51388 3.04167C6.51388 2.43388 6.27243 1.85098 5.84266 1.42121C5.41289 0.991443 4.83 0.75 4.22221 0.75C3.61442 0.75 3.03153 0.991443 2.60176 1.42121C2.17198 1.85098 1.93054 2.43388 1.93054 3.04167C1.93054 3.64945 2.17198 4.23235 2.60176 4.66212C3.03153 5.09189 3.61442 5.33333 4.22221 5.33333ZM3.40401 6.19271C1.6405 6.19271 0.211792 7.62142 0.211792 9.38493C0.211792 9.67855 0.44991 9.91667 0.74353 9.91667H7.70089C7.99451 9.91667 8.23263 9.67855 8.23263 9.38493C8.23263 7.62142 6.80391 6.19271 5.04041 6.19271H3.40401Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_235_6919">
                  <path
                    d="M0.211792 0.75H8.23263V9.91667H0.211792V0.75Z"
                    fill="white"
                  />
                </clipPath>
              </defs>
            </svg>
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
            <button className="bg-blue-600 text-white px-4 cursor-pointer py-2 rounded-md font-medium shadow hover:bg-blue-700">
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
              <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm cursor-pointer">
                + Add Contract
              </button>
            </div>
          </div>

          {/* Uniswap Contract Card */}
          <div className="mt-6 border rounded-md p-4 shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">Uniswap V3 Pool (USDC/ETH)</h3>
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
                <p className="text-xs text-gray-400">
                  Last notification: 2 hours ago
                </p>
              </div>
            </div>

            <div className="flex space-x-4 mt-4 text-xs text-gray-600">
              <span>Monitored Events: Swap, Mint, Burn</span>
              <span>Channels: Email, Telegram</span>
              <span>Filters: Amount 1000 USDC</span>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Dashboard;
