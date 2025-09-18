import React from "react";

function ContractsList() {
  return (
    <div>
      {/* Filter Controls */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-gray-700">Filter by:</span>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
              All Contracts
            </button>
            <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
              All Networks
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <div className="w-4 h-4 bg-gray-400"></div>
          </button>
          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 bg-gray-50">
            <div className="w-4 h-4 bg-gray-600"></div>
          </button>
        </div>
      </div>

      {/* Contract Card */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-blue-600 rounded"></div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Uniswap V3 Pool (USDC/ETH)
              </h3>
              <p className="text-sm text-gray-500 font-mono">
                0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                  Active
                </span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                  DeFi
                </span>
                <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded">
                  Ethereum
                </span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium text-gray-900 mb-1">
              12 Events Tracked
            </div>
            <div className="text-xs text-gray-500">
              Last notification: 2 hours ago
            </div>
            <div className="flex items-center gap-2 mt-2">
              <button className="p-1 hover:bg-gray-100 rounded">
                <div className="w-4 h-4 bg-gray-400"></div>
              </button>
              <button className="p-1 hover:bg-gray-100 rounded">
                <div className="w-4 h-4 bg-gray-400"></div>
              </button>
              <button className="p-1 hover:bg-gray-100 rounded">
                <div className="w-4 h-4 bg-gray-400"></div>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 pt-4 border-t border-gray-200">
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">
              Monitored Events
            </h4>
            <div className="flex flex-wrap gap-1">
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                Swap
              </span>
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                Mint
              </span>
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                Burn
              </span>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">
              Notification Channels
            </h4>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">
              Filters Applied
            </h4>
            <p className="text-xs text-gray-600">Amount - 1000 USDC</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContractsList;
