import React from "react";

function Card() {
  return (
    <section className="w-full px-4 md:px-10 lg:px-20 py-16 bg-transparent">
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#111827] leading-tight">
          Powerful Features for Smart Contract Monitoring
        </h2>
        <p className="mt-2 text-lg text-[#4B5563]">
          Everything you need to stay connected with your smart contracts
        </p>
      </div>

      {/* Grid Container */}
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl w-full">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {[
              {
                title: "Multi-Wallet Support",
                description:
                  "Connect with MetaMask, Argent, Rabby, and other popular wallets. Seamless integration with your preferred wallet.",
                bg: "#F0F9FF",
                iconBg: "#2563EB",
              },
              {
                title: "Custom Filters",
                description:
                  "Set specific conditions like 'only if transfer > 1000 USDC' to receive only the notifications that matter to you.",
                bg: "#FEF2F2",
                iconBg: "#F97316",
              },
            ].map((card, index) => (
              <div key={index} className="relative w-full max-w-sm mx-auto">
                <div className="absolute top-1.5 left-1.5 w-full h-full bg-black rounded-lg z-0" />
                <div
                  className="relative w-full h-full rounded-lg p-6 z-10 flex flex-col"
                  style={{ backgroundColor: card.bg }}
                >
                  <div
                    className="w-10 h-10 mb-4 rounded-md text-white flex items-center justify-center"
                    style={{ backgroundColor: card.iconBg }}
                  >
                    {/* You can place unique SVG icons here */}
                    <span className="text-sm font-bold">i</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#111827] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#4B5563] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Column */}
          <div className="relative w-full max-w-sm mx-auto">
            <div className="absolute top-1.5 left-1.5 w-full h-full bg-black rounded-lg z-0" />
            <div className="relative w-full h-full bg-[#F5ECFF] rounded-lg p-6 z-10 flex flex-col justify-between">
              {[
                {
                  title: "Smart Notifications",
                  description:
                    "Get alerts for on-chain events as they happen. Fully customizable and fast.",
                  iconBg: "#8B5CF6",
                },
                {
                  title: "Gasless Setup",
                  description:
                    "No gas fees required! Simply sign a message to confirm your subscription preferences.",
                  iconBg: "#6366F1",
                },
              ].map((item, i) => (
                <div key={i} className="mb-6">
                  <div
                    className="w-10 h-10 mb-4 rounded-md text-white flex items-center justify-center"
                    style={{ backgroundColor: item.iconBg }}
                  >
                    <span className="text-sm font-bold">i</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#111827] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#4B5563] leading-relaxed">
                    {item.description}
                  </p>
                  {i === 0 && <hr className="my-6 border-[#C4C4C4]" />}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {[
              {
                title: "Multi-Channel Alerts",
                description:
                  "Receive notifications via Email or Telegram. Choose your preferred communication channel for instant updates.",
                bg: "#ECFDF5",
                iconBg: "#10B981",
              },
              {
                title: "Subscription Management",
                description:
                  "Manage all your subscriptions in one place. Edit rules, pause notifications, or unsubscribe anytime with ease.",
                bg: "#FFFBEB",
                iconBg: "#EC4899",
              },
            ].map((card, index) => (
              <div key={index} className="relative w-full max-w-sm mx-auto">
                <div className="absolute top-1.5 left-1.5 w-full h-full bg-black rounded-lg z-0" />
                <div
                  className="relative w-full h-full rounded-lg p-6 z-10 flex flex-col"
                  style={{ backgroundColor: card.bg }}
                >
                  <div
                    className="w-10 h-10 mb-4 rounded-md text-white flex items-center justify-center"
                    style={{ backgroundColor: card.iconBg }}
                  >
                    <span className="text-sm font-bold">i</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#111827] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#4B5563] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
