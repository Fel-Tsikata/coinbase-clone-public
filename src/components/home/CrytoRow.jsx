import React from "react";
import { Link } from "react-router-dom";

const CryptoRow = ({ crypto }) => {
  return (
    <Link
      to="/asset/portfolio"
      className="flex justify-between items-center cursor-pointer hover:bg-[#1A1B1F] -mx-4 px-4 py-2 rounded-xl transition"
    >
      <div className="flex items-center gap-4">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
          style={{ backgroundColor: crypto.iconBg }}
        >
          {crypto.icon}
        </div>
        <span className="text-[1.25rem] font-medium">{crypto.name}</span>
      </div>
      <div className="text-right">
        <div className="text-[1.15rem] font-medium">{crypto.price}</div>
        <div
          className={`text-[0.9rem] font-medium flex items-center justify-end gap-1 ${
            crypto.up ? "text-[#00D395]" : "text-[#FF5B5B]"
          }`}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={crypto.up ? "" : "transform -scale-100"}
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
          {crypto.change}
        </div>
      </div>
    </Link>
  );
};

export default CryptoRow;
