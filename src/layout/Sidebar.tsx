import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import ToggleTheme from "../theme/TogleTheme";

interface SidebarProps {
  closeSidebar?: () => void;
}

const Sidebar = ({ closeSidebar }: SidebarProps) => {
  const [settingsOpen, setSettingsOpen] = useState(false);

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
      ${isActive ? "bg-gray-300 dark:bg-gray-700" : "hover:bg-gray-200 dark:hover:bg-gray-700"}`;

  // Mobile link click handler
  const handleClick = () => {
    if (closeSidebar) closeSidebar();
  };

  return (
   <div className="flex flex-col justify-between h-full p-5 bg-linear-to-b from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-950 text-gray-700 dark:text-gray-200 border-r border-slate-200 dark:border-gray-800 shadow-lg">

  {/* Top Links */}
  <div className="space-y-1">
    <NavLink to="/dashboard" className={linkClasses} onClick={handleClick}>
      <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
        <MdDashboard size={18} />
      </span>
      <span className="font-medium">Dashboard</span>
    </NavLink>

    <NavLink to="/transactions/credit" className={linkClasses} onClick={handleClick}>
      <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
        <GiMoneyStack size={18} />
      </span>
      <span className="font-medium">Credit</span>
    </NavLink>

    <NavLink to="/transactions/debit" className={linkClasses} onClick={handleClick}>
      <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400">
        <RiMoneyDollarCircleLine size={18} />
      </span>
      <span className="font-medium">Debit</span>
    </NavLink>
  </div>

  {/* Divider */}
  <div className="flex-1" />

  {/* Bottom Settings */}
  <div className="border-t border-slate-200 dark:border-gray-800 pt-4">
    <button
      onClick={() => setSettingsOpen(!settingsOpen)}
      className="flex items-center gap-3 px-4 py-3 w-full rounded-xl hover:bg-slate-200/70 dark:hover:bg-gray-800 transition-all duration-200 group"
    >
      <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-400 group-hover:rotate-90 transition-transform duration-300">
        <FiSettings size={18} />
      </span>
      <span className="font-medium">Settings</span>
      <span className={`ml-auto text-xs transition-transform duration-200 ${settingsOpen ? 'rotate-180' : ''}`}>▾</span>
    </button>

    {settingsOpen && (
      <div className="flex flex-col mt-2 ml-3 pl-4 border-l-2 border-slate-200 dark:border-gray-700 space-y-1 animate-in slide-in-from-top-2 duration-200">
        <button
          onClick={() => alert("Logging out...")}
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 transition-colors"
        >
          <FiLogOut size={16} /> 
          <span className="text-sm">Logout</span>
        </button>

        <ToggleTheme />
      </div>
    )}
  </div>
</div>

  );
};

export default Sidebar;
