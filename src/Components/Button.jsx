import React from "react";

function Button() {
  return (
    <section className="flex flex-col w-[1440px] px-[80px] pt-[80px] pb-20 justify-center items-center border-0 border-solid border-[#E5E7EB] bg-[#F9FAFB]">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <p className="w-[326px] h-[44px] text-[#111827] text-center text-[36px] font-bold leading-[40px] mx-auto">
          How Ping It Works
        </p>
        <p className="w-[664px] h-[28px] text-[#4B5563] text-center text-[20px] font-normal leading-[28px] mt-2 mx-auto">
          Get started with smart contract notifications in just a few simple
          steps
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
        {[1, 2, 3, 4].map((step) => (
          <div
            key={step}
            className="relative w-[297px] h-[256px] flex-shrink-0"
          >
            {/* Shadow Box (Black BG Behind) */}
            <div className="absolute top-2 left-2 w-[297px] h-[256px] bg-black rounded-md" />

            {/* Foreground Card */}
            <div className="relative w-[296px] h-[262px] border border-[#C4C4C4] bg-white flex flex-col items-center justify-center p-4 z-10 rounded-md">
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center mb-4">
                {step}
              </div>
              <h3 className="text-lg font-bold text-black mb-2">
                Connect Wallet
              </h3>
              <p className="text-center text-gray-700 text-sm leading-[20px]">
                Connect your MetaMask, Argent, or other supported wallet to get
                started with Ping It.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Button;
