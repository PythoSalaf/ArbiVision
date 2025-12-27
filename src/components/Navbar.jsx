import { useState } from "react";
import { IoMenuOutline, IoClose } from "react-icons/io5";
import { PiBandaidsLight } from "react-icons/pi";
import { Link, useNavigate } from "react-router";

const Navbar = () => {

  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  return (
    <div className="relative w-full">
      <div className="w-[96%] md:w-[94%] mx-auto flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-x-1">
          <PiBandaidsLight
            size={30}
            className="inline-block text-[#ed4d06] font-bold"
          />
          <h2 className="text-xl md:text-2xl font-bold">ArbiVision</h2>
        </Link>
        <div className="hidden md:flex items-center gap-x-8 text-lg">
          <Link>Home</Link>
          <Link>Swap</Link>
          <Link>Portfolio</Link>
          <Link>Dashboard</Link>
          <Link>Faucet</Link>
        </div>
        <div className="hidden md:block">
          <button className="bg-[#0a2749] text-white py-1.5 px-4 rounded-3xl cursor-pointer hover:bg-[#011d3d] transition-all ease-in-out duration-300 transform-3d text-lg "
          onClick={()=>{navigate("/dashboard")}}
          >
            Get Started
          </button>
        </div>
        <div
          className="block md:hidden cursor-pointer text-white"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? (
            <IoClose className="w-7 h-7" />
          ) : (
            <IoMenuOutline className="w-7 h-7" />
          )}
        </div>
      </div>
      {toggle && <div className="absolute w-full bg-amber-50 h-screen"></div>}
    </div>
  );
};

export default Navbar;
