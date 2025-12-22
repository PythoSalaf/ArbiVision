import { useState } from "react";

const Fauset = () => {
  const [address] = useState("");
  return (
    <div className="w-full h-screen">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold capitalize">
        Get Arbitrium sepolia testnet tokens
      </h2>
      <div className="mt-16 w-full border py-8">
        <div className="w-[80%] mx-auto flex items-center justify-center flex-col">
          <input
            type="Enter Wallet address"
            className="border w-full py-2.5 outline-0 px-4 text-white"
            placeholder="Enter wallet address"
          />
          {!address ? (
            <button className="bg-white text-black px-6 cursor-pointer py-2.5 mt-6 font-semibold rounded-md">
              Connect wallet
            </button>
          ) : (
            <button className="bg-white text-black px-6 cursor-pointer py-2.5 mt-6 font-semibold rounded-md">
              Get Tokens
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Fauset;
