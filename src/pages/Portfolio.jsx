import { DoughnutChart } from "../components";

const Portfolio = () => {
  const token = [
    {
      id: 1,
      coin: "USDC",
      amount: "$10",
    },
    {
      id: 2,
      coin: "USDT",
      amount: "$50",
    },
    {
      id: 3,
      coin: "Sol",
      amount: "$24",
    },
    {
      id: 4,
      coin: "ETH",
      amount: "$50",
    },
  ];
  const doudata = [
    { value: 40, name: "Uniswap" },
    { value: 25, name: "GMX" },
    { value: 20, name: "Aave" },
    { value: 15, name: "Others" },
  ];
  return (
    <div>
      <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold ">
        Portfolio
      </h1>
      <div className="mt-6 w-full flex items-start flex-col md:flex-row gap-6">
        <div className="w-full md:w-[70%] border border-[#dadada]">
          <div className="w-[95%] mx-auto  gap-5 flex flex-col md:flex-row items-start py-3">
            <div className="w-full">
              <h2 className="">Tokens</h2>
              <div className="mt-4">
                {token.map((item) => (
                  <div className="flex items-center gap-x-3" key={item.id}>
                    <h3 className="text-sm md:text-base font-semibold">
                      {item.amount}
                    </h3>
                    <h3 className="text-sm md:text-base font-semibold">
                      {item.coin}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full">
              <h2 className="">NFTs</h2>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[30%] ">
          <DoughnutChart title="Arbitrum TVL Distribution" data={doudata} />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
