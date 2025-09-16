import React from "react";

const PingItLanding = () => {
  return (
    <div className="min-h-screen bg-[url('Background-image.png')] bg-cover bg-center flex flex-col">
      {/* Navbar */}
      <nav className="inline-flex h-[47px] w-[1306px] border border-black shadow-[3px_3px_0px_0px_black] mt-[25px] mt-[23px] ml-[73px] mr-[61px] bg-white">
       
      </nav>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-grow px-6 text-center max-w-4xl mx-auto">
        <div
          className="inline-flex h-[36px] justify-end items-start gap-2 flex-shrink-0 
                rounded-full border-0 border-solid border-[#E5E7EB] bg-white 
                pt-[8px] pr-[10.938px] pb-[7px] pl-[16px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
          >
            <g clip-path="url(#clip0_234_6325)">
              <path
                d="M4.28206 11.2744L3.43714 10.4295C3.20471 10.1971 3.12268 9.86076 3.22659 9.54904C3.30862 9.30568 3.418 8.98849 3.54925 8.62482H0.656277C0.42112 8.62482 0.20237 8.49904 0.0847921 8.29396C-0.032786 8.08888 -0.0300516 7.83732 0.0902609 7.63498L1.52581 5.21505C1.88128 4.61623 2.52385 4.24982 3.21839 4.24982H5.46878C5.5344 4.14045 5.60003 4.03927 5.66565 3.94084C7.9051 0.637711 11.241 0.528336 13.2317 0.894742C13.5489 0.952164 13.7949 1.20099 13.8551 1.51818C14.2215 3.51154 14.1094 6.84474 10.809 9.0842C10.7133 9.14982 10.6094 9.21545 10.5 9.28107V11.5315C10.5 12.226 10.1336 12.8713 9.53479 13.224L7.11487 14.6596C6.91253 14.7799 6.66096 14.7826 6.45589 14.6651C6.25081 14.5475 6.12503 14.3315 6.12503 14.0936V11.1623C5.73948 11.2963 5.40315 11.4057 5.14885 11.4877C4.84261 11.5861 4.50901 11.5014 4.27932 11.2744H4.28206ZM10.5 5.34357C10.7901 5.34357 11.0683 5.22834 11.2734 5.02322C11.4785 4.8181 11.5938 4.5399 11.5938 4.24982C11.5938 3.95974 11.4785 3.68154 11.2734 3.47642C11.0683 3.2713 10.7901 3.15607 10.5 3.15607C10.2099 3.15607 9.93175 3.2713 9.72663 3.47642C9.52151 3.68154 9.40628 3.95974 9.40628 4.24982C9.40628 4.5399 9.52151 4.8181 9.72663 5.02322C9.93175 5.22834 10.2099 5.34357 10.5 5.34357Z"
                fill="#1D4ED8"
              />
            </g>
            <defs>
              <clipPath id="clip0_234_6325">
                <path d="M0 0.75H14V14.75H0V0.75Z" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <div className="w-[286px] h-[20px] text-center text-blue-700 font-medium text-[14px] leading-normal font-inter text-[#1D4ED8]">
            Smart Contract Notifications Made Simple
          </div>
        </div>

        <div className="w-[903px] h-[132px] flex-shrink-0 text-center text-black font-extrabold text-[60px] leading-[60px] font-inter mt-[32px]">
          Never Miss an{" "}
          <span className="text-black/70">
            On-Chain <br></br> Event
          </span>{" "}
          Again
        </div>

        <div className="w-[658px] h-[65px] flex-shrink-0 text-center text-[#3A3A3A] font-medium text-[16px] leading-[33px] font-inter">
          Get instant notifications when specific functions or events are
          triggered in your favorite smart contracts. Stay informed, stay ahead.
        </div>

        <button className="inline-flex h-[47px] w-[225.31px] border border-black shadow-[3px_3px_0px_0px_black] mt-[25px]">
          {/* Left: Blue part */}
          <div className="flex items-center justify-center w-[180px] h-full px-[29px] py-[15px] bg-[#1D4ED8]">
            <span className="text-white font-medium text-[16px] leading-normal font-inter text-center">
              Connect Wallet
            </span>
          </div>

          {/* Right: White part with icon */}
          <div className="flex items-center justify-center w-[45.31px] h-full pr-[20.81px] pl-[0px] bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="13"
              viewBox="0 0 8 13"
              fill="none"
            >
              <g clipPath="url(#clip0_235_7687)">
                <path
                  d="M7.27968 5.97012C7.57264 6.26309 7.57264 6.73887 7.27968 7.03184L2.77968 11.5318C2.48671 11.8248 2.01093 11.8248 1.71796 11.5318C1.42499 11.2389 1.42499 10.7631 1.71796 10.4701L5.68827 6.4998L1.7203 2.52949C1.42733 2.23652 1.42733 1.76074 1.7203 1.46777C2.01327 1.1748 2.48905 1.1748 2.78202 1.46777L7.28202 5.96777L7.27968 5.97012Z"
                  fill="black"
                />
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
