import { useState, useMemo } from "react";
import { FaArrowTrendUp } from "react-icons/fa6";

import {
  CandlestickBrushChart,
  Pagination,
  SkeletonTable,
  Table,
} from "../components";

import {
  useGetTopTokenHolderQuery,
  useGetBlockchainMetricsQuery,
} from "../feature/ChainbaseSlice";

import { useGetTokenOHLCVHistoryQuery } from "../feature/MobulaSlice";

/* -------------------------------------------------------------------------- */
/*                                  CONSTANTS                                 */
/* -------------------------------------------------------------------------- */

const DEFAULT_CONTRACT = "0xaf88d065e77c8cC2239327C5EDb3A432268e5831";
const PAGE_SIZE = 10;
const TABS = ["new wallet", "active wallet"];

/* -------------------------------------------------------------------------- */
/*                              STATIC UI DATA                                */
/* -------------------------------------------------------------------------- */

const METRICS_DATA = [
  { id: 1, title: "Total Market Value", amount: "9.09b" },
  { id: 2, title: "24H Volume In Token Trading", amount: "165.44m" },
  { id: 3, title: "Total Tokens", amount: "9.00m" },
  { id: 4, title: "Transaction Volume", amount: "1000" },
  { id: 5, title: "Block Times", amount: "9.00m" },
  { id: 6, title: "Network Hashrate", amount: "9.09b" },
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

/* -------------------------------------------------------------------------- */
/*                              TABLE COLUMNS                                 */
/* -------------------------------------------------------------------------- */

const TOP_HOLDER_COLUMNS = [
  { header: "S/N", accessor: (row) => row.id },
  { header: "Token Amount", accessor: (row) => row.amount },
  { header: "USD Value", accessor: (row) => row.usdValue },
  { header: "Wallet Address", accessor: (row) => row.address },
];

const NEW_WALLET_COLUMNS = [
  { header: "S/N", accessor: (row) => row.id },
  { header: "Address", accessor: (row) => row.address },
  { header: "Tx Count", accessor: (row) => row.transactionCount },
  { header: "Balance", accessor: (row) => row.balance },
  { header: "Protocol", accessor: (row) => row.protocol },
  { header: "Status", accessor: (row) => row.status },
  { header: "First Tx. Time", accessor: (row) => row.lastActive },
];

const ACTIVE_WALLET_COLUMNS = [
  { header: "S/N", accessor: (row) => row.id },
  { header: "Address", accessor: (row) => row.address },
  { header: "Tx Count", accessor: (row) => row.transactionCount },
  { header: "Avg. Tx Value", accessor: (row) => row.transactionValue },
  { header: "Protocol", accessor: (row) => row.protocol },
  { header: "Category", accessor: (row) => row.category },
  { header: "Last Active", accessor: (row) => row.lastActive },
];

/* -------------------------------------------------------------------------- */
/*                                 COMPONENT                                  */
/* -------------------------------------------------------------------------- */

const Dashboard = () => {
  /* ---------------------------------- STATE --------------------------------- */

  const [currentPage, setCurrentPage] = useState(0);
  const [inputAddress, setInputAddress] = useState(DEFAULT_CONTRACT);
  const [contractAddress, setContractAddress] = useState(DEFAULT_CONTRACT);
  const [activeTab, setActiveTab] = useState("new wallet");

  /* ---------------------------------- QUERIES -------------------------------- */

  const { data: ohlcData } = useGetTokenOHLCVHistoryQuery({
    address: DEFAULT_CONTRACT,
    chainId: "arbitrum",
    period: "30m",
  });

  const {
    data: holdersData,
    isLoading,
    error,
  } = useGetTopTokenHolderQuery(
    {
      address: contractAddress,
      page: currentPage + 1,
      limit: PAGE_SIZE,
    },
    { skip: !contractAddress }
  );

  useGetBlockchainMetricsQuery();

  /* ------------------------------ MEMOIZED DATA ------------------------------ */

  const topHoldersTableData = useMemo(() => {
    if (!holdersData?.data) return [];

    return holdersData.data.map((item, index) => ({
      id: currentPage * PAGE_SIZE + index + 1,
      amount: Number(item.amount).toLocaleString(),
      usdValue: `$${Number(item.usd_value).toLocaleString()}`,
      address: item.wallet_address,
    }));
  }, [holdersData, currentPage]);

  const totalPages = useMemo(() => {
    if (!holdersData?.count) return 0;
    return Math.ceil(holdersData.count / PAGE_SIZE);
  }, [holdersData]);

  /* ----------------------------------- JSX ----------------------------------- */

  return (
    <div className="w-full py-2">
      {/* ============================== METRICS ============================== */}
      <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
        Blockchain Metrics
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
        {METRICS_DATA.map(({ id, title, amount }) => (
          <div key={id} className="rounded-xl shadow bg-white text-black py-3">
            <div className="w-[85%] mx-auto">
              <h2 className="font-bold">{title}</h2>
              <p className="text-xl font-bold my-2">${amount}</p>
              <div className="flex items-center gap-2 text-green-700">
                <FaArrowTrendUp />
                <span className="font-semibold">+2.04%</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ============================ TOP HOLDERS ============================ */}
      <section className="my-10">
        <h2 className="text-2xl font-semibold capitalize">Token Top Holder</h2>

        <div className="border rounded-lg py-4 mt-6">
          <div className="w-[95%] mx-auto flex gap-4">
            <input
              type="search"
              value={inputAddress}
              onChange={(e) => setInputAddress(e.target.value)}
              placeholder="Paste contract address..."
              className="flex-1 border px-4 py-2 rounded-xl"
            />
            <button
              onClick={() => setContractAddress(inputAddress)}
              className="px-4 py-2 bg-[#ed4d06] text-white rounded-xl font-semibold"
            >
              Get Result
            </button>
          </div>

          <div className="mt-6">
            {isLoading ? (
              <SkeletonTable rows={8} columns={4} />
            ) : (
              <Table columns={TOP_HOLDER_COLUMNS} data={topHoldersTableData} />
            )}
          </div>

          {!isLoading && !error && totalPages > 1 && (
            <div className="mt-6 flex justify-end w-[95%] mx-auto">
              <Pagination
                total={totalPages}
                onChange={({ selected }) => setCurrentPage(selected)}
              />
            </div>
          )}
        </div>
      </section>

      {/* =========================== WALLET INSIGHT =========================== */}
      <section>
        <h2 className="text-2xl font-semibold capitalize">
          User & Wallet Insight
        </h2>

        <div className="border rounded-lg py-4 mt-6">
          <div className="w-[95%] mx-auto">
            <div className="flex gap-4">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1 rounded-full font-semibold capitalize ${
                    activeTab === tab
                      ? "bg-[#ed4d06] text-white"
                      : "bg-transparent"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="mt-6">
              {activeTab === "new wallet" && (
                <Table columns={NEW_WALLET_COLUMNS} data={newWalletData} />
              )}
              {activeTab !== "new wallet" && (
                <Table columns={ACTIVE_WALLET_COLUMNS} data={[]} />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ============================= MARKET DATA ============================ */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold capitalize">
          Token & Market Data
        </h2>

        <div className="mt-6">
          <CandlestickBrushChart data={ohlcData} />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
