import { useNavigate } from "react-router";
import { Hero } from "../assets";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <div className="w-[96%] mt-16 md:w-[94%] mx-auto flex items-start justify-between flex-col md:flex-row gap-7 md:gap-0 md:gap-x-9">
        <div className="w-full md:w-[50%] ">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold md:leading-12 lg:leading-14">
            Unlock Deep, Real‑Time Intelligence Across the Arbitrum Ecosystem
          </h2>
          <p className="my-11 text-base md:text-lg">
            ArbiVision lets you monitor real‑time transactions, track DeFi
            performance, analyze protocols, and visualize on‑chain activity all
            in one powerful dashboard built for developers, traders, and
            data‑driven builders.
          </p>
          <button
            className="bg-[#011d3d] px-6 py-1.5 rounded-3xl text-lg cursor-pointer"
            onClick={() => navigate("/dashboard")}
          >
            Start Analyzing
          </button>
        </div>
        <div className="w-full md:w-[50%] h-full pb-1 md:pb-0">
          <img src={Hero} alt="hero-image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
