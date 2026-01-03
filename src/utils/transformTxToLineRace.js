// utils/transformTxToLineRace.js
export const transformTxToLineRace = (transactions) => {
  const data = transactions.map((tx) => [
    new Date(tx.block_signed_at).getTime(),
    Number(tx.value || 0) / 1e18, // ETH
  ]);

  return {
    series: [
      {
        name: "Transaction Volume",
        type: "line",
        smooth: true,
        showSymbol: false,
        areaStyle: { opacity: 0.1 },
        data,
      },
    ],
  };
};
