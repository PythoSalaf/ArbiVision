// components/LineRaceChart.jsx
import React from "react";
import ReactECharts from "echarts-for-react";

const LineRaceChart = ({ series, height = 400 }) => {
  const option = {
    tooltip: { trigger: "axis" },
    xAxis: {
      type: "time",
      boundaryGap: false,
    },
    yAxis: {
      type: "value",
      scale: true,
    },
    series,
  };

  return (
    <ReactECharts option={option} style={{ height, width: "100%" }} notMerge />
  );
};

export default LineRaceChart;
