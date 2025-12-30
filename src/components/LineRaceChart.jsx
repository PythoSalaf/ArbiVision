// components/LineRaceChart.jsx
import React from "react";
import ReactECharts from "echarts-for-react";

const LineRaceChart = ({
  title = "Line Race Chart",
  categories = [],
  series = [],
  height = 350,
  animationDuration = 5000,
}) => {
  const options = {
    title: {
      text: title,
      left: "center",
      textStyle: { fontSize: 14 },
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      top: 30,
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: categories,
    },
    yAxis: {
      type: "value",
    },
    animationDuration,
    animationEasing: "linear",
    series,
  };

  return (
    <ReactECharts
      option={options}
      style={{ height, width: "100%" }}
      notMerge
      lazyUpdate
    />
  );
};

export default LineRaceChart;
