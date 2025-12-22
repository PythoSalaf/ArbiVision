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
        top: 0,
        left: "right",
        itemWidth: 20,
        itemHeight: 16,
      },
      series: [
        {
          name: title || "Distribution",
          type: "pie",
          center: ["50%", "50%"],
          radius: ["40%", "60%"], // doughnut thickness
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
