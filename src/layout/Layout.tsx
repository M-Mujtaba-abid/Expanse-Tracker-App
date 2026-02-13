import { useState } from "react";
import { Outlet } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import Sidebar from "./Sidebar";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="flex min-h-screen relative">

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white
        transform transition-transform duration-300 z-50
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
      >
        <Sidebar closeSidebar={closeSidebar} />
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 md:ml-64">
        {/* Mobile Topbar */}
        <div className="flex items-center justify-between p-4 bg-gray-100 shadow md:hidden">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-2xl">
            <HiMenu />
          </button>
          <h1 className="font-semibold">Expense Tracker</h1>
        </div>

        {/* Pages */}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
