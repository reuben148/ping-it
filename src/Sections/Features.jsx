import React from "react";

function Features() {
  return (
    <div className="flex w-[1440px] h-[372px] px-[272px] py-[80px] justify-center items-center shrink-0 border-0 border-solid border-[#E5E7EB] bg-[#1D4ED8]">
      <div>
        <p className="w-[772px] h-[44px] shrink-0 text-white text-center text-[36px] font-bold leading-[40px]">
          Ready to Start Monitoring Smart Contracts?
        </p>

        <p className="w-[646px] h-[56px] shrink-0 text-white text-center font-normal text-[20px] leading-[28px] mt-[20px] ml-[62.97px] mr-[63.03px]">
          Join thousands of users who never miss important on-chain events.
          Connect your wallet and set up your first notification in minutes.
        </p>

        {/* Horizontal Row: Button + Secure Text */}
        <div className="flex items-center justify-center gap-4">
          <button className="w-[225.31px] flex items-center justify-between gap-4 px-6 py-3 border border-black bg-white text-black font-medium shadow-[3px_3px_0px_0px_black] mt-[41px]">
            <span>Connect Wallet</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="13"
              viewBox="0 0 8 13"
              fill="none"
            >
              <g clip-path="url(#clip0_235_7687)">
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
          </button>

          <div className="flex items-center gap-2 text-sm text-white/80 mt-[49px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
            >
              <g clip-path="url(#clip0_235_7669)">
                <path
                  d="M8.15626 0C8.30001 0 8.44376 0.03125 8.57501 0.090625L14.4594 2.5875C15.1469 2.87813 15.6594 3.55625 15.6563 4.375C15.6406 7.475 14.3656 13.1469 8.98126 15.725C8.45939 15.975 7.85314 15.975 7.33126 15.725C1.94689 13.1469 0.671889 7.475 0.656264 4.375C0.653139 3.55625 1.16564 2.87813 1.85314 2.5875L7.74064 0.090625C7.86876 0.03125 8.01251 0 8.15626 0ZM8.15626 2.0875V13.9C12.4688 11.8125 13.6281 7.19062 13.6563 4.41875L8.15626 2.0875Z"
                  fill="white"
                  fill-opacity="0.8"
                />
              </g>
              <defs>
                <clipPath id="clip0_235_7669">
                  <path d="M0.15625 0H16.1562V16H0.15625V0Z" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="w-[159px] h-[20px] shrink-0 text-white/80 text-center text-[14px] font-normal leading-[20px]">
              Secure & Gasless Setup
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
