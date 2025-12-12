import { NavLink } from "react-router";
import { MdDashboard } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { PiBandaidsLight } from "react-icons/pi";
import { IoMdSwap } from "react-icons/io";
import { TbLogout } from "react-icons/tb";
const Sidebar = () => {
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
            to="/dashboard/swap"
            className={({ isActive }) => `${isActive ? active : inactive}`}
          >
            <IoMdSwap size={24} className="inline-block " />
            Swap
          </NavLink>
          <NavLink
            to="/dashboard/fauset"
            className={({ isActive }) => `${isActive ? active : inactive}`}
          >
            <PiBandaidsLight size={24} className="inline-block " />
            Fauset
          </NavLink>
        </div>
        <div className="w-full mt-36">
          <div className="w-full rounded-md bg-white flex items-center gap-x-3"></div>
          <div className="bg-white text-black rounded-md cursor-pointer md:text-sm lg:text-base py-1 px-4 font-semibold flex items-center gap-x-4 ">
            <TbLogout size={24} className="inline-block " />
            <button className="cursor-pointer">Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
