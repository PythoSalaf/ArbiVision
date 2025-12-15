import React, { useMemo } from "react";
import ReactECharts from "echarts-for-react";

const Chart = ({ data }) => {
  const option = useMemo(
    () => ({
      animation: false, // critical for large datasets
      grid: {
        left: "3%",
        right: "4%",
        bottom: "8%",
        containLabel: true,
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
        },
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: data.map((d) => d.time),
        axisLabel: {
          hideOverlap: true,
        },
      },
      yAxis: {
        type: "value",
        scale: true,
        axisLabel: {
          formatter: (val) => `${val.toLocaleString()}`,
        },
      },
      dataZoom: [
        {
          type: "inside",
          throttle: 50,
        },
        {
          type: "slider",
          bottom: 0,
        },
      ],
      series: [
        {
          name: "TVL",
          type: "line",
          smooth: true,
          symbol: "none", // important for performance
          sampling: "lttb", // Large data optimization
          lineStyle: {
            width: 2,
          },
          areaStyle: {
            opacity: 0.3,
          },
          data: data.map((d) => d.value),
        },
      ],
    }),
    [data]
  );

  return (
    <ReactECharts
      option={option}
      style={{ height: "400px", width: "100%" }}
      notMerge={true}
      lazyUpdate={true}
    />
  );
};

export default Chart;
