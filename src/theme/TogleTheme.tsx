import  { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const ToggleTheme = () => {
  const [darkMode, setDarkMode] = useState<boolean>(
    () => localStorage.getItem("theme") === "dark"
    
  );

  // Update HTML class and localStorage on toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="flex items-center gap-2 px-3 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:opacity-90 transition"
    >
      {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ToggleTheme;
