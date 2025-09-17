import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-[#111827] border-t border-[#E5E7EB] py-10 px-4 lg:px-20">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-10">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 border-b border-gray-700 pb-10">
          {/* Left Column */}
          <div className="max-w-md flex-1">
            {/* Logo */}
            <div className="flex items-center w-fit h-[47px] px-2 py-2 bg-black border border-black rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="mr-2"
              >
                {/* Your Logo SVG */}
                <path d="..." fill="#FCFCFC" />
              </svg>
              <p className="text-white text-base font-bold leading-7">
                Ping It
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-base leading-6 mt-4">
              The easiest way to stay informed about smart contract events.
              Never miss an important on-chain transaction again.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">
              {["span.png", "Frame.png", "frame1.png"].map((src, index) => (
                <div
                  key={index}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800"
                >
                  <img src={src} alt={`icon-${index}`} className="w-4 h-4" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div className="flex-1 min-w-[200px]">
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {["Features", "Dashboard", "API", "Pricing"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="flex-1 min-w-[200px]">
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {["Documentation", "Help Center", "Contact Us", "Status"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center text-sm text-gray-500 pt-4">
          <p>© 2024 Ping It. All rights reserved.</p>
          <div className="flex flex-wrap gap-6 mt-4 lg:mt-0">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
