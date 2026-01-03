import { useState, useMemo } from "react";
import { useGetTransactionHistoryQuery } from "../feature/CovalentSlice";
import LineRaceChart from "./LineRaceChart";
import { filterTransactionsByTime } from "../utils/filterTransactionsByTime";
import { transformTxToLineRace } from "../utils/transformTxToLineRace";

const TransactionHistoryChart = ({ address }) => {
  const [range, setRange] = useState("all");

  const { data, isLoading } = useGetTransactionHistoryQuery({
    chain: "arbitrum-mainnet",
    address,
  });

  const chartData = useMemo(() => {
    const items = data?.data?.items;
    if (!items || items.length === 0) return null;

    const filtered = filterTransactionsByTime(items, range);
    if (!filtered || filtered.length === 0) return null;

    const transformed = transformTxToLineRace(filtered);
    if (!transformed?.series?.length) return null;

    // 🔴 CRITICAL FIXES START HERE
    const rawData = [...transformed.series[0].data];

    // 1. Sort by timestamp ASC
    rawData.sort((a, b) => a[0] - b[0]);

    // 2. Convert to cumulative volume
    let cumulative = 0;
    const cumulativeData = rawData.map(([time, value]) => {
      cumulative += value;
      return [time, cumulative];
    });

    return {
      series: [
        {
          ...transformed.series[0],
          data: cumulativeData,
        },
      ],
    };
  }, [data, range]);

  if (isLoading) {
    return (
      <div className="h-[400px] flex items-center justify-center">
        Loading chart…
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Filter Buttons */}
      <div className="flex gap-2 mb-4">
        {["day", "week", "month", "all"].map((t) => (
          <button
            key={t}
            onClick={() => setRange(t)}
            className={`px-4 py-1 rounded-md text-sm ${
              range === t ? "bg-black text-white" : "bg-gray-200"
            }`}
          >
            {t.toUpperCase()}
          </button>
        ))}
      </div>

      {!chartData ? (
        <div className="h-[400px] flex items-center justify-center text-gray-500">
          No data for selected range
        </div>
      ) : (
        <LineRaceChart
          title="Cumulative Transaction Volume"
          series={chartData.series}
          height={400}
        />
      )}
    </div>
  );
};

export default TransactionHistoryChart;
