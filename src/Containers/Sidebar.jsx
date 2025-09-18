import React from "react";

function Sidebar() {
  const menuItems = [
    { label: "Overview", active: false },
    { label: "My Contracts", active: true },
    { label: "Notifications", active: false },
    { label: "Activity History", active: false },
    { label: "Settings", active: false },
  ];

  return (
    <div className="w-64 bg-white/90 backdrop-blur-sm h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
     
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
          <span className="font-semibold text-gray-900">Ping It</span>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  item.active
                    ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span className="font-medium">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
