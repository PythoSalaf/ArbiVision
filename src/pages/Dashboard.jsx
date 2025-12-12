import { useState } from "react";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
const Dashboard = () => {
  const MetricsData = [
    {
      id: 1,
      title: "Total Market Value",
      amount: "9.09b",
      liquidity: "2.04%",
    },
    {
      id: 2,
      title: "24H Volume In Token Trading",
      amount: "165.44m",
      liquidity: "35.04%",
    },
    {
      id: 3,
      title: "Total Tokens",
      amount: "9.00m",
      liquidity: "2.04%",
    },
    {
      id: 4,
      title: "Transaction Volume",
      amount: "1000",
      liquidity: "1.04%",
    },
    {
      id: 5,
      title: "Block Times",
      amount: "9.00m",
      liquidity: "2.04%",
    },
    {
      id: 6,
      title: "Network Hashrate",
      amount: "9.09b",
      liquidity: "2.04%",
    },
  ];
  const [activeTab, setActiveTab] = useState("new wallet");
  return (
    <div className="w-full py-2">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold ">
        Blockchain Metrics
      </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 my-5">
        {MetricsData.map((item) => (
          <div
            className="w-[94%] mx-auto md:w-full rounded-xl shadow bg-white text-black py-2"
            key={item.id}
          >
            <div className="w-[85%] mx-auto">
              <div className="flex items-center gap-x-3 text-sm md:text-base font-bold">
                <h2 className="">$</h2>
                <h2 className="">{item.title}</h2>
              </div>
              <h2 className="uppercase text-lg md:text-xl lg:text-2xl font-bold my-2">
                ${item.amount}
              </h2>
              <div className="flex items-center gap-x-2 font-semibold">
                <FaArrowTrendUp className="text-green-700" />
                <h3 className="text-green-700">+2.04%</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full border border-white bg-black h-20 my-10"></div>
      <div className="">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold capitalize">
          User & Wallet insight
        </h1>
        <div className="w-full border border-[#dadada] rounded-lg py-2 mt-6">
          <div className="w-[95%] mx-auto">
            <div className="w-full flex items-center gap-x-6">
              {[
                "new wallet",
                "active wallet",
                "top wallet",
                "token distribution",
              ].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1 rounded-full cursor-pointer font-semibold capitalize ${
                    activeTab === tab
                      ? "bg-[#ed4d06] text-white"
                      : "bg-transparent"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="mt-5">
              {activeTab === "new wallet" && <div className="">New Wallet</div>}
              {activeTab === "active wallet" && (
                <div className="">Active Wallet</div>
              )}
              {activeTab === "top wallet" && (
                <div className="">Top Wallets</div>
              )}
              {activeTab === "token distribution" && (
                <div className="">Token Distribution</div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-10">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold capitalize">
          Token & Market data
        </h1>
      </div>
    </div>
  );
};

export default Dashboard;
