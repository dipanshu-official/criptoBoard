import React from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import { useTheme } from "./context/ThemeContext";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={`flex flex-col sm:flex-row min-h-screen ${theme === "dark" ? "dark-bg" : "bg-white"}`}>
      
      {/* Sidebar (Navbar) */}
      <div className="w-full sm:w-1/5  min-h-screen">
        <Navbar />
      </div>

      {/* Main Dashboard Section */}
      <div className="w-full sm:w-3/5 p-4">
        <Dashboard />
      </div>

      {/* Profile Section */}
      <div className="w-full sm:w-1/5  min-h-screen">
        <Profile />
      </div>

    </div>
  );
};

export default App;
