import React from "react";
import profile from "../assets/Profile/Profile.png"
import { useTheme } from "../context/ThemeContext";

const Profile = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`flex flex-col justify-between  ${theme === "dark" ? "dark-bg " : "bg-white"}`}>
      <div>

        <div className="flex flex-col items-center pt-11">

          <div className="">

            <h1 className={`font-bold text-lg ${theme === "dark" ? "dark-text" : "pro-text"}`}>Trader Profile</h1>
          </div>

          <div className="mt-9">
            <img src={profile} alt="" className="rounded-full border border-[#7D67FF]" />
          </div>

          <div className="mt-4">

            <h1 className={`font-bold text-[16px] ${theme === "dark" ? "dark-text" : "pro-text"}`}>Han Ji Pyeong</h1>
          </div>

          <div className="mt-4">

            <p className="b-color font-medium text-sm">Edit Profile</p>
          </div>
        </div>

        <div className="p-6 mt-3">
          <div>

            <div>
              <h1 className={`font-bold text-[16px] ${theme === "dark" ? "dark-text" : "pro-text"}`}>Account</h1>
            </div>
            <div className="mt-6 ">
              <div className="flex justify-between items-center">
                <p className={` font-medium text-sm ${theme === "dark" ? "text-[#FFFFFF80]" : "text-[#C0BBE0]"}`}>Joined</p>
                <p className={`font-medium text-sm ${theme === "dark" ? "text-[#E1DFECCC]" : "text-[#352E5BCC]"}`}>June 22, 2020</p>
              </div>

              <div className="flex justify-between items-center mt-5">
                <p className={` font-medium text-sm ${theme === "dark" ? "text-[#FFFFFF80]" : "text-[#C0BBE0]"}`}>Assets Value</p>
                <p className={`font-medium text-sm ${theme === "dark" ? "text-[#E1DFECCC]" : "text-[#352E5BCC]"}`}>$1,328,240.00</p>
              </div>
            </div>


          </div>

          <div className="w-full h-px bg-[#FFFFFF33] my-8"></div>



          <div>

            <div>
              <h1 className={`font-bold text-[16px] ${theme === "dark" ? "dark-text" : "pro-text"}`}>Account</h1>
            </div>
            <div className="mt-6 ">
              <div className="flex justify-between items-center">
                <p className={` font-medium text-sm ${theme === "dark" ? "text-[#FFFFFF80]" : "text-[#C0BBE0]"}`}>Bitcoin</p>
                <p className={`font-medium text-sm ${theme === "dark" ? "text-[#E1DFECCC]" : "text-[#352E5BCC]"}`}>23.5 <span className={theme === "dark" ? "text-[#FFFFFF80]" : "text-[#9381FF]"}>BTC</span></p>
              </div>

              <div className="flex justify-between items-center mt-5">
                <p className={` font-medium text-sm ${theme === "dark" ? "text-[#FFFFFF80]" : "text-[#C0BBE0]"}`}>Ethereum</p>
                <p className={`font-medium text-sm ${theme === "dark" ? "text-[#E1DFECCC]" : "text-[#352E5BCC]"}`}>190.45 <span className={theme === "dark" ? "text-[#FFFFFF80]" : "text-[#9381FF]"}>ETH</span></p>

              </div>

              <div className="flex justify-between items-center mt-5">
                <p className={` font-medium text-sm ${theme === "dark" ? "text-[#FFFFFF80]" : "text-[#C0BBE0]"}`}>Doge</p>
                <p className={`font-medium text-sm ${theme === "dark" ? "text-[#E1DFECCC]" : "text-[#352E5BCC]"}`}>239.500 <span className={theme === "dark" ? "text-[#FFFFFF80]" : "text-[#9381FF]"}>DOGE</span></p>

              </div>

              <div className="flex justify-between items-center mt-5">
                <p className={` font-medium text-sm ${theme === "dark" ? "text-[#FFFFFF80]" : "text-[#C0BBE0]"}`}>Ripple</p>
                <p className={`font-medium text-sm ${theme === "dark" ? "text-[#E1DFECCC]" : "text-[#352E5BCC]"}`}>65.110 <span className={theme === "dark" ? "text-[#FFFFFF80]" : "text-[#9381FF]"}>XRP</span></p>

              </div>
            </div>


          </div>

          <div className="mt-6">
            <p className="b-color font-medium text-sm">More assets...</p>
          </div>


        </div>
      </div>

       {/* Bottom Button */}
     <div className="p-8">
     <button className={`${theme === "dark" ? "bg-[#ffff] text-[#0D0B1C]" : "bg-[#7D67FF] text-[#FFFF]"} py-3 px-14 rounded-lg`}>
     Trade Now
     </button>

   </div>

    </div>
    
    

  );
};

export default Profile;
