import React, { useMemo } from "react";
import ReactECharts from "echarts-for-react";

/**
 * Candlestick Chart with Brush (Apache ECharts)
 * Use cases: price analysis, range selection, zoom & highlight
 * Suitable for Web3 / DeFi / Arbitrum ecosystem analytics
 */

const CandlestickBrushChart = ({ data }) => {
  const option = useMemo(() => ({
    animation: false,
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
    },
    toolbox: {
      feature: {
        brush: {
          type: ["lineX", "clear"],
        },
        dataZoom: {},
        restore: {},
      },
    },
    brush: {
      xAxisIndex: 0,
      brushLink: "all",
      outOfBrush: {
        colorAlpha: 0.1,
      },
    },
    grid: {
      left: "5%",
      right: "5%",
      bottom: "15%",
    },
    xAxis: {
      type: "category",
      data: data.map((d) => d.time),
      scale: true,
      boundaryGap: false,
      axisLine: { onZero: false },
      splitLine: { show: false },
      min: "dataMin",
      max: "dataMax",
    },
    yAxis: {
      scale: true,
      splitArea: { show: true },
    },
    dataZoom: [
      {
        type: "inside",
        start: 60,
        end: 100,
      },
      {
        show: true,
        type: "slider",
        bottom: 0,
        start: 60,
        end: 100,
      },
    ],
    series: [
      {
        name: "Price",
        type: "candlestick",
        data: data.map((d) => [d.open, d.close, d.low, d.high]),
        itemStyle: {
          color: "#22c55e",      // bullish
          color0: "#ef4444",     // bearish
          borderColor: "#22c55e",
          borderColor0: "#ef4444",
        },
      },
    ],
  }), [data]);

  return (
    <ReactECharts
      option={option}
      style={{ height: "500px", width: "100%" }}
      notMerge={true}
      lazyUpdate={true}
    />
  );
};

export default CandlestickBrushChart;

/*
EXPECTED DATA SHAPE:
[
  {
    time: "2024-01-01",
    open: 120,
    close: 125,
    low: 118,
    high: 130,
  },
]

USAGE:
<CandlestickBrushChart data={candlestickData} />
*/
