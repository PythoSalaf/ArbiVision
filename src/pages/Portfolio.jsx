import { useEffect, useMemo, useState } from "react";
import { usePrivy } from "@privy-io/react-auth";
import {
  InlineLoader,
  SkeletonCard,
  SkeletonTable,
  SkeletonTokenCard,
  TransactionHistoryChart,
} from "../components";
/* ===================== COMPONENTS & ASSETS ===================== */
import { DoughnutChart, LineRaceChart, Pagination, Table } from "../components";

/* ===================== API HOOKS ===================== */
import {
  useGetDefiPositionQuery,
  useGetNFTsQuery,
  useLazyGetNFTsQuery,
} from "../feature/DuneSlice";

import {
  useGetBalancesQuery,
  useGetTransactionHistoryQuery,
  useLazyGetBalancesQuery,
  useLazyGetTransactionHistoryQuery,
} from "../feature/CovalentSlice";

/* =============================================================== */

const ITEMS_PER_PAGE = 10;

const Portfolio = () => {
  /* ===================== STATE ===================== */
  const [activeTabs, setActiveTabs] = useState("token");

  const [currentPage, setCurrentPage] = useState(0);
  const [singleCurrentPage, setSingleCurrentPage] = useState(0);

  const [walletInput, setWalletInput] = useState("");
  const [searchedWallet, setSearchedWallet] = useState(null);
  const [mappedNfts, setMappedNfts] = useState([]);
  const [singleMappedNfts, setSingleMappedNfts] = useState([]);
  const { user, authenticated } = usePrivy();
  const walletAddress = user?.wallet?.address || null;

  const ipfsToHttp = (uri) => {
    if (!uri) return null;
    return uri.startsWith("ipfs://")
      ? uri.replace("ipfs://", "https://ipfs.io/ipfs/")
      : uri;
  };

  const fetchNftImage = async (metadataUri) => {
    try {
      const res = await fetch(ipfsToHttp(metadataUri));
      const metadata = await res.json();
      return ipfsToHttp(metadata.image);
    } catch (err) {
      console.error("Metadata fetch failed:", err);
      return null;
    }
  };

  const generateLineRaceData = ({
    lines = 5,
    points = 20,
    startValue = 100,
  }) => {
    const categories = Array.from({ length: points }, (_, i) => `T${i + 1}`);

    const series = Array.from({ length: lines }, (_, i) => {
      let value = startValue + Math.random() * 50;

      return {
        name: `Line ${i + 1}`,
        type: "line",
        smooth: true,
        showSymbol: false,
        data: categories.map(() => {
          value += Math.random() * 20 - 10;
          return Math.max(0, value.toFixed(2));
        }),
      };
    });

    return { categories, series };
  };

  /* ===================== DEFAULT WALLET QUERIES ===================== */

  const { data: covalentData, isLoading } = useGetBalancesQuery({
    address: `${walletAddress}`,
  });

  const { data: transactionData, isLoading: transLoading } =
    useGetTransactionHistoryQuery({
      address: `${walletAddress}`,
    });

  const { data: defiData, isLoading: defiLoading } = useGetDefiPositionQuery({
    address: `${walletAddress}`,
  });

  const { data: nftDatas, isLoading: nftLoading } = useGetNFTsQuery({
    address: `${walletAddress}`,
  });

  console.log("NFT Data", nftDatas);

  /* ===================== LAZY QUERIES (SEARCHED WALLET) ===================== */
  const [
    triggerGetBalances,
    {
      data: singleCovalentData,
      isLoading: singleBalancesLoading,
      isFetching: singleBalancesFetching,
    },
  ] = useLazyGetBalancesQuery();

  const [
    triggerGetTransactionHistory,
    {
      data: singleTransactionData,
      isLoading: singleTxLoading,
      isFetching: singleTxFetching,
    },
  ] = useLazyGetTransactionHistoryQuery();

  const [
    triggerGetNFTsQuery,
    {
      data: singleNftData,
      isLoading: singleNftLoading,
      isFetching: singleNftFetching,
    },
  ] = useLazyGetNFTsQuery();

  const isSearchLoading =
    singleBalancesLoading ||
    singleBalancesFetching ||
    singleTxLoading ||
    singleTxFetching ||
    singleNftLoading ||
    singleNftFetching;

  /* ===================== HANDLERS ===================== */
  const handleGetInfo = () => {
    if (!walletInput) return;

    setSearchedWallet(walletInput);

    triggerGetBalances({
      chain: "arbitrum-mainnet",
      address: walletInput,
    });

    triggerGetTransactionHistory({
      chain: "arbitrum-mainnet",
      address: walletInput,
    });
    triggerGetNFTsQuery({
      address: walletInput,
    });
  };

  /* ===================== TOKEN DATA ===================== */
  const tokens = useMemo(() => covalentData?.data?.items ?? [], [covalentData]);

  const singleTokens = useMemo(
    () => singleCovalentData?.data?.items ?? [],
    [singleCovalentData]
  );

  /* ===================== CHART DATA ===================== */
  const doudata = useMemo(() => {
    return tokens
      .filter((item) => item.quote > 0)
      .map((item) => ({
        name: item.contract_ticker_symbol,
        value: Number(item.quote.toFixed(2)),
      }));
  }, [tokens]);

  const singleDoudata = useMemo(() => {
    return singleTokens
      .filter((item) => item.quote > 0)
      .map((item) => ({
        name: item.contract_ticker_symbol || "Unknown",
        value: Number(item.quote.toFixed(2)),
      }));
  }, [singleTokens]);

  /* ======================= NFTS DATAS ===================== */
  const nfts = useMemo(() => nftDatas?.entries ?? [], [nftDatas]);
  const singleNfts = useMemo(
    () => singleNftData?.entries ?? [],
    [singleNftData]
  );
  console.log("Nfts", singleNfts);

  useEffect(() => {
    if (!nfts.length) return;

    const loadNfts = async () => {
      const resolved = await Promise.all(
        nfts.slice(0, 20).map(async (nft) => {
          const image = await fetchNftImage(nft.metadata?.uri);

          return {
            id: `${nft.contract_address}-${nft.token_id}`,
            name: nft.name || "Unnamed NFT",
            image,
          };
        })
      );

      setMappedNfts(resolved);
    };

    loadNfts();
  }, [nfts]);

  useEffect(() => {
    if (!singleNfts.length) return;

    const loadNfts = async () => {
      const resolved = await Promise.all(
        singleNfts.slice(0, 20).map(async (nft) => {
          const image = await fetchNftImage(nft.metadata?.uri);

          return {
            id: `${nft.contract_address}-${nft.token_id}`,
            name: nft.name || "Unnamed NFT",
            image,
          };
        })
      );

      setSingleMappedNfts(resolved);
    };

    loadNfts();
  }, [singleNfts]);

  const nftDoughnutData = useMemo(() => {
    if (!nfts.length) return [];

    const grouped = nfts.reduce((acc, nft) => {
      const key = nft.token_standard || "Unknown";
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});

    return Object.entries(grouped).map(([name, value]) => ({
      name,
      value,
    }));
  }, [nfts]);

  const singleNftDoughnutData = useMemo(() => {
    if (!singleNfts.length) return [];

    const grouped = singleNfts.reduce((acc, nft) => {
      const key = nft.token_standard || "Unknown";
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});

    return Object.entries(grouped).map(([name, value]) => ({
      name,
      value,
    }));
  }, [singleNfts]);

  /* ===================== TRANSACTIONS ===================== */
  const transactions = useMemo(() => {
    const items = transactionData?.data?.items ?? [];

    return items.map((tx, index) => ({
      id: index + 1,
      address: `${tx.from_address.slice(0, 6)}...${tx.from_address.slice(-4)}`,
      balance: `$${tx.value ? (Number(tx.value) / 1e18).toFixed(4) : "0.00"}`,
      protocol: tx.successful ? "Successful" : "Failed",
      lastActive: new Date(tx.block_signed_at).toLocaleString(),
    }));
  }, [transactionData]);

  const singleTransactions = useMemo(() => {
    const items = singleTransactionData?.data?.items ?? [];

    return items.map((tx, index) => ({
      id: index + 1,
      address: `${tx.from_address.slice(0, 6)}...${tx.from_address.slice(-4)}`,
      balance: `$${tx.value ? (Number(tx.value) / 1e18).toFixed(4) : "0.00"}`,
      protocol: tx.successful ? "Successful" : "Failed",
      lastActive: new Date(tx.block_signed_at).toLocaleString(),
    }));
  }, [singleTransactionData]);

  const raceData = useMemo(
    () =>
      generateLineRaceData({
        lines: 4,
        points: 30,
        startValue: 120,
      }),
    []
  );

  /* ===================== PAGINATION ===================== */
  const paginatedTransactions = useMemo(() => {
    const start = currentPage * ITEMS_PER_PAGE;
    return transactions.slice(start, start + ITEMS_PER_PAGE);
  }, [transactions, currentPage]);

  const singlePaginatedTransactions = useMemo(() => {
    const start = singleCurrentPage * ITEMS_PER_PAGE;
    return singleTransactions.slice(start, start + ITEMS_PER_PAGE);
  }, [singleTransactions, singleCurrentPage]);

  const totalPages = Math.ceil(transactions.length / ITEMS_PER_PAGE);
  const singleTotalPages = Math.ceil(
    singleTransactions.length / ITEMS_PER_PAGE
  );

  /* ===================== DEFI TABLE ===================== */
  const defiTableData = useMemo(() => {
    return (defiData?.positions ?? []).map((pos, index) => ({
      id: index + 1,
      protocol: pos.protocol || pos.type || "Unknown",
      poolId: pos.pool
        ? `${pos.pool.slice(0, 6)}...${pos.pool.slice(-4)}`
        : "—",
      tokenPair:
        pos.token0_symbol && pos.token1_symbol
          ? `${pos.token0_symbol}/${pos.token1_symbol}`
          : pos.token_symbol || "—",
      positionAmount:
        typeof pos.calculated_balance === "number"
          ? pos.calculated_balance.toFixed(4)
          : "—",
      usdValue:
        typeof pos.usd_value === "number"
          ? `$${pos.usd_value.toFixed(2)}`
          : "$0.00",
    }));
  }, [defiData]);

  /* ===================== STATIC DATA ===================== */

  const walletColumns = [
    { header: "S/N", accessor: (row) => row.id },
    { header: "Address", accessor: (row) => row.address },
    { header: "Amount", accessor: (row) => row.balance },
    { header: "Tx. Status", accessor: (row) => row.protocol },
    { header: "Date/Time", accessor: (row) => row.lastActive },
  ];

  const positionColumns = [
    { header: "S/N", accessor: (row) => row.id },
    { header: "Protocol", accessor: (row) => row.protocol },
    { header: "Pool", accessor: (row) => row.poolId },
    { header: "Token Pair", accessor: (row) => row.tokenPair },
    { header: "Position Amount", accessor: (row) => row.positionAmount },
    { header: "USD Value", accessor: (row) => row.usdValue },
  ];

  const MetricsData = [
    { id: 1, title: "Wallet net worth", amount: "9.09b", liquidity: "2.04%" },
    {
      id: 2,
      title: "Total Defi Position",
      amount: "165.44m",
      liquidity: "35.04%",
    },
    { id: 3, title: "Active Protocol", amount: "9.00m", liquidity: "2.04%" },
    { id: 4, title: "Transaction Volume", amount: "1000", liquidity: "1.04%" },
    { id: 5, title: "Block Times", amount: "9.00m", liquidity: "2.04%" },
    { id: 6, title: "Network Hashrate", amount: "9.09b", liquidity: "2.04%" },
  ];

  return (
    <div className="w-full">
      {authenticated ? (
        <div className="">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold ">
            Portfolio
          </h1>
          <div className="mt-6 w-full flex items-start flex-col md:flex-row gap-6">
            <div className="w-full md:w-[55%] h-98 overflow-y-auto  border border-[#dadada]">
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
                    {isLoading
                      ? Array.from({ length: 4 }).map((_, index) => (
                          <SkeletonTokenCard key={index} />
                        ))
                      : tokens.map((item) => {
                          const balance =
                            Number(item.balance) /
                            Math.pow(10, item.contract_decimals);

                          return (
                            <div
                              key={item.contract_address}
                              className="w-[94%] mx-auto md:w-full rounded-xl shadow bg-white text-black py-2"
                            >
                              <div className="w-[85%] mx-auto">
                                <div className="flex items-center gap-x-3 text-sm md:text-base font-bold">
                                  <img
                                    src={item.logo_url}
                                    alt="logo"
                                    className="w-6 h-6 rounded-full"
                                  />
                                  <h2>{item.contract_ticker_symbol}</h2>
                                </div>

                                <h2 className="uppercase text-base md:text-lg lg:text-xl font-bold mt-2">
                                  {balance.toFixed(4)}{" "}
                                  {item.contract_ticker_symbol}
                                </h2>

                                <p className="text-sm text-gray-600 mt-1">
                                  ${item.quote?.toFixed(2) ?? "0.00"}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                  </div>
                </div>
              )}
              <div className="">
                {activeTabs === "nft" && (
                  <div className="w-[95%] mx-auto mt-6 pb-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                      {nftLoading
                        ? Array.from({ length: 8 }).map((_, index) => (
                            <SkeletonCard key={index} />
                          ))
                        : mappedNfts.slice(0, 30).map((item) => (
                            <div
                              className="flex flex-col items-center"
                              key={item.id}
                            >
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-24 h-24 object-cover rounded"
                              />
                              <p className="pt-2 text-center text-sm">
                                {item.name}
                              </p>
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
                  {nftDoughnutData.length > 0 ? (
                    <DoughnutChart
                      title="NFT Distribution by Standard"
                      data={nftDoughnutData}
                    />
                  ) : (
                    <p className="text-sm text-gray-500">
                      No NFT data available
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="w-full my-9">
            <h2 className="capitalize text-xl md:text-2xl lg:text-3xl font-semibold">
              Transaction history
            </h2>
            <div className="mt-5">
              {transLoading ? (
                <SkeletonTable rows={8} columns={5} />
              ) : (
                <div className="">
                  <Table columns={walletColumns} data={paginatedTransactions} />
                  <div className="flex items-center justify-end mt-4">
                    <Pagination
                      total={totalPages}
                      onChange={({ selected }) => setCurrentPage(selected)}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="w-full">
            <h2 className="capitalize text-xl md:text-2xl lg:text-3xl font-semibold">
              DeFi Position Details
            </h2>
            <div className="mt-5">
              {defiLoading ? (
                <SkeletonTable rows={8} columns={6} />
              ) : (
                <div className="">
                  <Table columns={positionColumns} data={defiTableData} />
                  <div className="flex items-center justify-end mt-4">
                    <Pagination
                      total={totalPages}
                      onChange={({ selected }) => setCurrentPage(selected)}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="w-full mt-5">
            <h2 className="capitalize text-xl md:text-2xl lg:text-3xl font-semibold">
              Wallet Retention Score
            </h2>
            <div className="w-full">
              {/* <LineRaceChart
                title="Market Performance Race"
                categories={raceData.categories}
                series={raceData.series}
                height={400}
              /> */}
              {/* <TransactionHistoryChart address={walletAddress} /> */}
              <TransactionHistoryChart
                address={"0x3ddfa8ec3052539b6c9549f12cea2c295cff5296"}
              />
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
                value={walletInput}
                onChange={(e) => setWalletInput(e.target.value)}
              />
              <button
                className="border w-[20%] py-2 cursor-pointer"
                onClick={handleGetInfo}
              >
                {isSearchLoading ? <InlineLoader /> : "Get Info"}
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 w-full ">
          <h2 className="capitalize text-xl md:text-2xl lg:text-3xl font-semibold">
            Wallet Insight
          </h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 my-8">
            {MetricsData.map((item) => (
              <div
                className="w-[94%] mx-auto md:w-full rounded-xl shadow bg-white text-black py-2"
                key={item.id}
              >
                <div className="w-[85%] mx-auto">
                  <div className="flex items-center gap-x-3 text-sm md:text-base font-bold">
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
        <div className="mt-10 w-full flex items-start flex-col md:flex-row gap-6">
          <div className="w-full md:w-[55%] h-98 overflow-x-hidden overflow-y-auto border border-[#dadada]">
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
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                  {singleTokens.map((item) => {
                    const balance =
                      Number(item.balance) /
                      Math.pow(10, item.contract_decimals);

                    return (
                      <div
                        key={item.contract_address}
                        className="w-[94%] mx-auto md:w-full rounded-xl shadow bg-white text-black py-2"
                      >
                        <div className="w-[85%] mx-auto">
                          <div className="flex items-center gap-x-3 text-sm md:text-base font-bold">
                            <img
                              src={item.logo_url ?? "logo"}
                              // alt={item.contract_name}
                              alt="logo"
                              className="w-6 h-6 rounded-full"
                            />
                            <h2>{item.contract_ticker_symbol}</h2>
                          </div>

                          <h2 className="uppercase text-base md:text-lg lg:text-xl font-bold mt-2">
                            {balance.toFixed(4)} {item.contract_ticker_symbol}
                          </h2>

                          <p className="text-sm text-gray-600 mt-1">
                            ${item.quote?.toFixed(2) ?? "0.00"}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            <div className="">
              {activeTabs === "nft" && (
                <div className="w-[95%] mx-auto mt-6 pb-6">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {singleMappedNfts.slice(0, 30).map((item) => (
                      <div className="flex flex-col items-center" key={item.id}>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-24 object-cover rounded"
                        />
                        <p className="pt-2 text-center text-sm">{item.name}</p>
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
                  data={singleDoudata}
                />
              </div>
            )}
            {activeTabs === "nft" && (
              <div className="w-[90%] mx-auto pt-2">
                <h2 className="text-base md:text-lg font-semibold">
                  NFT Chart
                </h2>
                {singleNftDoughnutData.length > 0 ? (
                  <DoughnutChart
                    title="NFT Distribution by Standard"
                    data={singleNftDoughnutData}
                  />
                ) : (
                  <p className="text-sm text-gray-500">No NFT data available</p>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="w-full mt-9">
          <h2 className="capitalize text-xl md:text-2xl lg:text-3xl font-semibold">
            Transaction history
          </h2>
          <div className="mt-5 pb-4">
            <Table columns={walletColumns} data={singlePaginatedTransactions} />
            <div className="flex items-center justify-end mt-4">
              <Pagination
                total={singleTotalPages}
                onChange={({ selected }) => setSingleCurrentPage(selected)}
              />
            </div>
          </div>
        </div>
        <div className="mt-9 pb-4">
          <h2 className="capitalize text-xl md:text-2xl lg:text-3xl font-semibold">
            Time based wallet activity
          </h2>
          <div className="w-full mt-3">
            <LineRaceChart
              title="Market Performance Race"
              categories={raceData.categories}
              series={raceData.series}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
