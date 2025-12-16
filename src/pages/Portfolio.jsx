import { useState } from "react";
import { DoughnutChart, Table } from "../components";
import { NFT } from "../assets";

const Portfolio = () => {
  const token = [
    {
      id: 1,
      coin: "USDC",
      amount: "$10",
    },
    {
      id: 2,
      coin: "USDT",
      amount: "$50",
    },
    {
      id: 3,
      coin: "Sol",
      amount: "$24",
    },
    {
      id: 4,
      coin: "ETH",
      amount: "$50",
    },
  ];
  const [activeTabs, setActiveTabs] = useState("token");
  const doudata = [
    { value: 40, name: "Uniswap" },
    { value: 25, name: "GMX" },
    { value: 20, name: "Aave" },
    { value: 15, name: "Others" },
  ];
  const nftData = [
    {
      id: 1,
      name: "CryptoPunk",
      price: "$7.58M",
      image: NFT,
    },
    {
      id: 2,
      name: "CryptoPunk",
      price: "$7.58M",
      image: NFT,
    },
    {
      id: 3,
      name: "CryptoPunk",
      price: "$7.58M",
      image: NFT,
    },
    {
      id: 4,
      name: "CryptoPunk",
      price: "$7.58M",
      image: NFT,
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
  return (
    <div>
      <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold ">
        Portfolio
      </h1>
      <div className="mt-6 w-full flex items-start flex-col md:flex-row gap-6">
        <div className="w-full md:w-[55%] border border-[#dadada]">
          <div className="w-[95%] mx-auto mt-2 flex items-center gap-x-6">
            {["token", "nft"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTabs(tab)}
                className={`px-5 py-1 rounded-full text-xs md:text-sm lg:text-base cursor-pointer font-semibold capitalize ${
                  activeTabs === tab
                    ? "bg-[#ed4d06] text-white"
                    : "bg-transparent"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          {activeTabs === "token" && (
            <div className="w-[95%] mx-auto mt-6 pb-6">
              <div className="mt-4">
                {token.map((item) => (
                  <div className="flex items-center gap-x-3 pb-3" key={item.id}>
                    <h3 className="text-base md:text-lg lg:text-xl  font-semibold">
                      {item.amount}
                    </h3>
                    <h3 className="text-base md:text-lg lg:text-xl font-semibold">
                      {item.coin}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="">
            {activeTabs === "nft" && (
              <div className="w-[95%] mx-auto mt-6 pb-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {nftData.map((item) => (
                    <div className="flex flex-col items-center" key={item.id}>
                      <img
                        src={item.image}
                        alt={`${item.name}`}
                        className="w-28 h-32"
                      />
                      <p className="pt-2">{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="w-full md:w-[45%] border border-[#dadada]">
          <DoughnutChart title="Arbitrum TVL Distribution" data={doudata} />
        </div>
      </div>
      <div className="w-full mt-9">
        <h2 className="capitalize text-xl md:text-2xl lg:text-3xl font-semibold">
          Transaction history
        </h2>
        <div className="mt-5">
          <Table columns={newWalletCol} data={newWalletData} />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
