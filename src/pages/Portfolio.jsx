import { useState } from "react";
import { DoughnutChart, Table } from "../components";
import { NFT } from "../assets";
import { useAccountBalanceQuery } from "../feature/DuneSlice";

const Portfolio = () => {
  const [isConnect] = useState(true);
  const [activeTabs, setActiveTabs] = useState("token");
  const { data, isLoading, isError } = useAccountBalanceQuery(
    "0x0f85f1523666118eb752eec4a6f763776f4b5693"
  );
  console.log("Dune Data:", data);
  console.log("Balance Data:", data?.balances);
  const token = [
    {
      id: 1,
      coin: "USDC",
      amount: "10",
    },
    {
      id: 2,
      coin: "USDT",
      amount: "50",
    },
    {
      id: 3,
      coin: "Abr",
      amount: "24",
    },
    {
      id: 4,
      coin: "ETH",
      amount: "50",
    },
  ];
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
      header: "Amount",
      accessor: (row) => row.balance,
    },
    {
      header: "Tx. Type",
      accessor: (row) => row.protocol,
    },

    {
      header: "Date/Time",
      accessor: (row) => row.lastActive,
    },
  ];
  const newWalletData = [
    {
      id: 1,
      address: "0x7A......91E",
      balance: "$210",
      protocol: "Uniswap",
      lastActive: "2 mins ago",
    },
    {
      id: 2,
      address: "0x7A......91E",
      balance: "$100",
      protocol: "Uniswap",
      lastActive: "2 hrs ago",
    },
    {
      id: 3,
      address: "0x7A......91E",
      balance: "$200",
      protocol: "Uniswap",
      lastActive: "5 mins ago",
    },
    {
      id: 4,
      address: "0x7A......91E",
      balance: "$30",
      protocol: "Uniswap",
      lastActive: "2 mins ago",
    },
    {
      id: 5,
      address: "0x7A......91E",
      balance: "$410",
      protocol: "Uniswap",
      lastActive: "2 mins ago",
    },
    {
      id: 6,
      address: "0x7A......91E",
      balance: "$210",
      protocol: "Uniswap",
      lastActive: "2 mins ago",
    },
    {
      id: 7,
      address: "0x7A......91E",
      balance: "$310",
      protocol: "Uniswap",
      lastActive: "2 mins ago",
    },
    {
      id: 8,
      address: "0x7A......91E",
      balance: "$350",
      protocol: "Uniswap",
      lastActive: "2 mins ago",
    },
    {
      id: 9,
      address: "0x7A......91E",
      balance: "$307",
      protocol: "Uniswap",
      lastActive: "2 mins ago",
    },
  ];
  const positionCol = [
    {
      header: "S/N",
      accessor: (row) => row.id,
    },
    {
      header: "Protocol",
      accessor: (row) => row.protocol,
    },
    {
      header: "PoolID",
      accessor: (row) => row.poolId,
    },
    {
      header: "TokenPair",
      accessor: (row) => row.tokenPair,
    },
    {
      header: "Position Amount",
      accessor: (row) => row.positionAmount,
    },
    {
      header: "%Pool Ownership",
      accessor: (row) => row.ownership,
    },
  ];
  const positionData = [
    {
      id: 1,
      protocol: "Uniswap",
      poolId: "2140",
      tokenPair: "Uniswap",
      positionAmount: "$50",
      ownership: "50%",
    },
    {
      id: 2,
      protocol: "Uniswap",
      poolId: "2140",
      tokenPair: "Uniswap",
      positionAmount: "$50",
      ownership: "50%",
    },
    {
      id: 3,
      protocol: "Uniswap",
      poolId: "2140",
      tokenPair: "Uniswap",
      positionAmount: "$50",
      ownership: "50%",
    },
    {
      id: 4,
      protocol: "Uniswap",
      poolId: "2140",
      tokenPair: "Uniswap",
      positionAmount: "$50",
      ownership: "50%",
    },
    {
      id: 5,
      protocol: "Uniswap",
      poolId: "2140",
      tokenPair: "Uniswap",
      positionAmount: "$50",
      ownership: "50%",
    },
    {
      id: 6,
      protocol: "Uniswap",
      poolId: "2140",
      tokenPair: "Uniswap",
      positionAmount: "$50",
      ownership: "50%",
    },
    {
      id: 7,
      protocol: "Uniswap",
      poolId: "2140",
      tokenPair: "Uniswap",
      positionAmount: "$50",
      ownership: "50%",
    },
    {
      id: 8,
      protocol: "Uniswap",
      poolId: "2140",
      tokenPair: "Uniswap",
      positionAmount: "$50",
      ownership: "50%",
    },
  ];
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

  return (
    <div className="w-full">
      {isConnect ? (
        <div className="">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold ">
            Portfolio
          </h1>
          <div className="mt-6 w-full flex items-start flex-col md:flex-row gap-6">
            <div className="w-full md:w-[55%] h-98 border border-[#dadada]">
              <div className="w-[95%] mx-auto mt-2 flex items-center gap-x-6">
                {["token", "nft"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTabs(tab)}
                    className={`px-7 py-1 rounded-full text-sm lg:text-lg md:text-base cursor-pointer font-semibold capitalize ${
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
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {token.map((item) => (
                      <div
                        className="w-[94%] mx-auto md:w-full rounded-xl shadow bg-white text-black py-2"
                        key={item.id}
                      >
                        <div className="w-[85%] mx-auto">
                          <div className="flex items-center gap-x-3 text-sm md:text-base font-bold">
                            <h2 className="w-8 h-8 bg-black rounded-full"></h2>
                            <h2 className="">{item.coin}</h2>
                          </div>
                          <h2 className="uppercase text-lg md:text-xl lg:text-2xl font-bold mt-2">
                            ${item.amount}
                          </h2>
                        </div>
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
                        <div
                          className="flex flex-col items-center"
                          key={item.id}
                        >
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
            <div className="w-full md:w-[45%] pt-[-200px] border border-[#dadada]">
              {activeTabs === "token" && (
                <div className="w-[90%] mx-auto pt-2">
                  <h2 className="text-base md:text-lg font-semibold">
                    Tokens Chart
                  </h2>
                  <DoughnutChart
                    title="Arbitrum TVL Distribution"
                    data={doudata}
                  />
                </div>
              )}
              {activeTabs === "nft" && (
                <div className="w-[90%] mx-auto pt-2">
                  <h2 className="text-base md:text-lg font-semibold">
                    NFT Chart
                  </h2>
                  <DoughnutChart
                    title="Arbitrum TVL Distribution"
                    data={doudata}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="w-full my-9">
            <h2 className="capitalize text-xl md:text-2xl lg:text-3xl font-semibold">
              Transaction history
            </h2>
            <div className="mt-5">
              <Table columns={newWalletCol} data={newWalletData} />
            </div>
          </div>
          <div className="w-full">
            <h2 className="capitalize text-xl md:text-2xl lg:text-3xl font-semibold">
              DeFi Position Details
            </h2>
            <div className="mt-5">
              <Table columns={positionCol} data={positionData} />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-[20vh]">
          <h2 className="text-red-600 text-lg md:text-xl lg:text-2xl">
            Please connect your wallet to see your portfolio info
          </h2>
        </div>
      )}

      <div className="w-full mt-9">
        <h2 className="capitalize text-xl md:text-2xl lg:text-3xl font-semibold">
          Get specific address information
        </h2>
        <div className="flex items-center justify-center w-full mt-10 mb-4">
          <div className="border border-[#dadada] w-full py-4">
            <div className="w-[95%] mx-auto flex items-center gap-5">
              <input
                type="search"
                className="border w-[80%] px-4 outline-0 py-2 placeholder:text-base md:placeholder:text-lg"
                placeholder="Enter address"
              />
              <button className="border w-[20%] py-2 cursor-pointer">
                Get info
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 w-full ">
          <h2 className="capitalize text-xl md:text-2xl lg:text-3xl font-semibold">
            Wallet Behaviour Insight
          </h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 my-8">
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
                  <h2 className="uppercase text-lg md:text-xl lg:text-2xl font-bold mt-2">
                    ${item.amount}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 w-full flex items-start flex-col md:flex-row gap-6">
          <div className="w-full md:w-[55%] h-98 border border-[#dadada]">
            <div className="w-[95%] mx-auto mt-2 flex items-center gap-x-6">
              {["token", "nft"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTabs(tab)}
                  className={`px-7 py-1 rounded-full text-sm lg:text-lg md:text-base cursor-pointer font-semibold capitalize ${
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
                    <div
                      className="flex items-center gap-x-3 pb-3"
                      key={item.id}
                    >
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
          <div className="w-full md:w-[45%] pt-[-200px] border border-[#dadada]">
            {activeTabs === "token" && (
              <div className="w-[90%] mx-auto pt-2">
                <h2 className="text-base md:text-lg font-semibold">
                  Tokens Chart
                </h2>
                <DoughnutChart
                  title="Arbitrum TVL Distribution"
                  data={doudata}
                />
              </div>
            )}
            {activeTabs === "nft" && (
              <div className="w-[90%] mx-auto pt-2">
                <h2 className="text-base md:text-lg font-semibold">
                  NFT Chart
                </h2>
                <DoughnutChart
                  title="Arbitrum TVL Distribution"
                  data={doudata}
                />
              </div>
            )}
          </div>
        </div>
        <div className="w-full mt-9">
          <h2 className="capitalize text-xl md:text-2xl lg:text-3xl font-semibold">
            Transaction history
          </h2>
          <div className="mt-5 pb-4">
            <Table columns={newWalletCol} data={newWalletData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
