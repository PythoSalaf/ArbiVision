import { Outlet } from "react-router";
import { Sidebar, Topbar } from "../components";

const DashboardLayout = () => {
  return (
    <div className="w-full bg-[#040705]">
      <div className="bg-[#040705] py-3 w-full fixed z-50">
        <Topbar />
      </div>
      <div className="w-full flex items-start pt-14">
        <div className="hidden md:block fixed md:w-[20%] lg:w-[15%] bg-[#1e1e1e]">
          <Sidebar />
        </div>
        <div className="ml-auto w-full md:w-[80%] lg:w-[85%] bg-transparent z-0">
          <div className="w-[96%] mx-auto py-1">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
