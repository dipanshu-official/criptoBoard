import React, { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon, Menu, X } from "lucide-react"; // Added Menu & X icons
import Data from "./Data";
import Chart from "./Chart";
import Navbar from "./Navbar";
import axios from "axios";

const Dashboard = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [Btcprice, setBtcprice] = useState(98000)
  const [eth, setEth] = useState(40.2)

  useEffect(() => {
    const testfn = async () => {
      const apiData = await axios.get("https://api.coinlayer.com/live?access_key=e1b942047ed9cdf56e7c7ee5ad3e1b07")
      setBtcprice(apiData?.data.rates?.BTC)
      console.log("eth price =>", apiData?.data?.rates?.ETH)
      setEth(apiData?.data?.rates?.ETH)
    }
    testfn()

  }, [])



  return (
    <div className={` md:mt-18 mt-0 relative p-6 min-h-screen ${theme === "dark" ? "dark-bg " : "bg-white"}`}>

      {/* Hamburger Button for Mobile */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden absolute top-4 left-4 p-2 rounded-full bg-[#9381FF] dark:bg-[#9381FF] transition"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 p-2 rounded-full bg-[#9381FF] dark:bg-[#9381FF]  transition"
      >
        {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
      </button>

      {/* Mobile Sidebar (Opens with Hamburger) */}
      {menuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-3/4 h-full bg shadow-lg z-50 ">

          {/* Close Button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4  rounded-full bg-[#9381FF] text-white"
          >
            <X size={24} />
          </button>

          <Navbar />
        </div>
      )}

      {/* Dashboard Content */}
      <div className="flex items-center justify-between mt-12">
        <h1 className={`font-bold text-[28px] ${theme === "dark" ? "dark-text" : "pro-color"}`}>Assets</h1>
        <p className="b-color font-medium text-sm">More Assets</p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-6 mt-9">
        {/* Bitcoin Card */}
        <div>
          <h1 className="b-color font-bold text-[18px]">Bitcoin</h1>
          <div className="mt-4 bg-[#9381FF] rounded-xl">
            <div className="flex items-center">
              <div className="p-3">
                <h2 className="font-medium text-[20px] text-white">$</h2>
                <h1 className="font-medium text-[24px] text-white">{Btcprice?.toFixed(2)}</h1>
              </div>
              <div className=" flex-1"></div>
              <Chart strokeColor="#FFFFFF" />
            </div>
            <div className="flex items-center justify-between pb-4 pl-5 pr-4">
              <div>
                <p className="font-medium text-xs text-white">Profit</p>
                <p className="font-medium text-[14px] text-[#3EDD87]">{eth?.toFixed(1)}</p>
              </div>
              <div>
                <p className="font-medium text-xs text-white">Loss</p>
                <p className="font-medium text-[14px] text-[#F46565]">-0.17%</p>
              </div>
              <div>
                <p className="font-medium text-xs text-white">Neutral</p>
                <p className="font-medium text-[14px] text-[#CABBB2]">2.70%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Ethereum Card */}
        <div>
          <h1 className="b-color font-bold text-[18px]">Ethereum</h1>
          <div className="mt-4 rounded-xl border border-[#7D67FF] bg-[#F8F7FF]">
            <div className="flex items-center justify-center">
              <div className="p-3">
                <h2 className="font-medium text-[20px] text-[#9381FF]">$</h2>
                <h1 className="font-medium text-[24px] text-[#9381FF]">1,820</h1>
              </div>
              <div className="w-full"></div>
              <Chart strokeColor="#7D67FF" />
            </div>
            <div className="flex items-center justify-between pb-4 pl-5 pr-4">
              <div>
                <p className="text-[#352E5B] font-medium text-xs">Profit</p>
                <p className="font-medium text-[14px] text-[#3EDD87]">{eth?.toFixed(1)}</p>
              </div>
              <div>
                <p className="text-[#352E5B] font-medium text-xs">Loss</p>
                <p className="font-medium text-[14px] text-[#F46565]">-0.17%</p>
              </div>
              <div>
                <p className="text-[#352E5B] font-medium text-xs">Neutral</p>
                <p className="font-medium text-[14px] text-[#CABBB2]">2.70%</p>
              </div>
            </div>
          </div>
        </div>

        {/* New Asset Card */}
        <div className="mt-10">
          <div className="rounded-xl border border-[#7D67FF] bg-[#F8F7FF] flex flex-col items-center justify-center py-9">
            <h1 className="py-2 px-4 text-2xl text-[#7D67FF] border-[1.5px] border-[#7D67FF] rounded-xl">+</h1>
            <p className="font-medium text-[16px] text-[#7D67FF]">New Asset</p>
          </div>
        </div>
      </div>

      {/* Activity Section */}
      <div className="flex items-center justify-between mt-12">
        <h1 className={`font-bold text-[28px] ${theme === "dark" ? "dark-text" : "pro-color"}`}>ACTIVITY</h1>
        <p className="b-color font-medium text-sm">More Activity</p>
      </div>

      <Data />
    </div>
  );
};

export default Dashboard;
