import React from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import { useTheme } from "./context/ThemeContext";
import axios from "axios";

const App = () => {
  const { theme } = useTheme();
const testfn = async() => {
  const data = await axios.get("https://api.coinlayer.com/live?access_key=e1b942047ed9cdf56e7c7ee5ad3e1b07")
  console.log("api data =>", data)
}
  return (
    <div className={`flex flex-col sm:flex-row min-h-screen ${theme === "dark" ? "dark-bg" : "bg-white"}`}>
    
      {/* Sidebar (Navbar) */}
      <div className="  hidden  md:block  w-full sm:w-1/5  min-h-screen">
        <Navbar />
      </div>
<div className="max-h-[100vh] w-full justify-between items-center flex-col md:flex-row  flex ">
      {/* Main Dashboard Section */}
      <div className="w-full p-4">
        <Dashboard />
      </div>

      {/* Profile Section */}
      <div className="md:w-2/5 w-full bg min-h-screen">
        <Profile />
      </div>
      </div>
    </div>
  );
};

export default App;
