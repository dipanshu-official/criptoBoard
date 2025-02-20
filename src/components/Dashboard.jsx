import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react"; // Using Lucide icons (you can use any icon library)
import Data from "./Data";
import Chart from "./Chart";

const Dashboard = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`  relative p-6 min-h-screen ${theme === "dark" ? "dark-bg " : "bg-white"}`}>
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="absolute hidden md:block top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
      >
        {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
      </button>

      {/* Dashboard Content */}
      <div className={`flex items-center justify-between mt-15`}>
        <div>
          <h1 className={`font-bold text-[28px] ${theme === "dark" ? "dark-text" : "pro-color"}`}>Assets</h1>
        </div>
        <div>
          <p className="b-color font-medium text-sm">More Assets</p>
        </div>

      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-6 mt-9 ">

        {/* first Card  */}
        <div>
          <h1 className="b-color font-bold text-[18px]">Bitcoin</h1>
          <div className="mt-4">
            <div className="bg-[#9381FF] rounded-xl" >
              <div className="flex items-center ">
                <div className="p-3">
                  <h2 className="font-medium text-[20px] text-white">$</h2>
                  <h1 className="font-medium text-[40px] text-white">1,820</h1>
                </div>
                <div><Chart strokeColor="#FFFFFF" /></div>
              </div>
              <div className="flex items-center justify-between pb-4 pl-5 pr-4">
                <div>
                  <p className="font-medium text-xs text-white">Profit</p>
                  <p className="font-medium text-[14px] text-[#3EDD87]">+ 2,87%</p>
                </div>
                <div>
                  <p className="font-medium text-xs text-white">Loss</p>
                  <p className="font-medium text-[14px] text-[#F46565]">- 0,17%</p>
                </div>
                <div>
                  <p className="font-medium text-xs text-white">Netral</p>
                  <p className="font-medium text-[14px] text-[#CABBB2]">2,70%</p>
                </div>


              </div>

            </div>

          </div>
        </div>


        {/* Second Card  */}
        <div className=" ">
          <h1 className="b-color font-bold text-[18px]">Ethereum</h1>
          <div className="mt-4">
            <div className={`${theme === "dark" ? "bg-[#131024] border border-[#FFFFFF1A] " : "bg-[#F8F7FF] border border-[#7D67FF]"} rounded-xl`} >
              <div className="flex items-center ">
                <div className="p-3">
                  <h2 className={`font-medium text-[20px] ${theme === "dark" ? "dark-text" : "text-[#9381FF]"}`}>$</h2>
                  <h1 className={`font-medium text-[40px] ${theme === "dark" ? "dark-text" : "text-[#9381FF]"}`}>1,820</h1>
                </div>
                <div><Chart strokeColor="#7D67FF"/></div>
              </div>
              <div className="flex items-center justify-between pb-4 pl-5 pr-4">
                <div>
                  <p className={`${theme === "dark" ? " text-[#E1DFEC80]" : "text-[#352E5B]"} font-medium text-xs`}>Profit</p>
                  <p className="font-medium text-[14px] text-[#3EDD87]">+ 2,87%</p>
                </div>
                <div>
                  <p className={`${theme === "dark" ? " text-[#E1DFEC80]" : "text-[#352E5B]"} font-medium text-xs`}>Loss</p>
                  <p className="font-medium text-[14px] text-[#F46565]">- 0,17%</p>
                </div>
                <div>
                  <p className={`${theme === "dark" ? " text-[#E1DFEC80]" : "text-[#352E5B]"} font-medium text-xs`}>Netral</p>
                  <p className="font-medium text-[14px] text-[#CABBB2]">2,70%</p>
                </div>


              </div>

            </div>

          </div>
        </div>

        {/* Third card  */}

        <div className=" ">
          <div className="mt-10">
            <div className={`${theme === "dark" ? "bg-[#131024] border border-[#FFFFFF1A] " : "bg-[#F8F7FF] border border-[#7D67FF]"} rounded-xl`} >
              <div className="flex flex-col items-center justify-center py-11 ">
                <h1 className={`py-2 px-4 text-2xl ${theme === "dark" ? "border-[1.5px] text-[#FFFFFF80] border-[#FFFFFF1A] " : "border-[1.5px] text-[#7D67FF] border-[#7D67FF]"} rounded-xl`}>+</h1>
                <p className={` font-medium text-[16px] ${theme === "dark" ? "text-[#FFFFFF80]" : "text-[#7D67FF]"}`}>New Asset</p>
              </div>



            </div>

          </div>

        </div>
      </div>

      <div className={`flex items-center justify-between mt-12`}>
        <div>
          <h1 className={`font-bold text-[28px] ${theme === "dark" ? "dark-text" : "pro-color"}`}>ACTIVITY</h1>
        </div>
        <div>
          <p className="b-color font-medium text-sm">More Activity</p>
        </div>

      </div>

      <Data />

    </div>


  );
};

export default Dashboard;
