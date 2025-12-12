import { Navbar } from "../components";
import Home from "./Home";

const LandingLayout = () => {
  return (
    <div className="w-full bg-[#040705] h-screen">
      <Navbar />
      <Home />
    </div>
  );
};

export default LandingLayout;
