import { useState } from "react";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import { CandlestickBrushChart, Chart, Table } from "../components";
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
  const activeWalletCol = [
    {
      header: "S/N",
      accessor: (row) => row.id,
    },
    {
      header: "Adderess",
      accessor: (row) => row.address,
    },
    {
      header: "Tx Count",
      accessor: (row) => row.transactionCount,
    },
    {
      header: "Avg. Tx Value",
      accessor: (row) => row.transactionValue,
    },
    {
      header: "Protocol",
      accessor: (row) => row.protocol,
    },
    {
      header: "Category",
      accessor: (row) => row.category,
    },
    {
      header: "Last Active",
      accessor: (row) => row.lastActive,
    },
  ];
  const newWalletCol = [
    {
      header: "S/N",
      accessor: (row) => row.id,
    },
    {
      header: "Adderess",
      accessor: (row) => row.address,
    },
    {
      header: "Tx Count",
      accessor: (row) => row.transactionCount,
    },
    {
      header: "Balance",
      accessor: (row) => row.balance,
    },
    {
      header: "Protocol",
      accessor: (row) => row.protocol,
    },
    {
      header: "Status",
      accessor: (row) => row.status,
    },
    {
      header: "First Tx. Time",
      accessor: (row) => row.lastActive,
    },
  ];
  const newWalletData = [
    {
      id: 1,
      address: "0x7A......91E",
      transactionCount: 6,
      balance: "$210",
      protocol: "Uniswap",
      status: "Active",
      lastActive: "2 mins ago",
    },
    {
      id: 2,
      address: "0x7A......91E",
      transactionCount: 8,
      balance: "$100",
      protocol: "Uniswap",
      status: "New",
      lastActive: "2 hrs ago",
    },
    {
      id: 3,
      address: "0x7A......91E",
      transactionCount: 9,
      balance: "$200",
      protocol: "Uniswap",
      status: "Active",
      lastActive: "5 mins ago",
    },
    {
      id: 4,
      address: "0x7A......91E",
      transactionCount: 4,
      balance: "$30",
      protocol: "Uniswap",
      status: "New",
      lastActive: "2 mins ago",
    },
    {
      id: 5,
      address: "0x7A......91E",
      transactionCount: 25,
      balance: "$410",
      protocol: "Uniswap",
      status: "New",
      lastActive: "2 mins ago",
    },
    {
      id: 6,
      address: "0x7A......91E",
      transactionCount: 5,
      balance: "$210",
      protocol: "Uniswap",
      status: "Active",
      lastActive: "2 mins ago",
    },
    {
      id: 7,
      address: "0x7A......91E",
      transactionCount: 2,
      balance: "$310",
      protocol: "Uniswap",
      status: "New",
      lastActive: "2 mins ago",
    },
    {
      id: 8,
      address: "0x7A......91E",
      transactionCount: 1,
      balance: "$350",
      protocol: "Uniswap",
      status: "New",
      lastActive: "2 mins ago",
    },
    {
      id: 9,
      address: "0x7A......91E",
      transactionCount: 10,
      balance: "$307",
      protocol: "Uniswap",
      status: "Active",
      lastActive: "2 mins ago",
    },
  ];
  const activeWalletData = [
    {
      id: 1,
      address: "0x7A......91E",
      transactionCount: 125,
      transactionValue: "$3,210",
      protocol: "Uniswap",
      category: "Power User",
      lastActive: "2 mins ago",
    },
    {
      id: 2,
      address: "0x7A......91E",
      transactionCount: 125,
      transactionValue: "$3,210",
      protocol: "Uniswap",
      category: "Power User",
      lastActive: "2 mins ago",
    },
    {
      id: 3,
      address: "0x7A......91E",
      transactionCount: 125,
      transactionValue: "$3,210",
      protocol: "Uniswap",
      category: "Power User",
      lastActive: "2 mins ago",
    },
    {
      id: 4,
      address: "0x7A......91E",
      transactionCount: 125,
      transactionValue: "$3,210",
      protocol: "Uniswap",
      category: "Power User",
      lastActive: "2 mins ago",
    },
    {
      id: 5,
      address: "0x7A......91E",
      transactionCount: 125,
      transactionValue: "$3,210",
      protocol: "Uniswap",
      category: "Power User",
      lastActive: "2 mins ago",
    },
    {
      id: 6,
      address: "0x7A......91E",
      transactionCount: 125,
      transactionValue: "$3,210",
      protocol: "Uniswap",
      category: "Power User",
      lastActive: "2 mins ago",
    },
    {
      id: 7,
      address: "0x7A......91E",
      transactionCount: 125,
      transactionValue: "$3,210",
      protocol: "Uniswap",
      category: "Power User",
      lastActive: "2 mins ago",
    },
    {
      id: 8,
      address: "0x7A......91E",
      transactionCount: 125,
      transactionValue: "$3,210",
      protocol: "Uniswap",
      category: "Power User",
      lastActive: "2 mins ago",
    },
    {
      id: 9,
      address: "0x7A......91E",
      transactionCount: 125,
      transactionValue: "$3,210",
      protocol: "Uniswap",
      category: "Power User",
      lastActive: "2 mins ago",
    },
  ];
  const dummyAreaData = [
    { time: "2024-01-01", value: 1200000000 },
    { time: "2024-01-05", value: 1255000000 },
    { time: "2024-01-10", value: 1232000000 },
    { time: "2024-01-15", value: 1288000000 },
    { time: "2024-01-20", value: 1315000000 },
    { time: "2024-01-25", value: 1342000000 },
    { time: "2024-02-01", value: 1389000000 },
    { time: "2024-02-05", value: 1401000000 },
    { time: "2024-02-10", value: 1427000000 },
    { time: "2024-02-15", value: 1453000000 },
  ];

  const candlestickData = [
    { time: "2024-01-01", open: 120, close: 125, low: 118, high: 130 },
    { time: "2024-01-02", open: 125, close: 123, low: 121, high: 128 },
    { time: "2024-01-03", open: 123, close: 128, low: 122, high: 132 },
    { time: "2024-01-04", open: 128, close: 130, low: 126, high: 135 },
    { time: "2024-01-05", open: 130, close: 127, low: 125, high: 133 },
    { time: "2024-01-06", open: 127, close: 129, low: 124, high: 131 },
    { time: "2024-01-07", open: 129, close: 134, low: 128, high: 138 },
    { time: "2024-01-07", open: 129, close: 134, low: 128, high: 138 },
    { time: "2024-01-07", open: 129, close: 134, low: 128, high: 138 },
    { time: "2024-01-07", open: 129, close: 134, low: 128, high: 138 },
    { time: "2024-01-07", open: 129, close: 134, low: 128, high: 138 },
    { time: "2024-01-07", open: 129, close: 134, low: 128, high: 138 },
    { time: "2024-01-07", open: 129, close: 134, low: 128, high: 138 },
    { time: "2024-01-07", open: 129, close: 134, low: 128, high: 138 },
    { time: "2024-01-07", open: 129, close: 134, low: 128, high: 138 },
    { time: "2024-01-07", open: 129, close: 134, low: 128, high: 138 },
    { time: "2024-01-07", open: 129, close: 134, low: 128, high: 138 },
    { time: "2024-01-07", open: 129, close: 134, low: 128, high: 138 },
    { time: "2024-01-07", open: 129, close: 134, low: 128, high: 138 },
    { time: "2024-01-07", open: 129, close: 134, low: 128, high: 138 },
    { time: "2024-01-07", open: 129, close: 134, low: 128, high: 138 },
    { time: "2024-01-07", open: 129, close: 134, low: 128, high: 138 },
    { time: "2024-01-07", open: 129, close: 134, low: 128, high: 138 },
    { time: "2024-01-07", open: 129, close: 134, low: 128, high: 138 },
    { time: "2024-01-07", open: 129, close: 134, low: 128, high: 138 },
    { time: "2024-01-07", open: 129, close: 134, low: 128, high: 138 },
    { time: "2024-01-07", open: 129, close: 134, low: 128, high: 138 },
    { time: "2024-01-07", open: 129, close: 134, low: 128, high: 138 },
    { time: "2024-01-07", open: 129, close: 134, low: 128, high: 138 },
    { time: "2024-01-07", open: 129, close: 134, low: 128, high: 138 },
    { time: "2024-01-07", open: 129, close: 134, low: 128, high: 138 },
    { time: "2024-01-07", open: 129, close: 134, low: 128, high: 138 },
    { time: "2024-01-07", open: 129, close: 134, low: 128, high: 138 },
  ];

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
      <div className="w-full border border-white bg-black my-10 z-0">
        <Chart data={dummyAreaData} />
      </div>
      <div className="">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold capitalize">
          User & Wallet insight
        </h1>
        <div className="w-full border border-[#dadada] rounded-lg py-2 mt-6">
          <div className="w-[95%] mx-auto">
            <div className="w-full flex items-center gap-x-6">
              {["new wallet", "active wallet", "top wallet"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1 rounded-full text-xs md:text-sm lg:text-base cursor-pointer font-semibold capitalize ${
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
              {activeTab === "new wallet" && (
                <div className="">
                  <Table columns={newWalletCol} data={newWalletData} />
                </div>
              )}
              {activeTab === "active wallet" && (
                <div className="">
                  <Table columns={activeWalletCol} data={activeWalletData} />
                </div>
              )}
              {activeTab === "top wallet" && (
                <Table columns={activeWalletCol} data={activeWalletData} />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-10">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold capitalize">
          Token & Market data
        </h1>
        <div className="w-full mt-6">
          <CandlestickBrushChart data={candlestickData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
