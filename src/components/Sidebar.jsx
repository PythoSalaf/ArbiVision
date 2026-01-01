import { NavLink } from "react-router";
import { MdDashboard } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { PiBandaidsLight } from "react-icons/pi";
import { IoMdSwap } from "react-icons/io";
import { TbLogout } from "react-icons/tb";
import { usePrivy } from "@privy-io/react-auth";
const Sidebar = () => {
  const { logout, user } = usePrivy();
  const address = user?.wallet?.address;
  const displayAddress = address
    ? `${address.slice(0, 4)}......${address.slice(-4)}`
    : "Notconnected";
  const handleLogout = () => {
    logout();
  };
  const active =
    "bg-white text-black py-1 px-4 md:text-base rounded-md lg:text-lg font-semibold flex items-center gap-x-3";
  const inactive =
    "md:text-sm lg:text-base py-1 px-4 rounded-md font-semibold flex items-center gap-x-4 hover:bg-white hover:text-black md:text-base lg:text-lg font-semibold";

  return (
    <div className="h-screen w-full">
      <div className="w-[80%] mx-auto mt-12">
        <div className="w-full flex flex-col gap-y-6">
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) => `${isActive ? active : inactive}`}
          >
            <MdDashboard size={24} className="inline-block" />
            Dashboard
          </NavLink>
          <NavLink
            to="/dashboard/portfolio"
            className={({ isActive }) => `${isActive ? active : inactive}`}
          >
            <FaWallet size={24} className="inline-block " />
            Portfolio
          </NavLink>
          <NavLink
            to="/dashboard/fauset"
            className={({ isActive }) => `${isActive ? active : inactive}`}
          >
            <PiBandaidsLight size={24} className="inline-block " />
            Faucet
          </NavLink>
          <NavLink
            to="/dashboard/swap"
            className={({ isActive }) => `${isActive ? active : inactive}`}
          >
            <IoMdSwap size={24} className="inline-block " />
            Swap
          </NavLink>
        </div>
        <div className="w-full mt-40">
          <div className="w-full rounded-md bg-white  text-black">
            <div className="w-[90%] mx-auto flex items-center py-3 gap-x-3 px-1.5">
              <FaWallet size={24} className="inline-block " />
              <h4 className="font-semibold md:text-sm lg:text-base">
                {displayAddress}
              </h4>
            </div>
          </div>
          <div className="bg-white text-black rounded-md mt-4 cursor-pointer md:text-sm lg:text-base py-1 px-4 font-semibold flex items-center gap-x-4 ">
            <TbLogout size={24} className="inline-block " />
            <button className="cursor-pointer" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
