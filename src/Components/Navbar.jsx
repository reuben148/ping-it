import React from "react";

const PingItLanding = () => {
  return (
    <div className="hidden lg:flex min-h-screen bg-[url('Background-image.png')] bg-cover bg-center flex-col items-center">
      {/* Navbar */}
      <nav className="w-full max-w-[1306px] h-[47px] border border-black shadow-[3px_3px_0px_0px_black] mt-6 bg-white px-6" />

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-grow w-full max-w-[1306px] px-6 text-center">
        {/* Tagline */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-4 py-2 mt-12">
          {/* Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
          >
            <g clipPath="url(#clip0_234_6325)">
              <path
                d="M4.28206 11.2744L3.43714 10.4295C3.20471..."
                fill="#1D4ED8"
              />
            </g>
            <defs>
              <clipPath id="clip0_234_6325">
                <path d="M0 0.75H14V14.75H0V0.75Z" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <span className="text-blue-700 font-medium text-sm">
            Smart Contract Notifications Made Simple
          </span>
        </div>

        {/* Heading */}
        <h1 className="mt-12 max-w-[903px] text-[3.75rem] leading-[3.75rem] font-extrabold text-black">
          Never Miss an{" "}
          <span className="text-black/70 block">
            On-Chain <br /> Event
          </span>{" "}
          Again
        </h1>

        {/* Subtext */}
        <p className="mt-6 max-w-[658px] text-[#3A3A3A] text-base font-medium leading-[2.1rem]">
          Get instant notifications when specific functions or events are
          triggered in your favorite smart contracts. Stay informed, stay ahead.
        </p>

        {/* CTA Button */}
        <button className="inline-flex mt-8 h-[47px] w-[225.31px] border border-black shadow-[3px_3px_0px_0px_black]">
          {/* Blue Part */}
          <div className="flex items-center justify-center w-[180px] h-full px-[29px] py-[15px] bg-[#1D4ED8]">
            <span className="text-white font-medium text-base">
              Connect Wallet
            </span>
          </div>

          {/* White Icon Part */}
          <div className="flex items-center justify-center w-[45.31px] h-full pr-[20.81px] bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="13"
              viewBox="0 0 8 13"
              fill="none"
            >
              <g clipPath="url(#clip0_235_7687)">
                <path d="M7.27968 5.97012C7.57264 6.26309..." fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_235_7687">
                  <path d="M0 0.5H7.5V12.5H0V0.5Z" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </button>
      </main>
    </div>
  );
};

export default PingItLanding;
