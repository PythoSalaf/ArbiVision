import { useMemo } from "react";
import ReactECharts from "echarts-for-react";

/**
 * Rounded Doughnut Chart (Apache ECharts)
 * Use cases: ecosystem distribution, protocol dominance, TVL share
 * Fully responsive & reusable
 */

const DoughnutChart = ({ data, title }) => {
  const option = useMemo(
    () => ({
      tooltip: {
        trigger: "item",
        formatter: "{b}: {c} ({d}%)",
      },
      legend: {
        bottom: 0,
        left: "center",
        itemWidth: 12,
        itemHeight: 12,
      },
      series: [
        {
          name: title || "Distribution",
          type: "pie",
          radius: ["55%", "75%"], // doughnut thickness
          avoidLabelOverlap: false,
          padAngle: 3, // spacing between slices
          itemStyle: {
            borderRadius: 10, // rounded edges
            borderColor: "#fff",
            borderWidth: 2,
          },
          label: {
            show: false,
          },
          emphasis: {
            scale: true,
            scaleSize: 8,
            label: {
              show: true,
              fontSize: 14,
              fontWeight: "bold",
            },
          },
          data,
        },
      ],
    }),
    [data, title]
  );

  return (
    <ReactECharts
      option={option}
      style={{ height: "360px", width: "100%" }}
      notMerge={true}
      lazyUpdate={true}
    />
  );
};

export default DoughnutChart;
