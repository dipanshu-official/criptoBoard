import React from "react";
import logo from "../assets/Navbar/logo.png";
import img1 from "../assets/Navbar/Home.png";
import img2 from "../assets/Navbar/Bag.png";
import img3 from "../assets/Navbar/Swap.png";
import img4 from "../assets/Navbar/User.png";
import img5 from "../assets/Navbar/Activity.png";
import img6 from "../assets/Navbar/Setting.png";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`flex flex-col justify-between min-h-screen items-center ${theme === "dark" ? "dark-bg " : "bg-white"}`}>
      {/* Top Section */}
      <div>
        <div className="flex items-center gap-2 pt-6">
          <img src={logo} alt="Logo" />
          <h2 className={`text-lg font-normal ${theme === "dark" ? "dark-text" : "text-[#352E5B]"}`}>Crypto <span className="font-bold">Board</span></h2>
        </div>

        {/* Navigation Links */}
        <ul className="mt-12 space-y-9">
          {[
            { img: img1, text: "Home" },
            { img: img2, text: "Assets" },
            { img: img3, text: "Chart" },
            { img: img4, text: "Support" },
            { img: img5, text: "Reports" },
            { img: img6, text: "Settings" }
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-6">
              <img src={item.img} alt="" className="h-5 w-5" />
              <li className={`font-medium text-sm ${theme === "dark" ? "dark-text" : "text-[#352E5B] "}`}>{item.text}</li>
            </div>
          ))}
        </ul>
      </div>

      {/* Bottom Button */}
      <div className="p-8">
        <button className={`${theme === "dark" ? "bg-[#ffff] text-[#0D0B1C]" : "bg-[#7D67FF] text-[#FFFF]"} py-3 px-16 rounded-lg`}>
          Guide
        </button>

      </div>

    </div>
  );
};

export default Navbar;
