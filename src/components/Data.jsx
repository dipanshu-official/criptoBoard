import React from "react";
import { useTheme } from "../context/ThemeContext";
import img from "../assets/Table/image2.png";
import img2 from "../assets/Table/image.png";

const Data = () => {
  const { theme } = useTheme();

  const data = [
    {
      logo: img,
      transactions: "Ethereum Purchased",
      amount: "0.0154 ETH",
      total: "$10.00",
      status: "Pending",
      date: "February 21, 2021",
    },
    {
      logo: img2,
      transactions: "Bitcoin Purchased",
      amount: "0.3 BTC",
      total: "$10.00",
      status: "Done",
      date: "February 14, 2021",
    },
    {
      logo: img2,
      transactions: "Bitcoin Purchased",
      amount: "0.025 BTC",
      total: "$10.00",
      status: "Done",
      date: "January 14, 2021",
    },
  ];

  return (
    <div className="mt-9 px-4">
      <div
        className={`rounded-2xl overflow-x-auto ${
          theme === "dark" ? "bg-[#110e22]" : "bg-[#9381FF]"
        } p-5`}
      >
        <table className="min-w-full border-collapse">
          <thead>
            <tr
              className={`text-sm font-bold ${
                theme === "dark" ? "text-[#FFFFFF80]" : "text-[#C8C2E8]"
              }`}
            >
              <th className="px-4 py-2 text-left">Transactions</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Total</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2 text-right">Date</th>
            </tr>
          </thead>
          <tbody className="border-t border-gray-500 last:border-b">
            {data.map((item, index) => (
              <tr
                key={index}
                
              >
                <td className="px-4 py-3 flex items-center gap-3 whitespace-nowrap">
                  <img
                    src={item.logo}
                    alt=""
                    className="bg-[#FFFFFF] p-2 rounded-2xl w-10 h-10"
                  />
                  <p className="text-sm text-white">{item.transactions}</p>
                </td>
                <td className="px-4 py-3 text-sm text-white">{item.amount}</td>
                <td
                  className={`px-4 py-3 text-sm ${
                    theme === "dark" ? "text-[#FFFFFF80]" : "text-[#C8C2E8]"
                  }`}
                >
                  {item.total}
                </td>
                <td
                  className={`px-4 py-3 text-sm ${
                    theme === "dark" ? "text-[#FFFFFF80]" : "text-[#C8C2E8]"
                  }`}
                >
                  {item.status}
                </td>
                <td
                  className={`px-4 py-3 text-sm text-right ${
                    theme === "dark" ? "text-[#FFFFFF80]" : "text-[#C8C2E8]"
                  }`}
                >
                  {item.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Data;
