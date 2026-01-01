import { useState } from "react";
import { IoClose, IoMenuOutline } from "react-icons/io5";
import { PiBandaidsLight } from "react-icons/pi";
import { usePrivy } from "@privy-io/react-auth";
import { Link } from "react-router";

const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { login, logout, authenticated } = usePrivy();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="w-full relative bg-[#040705] z-50">
      <div className="w-[96%]  mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-x-1">
          <PiBandaidsLight
            size={30}
            className="inline-block text-[#ed4d06] font-bold"
          />
          <h2 className="text-xl md:text-2xl font-bold">ArbiVision</h2>
        </Link>
        <div className="hidden md:block w-[50%] mx-auto">
          <input
            type="search"
            className="border border-[#dadada] w-full rounded-3xl py-1 outline-0 px-5"
            placeholder="Search ........................"
            required
          />
        </div>

        <div className="hidden md:block ">
          {authenticated ? (
            <button
              onClick={handleLogout}
              className="text-white py-1.5 px-4 rounded-3xl cursor-pointer bg-[#011d3d] transition-all ease-in-out duration-300 transform-3d text-base"
            >
              Disconnect Wallet
            </button>
          ) : (
            <button
              onClick={login}
              className="text-white py-1.5 px-4 rounded-3xl cursor-pointer bg-[#011d3d] transition-all ease-in-out duration-300 transform-3d text-base"
            >
              Connect Wallet
            </button>
          )}
        </div>
        <div
          className="block md:hidden cursor-pointer text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <IoClose className="w-7 h-7" />
          ) : (
            <IoMenuOutline className="w-7 h-7" />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="absolute w-full bg-amber-50 top-10 h-screen flex flex-col items-center gap-y-4 text-black justify-start pt-12">
          <Link to="/dashboard" className="text-lg font-semibold">
            Dashboard
          </Link>
          <Link to="/dashboard/portfolio" className="text-lg font-semibold">
            Portfolio
          </Link>
          <Link to="/dashboard/fauset" className="text-lg font-semibold">
            Faucet
          </Link>
          <Link to="/dashboard/swap" className="text-lg font-semibold">
            Swap
          </Link>
        </div>
      )}
    </div>
  );
};

export default Topbar;
