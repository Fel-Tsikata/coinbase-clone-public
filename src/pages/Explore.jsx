import React from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ChevronRight,
  ChevronLeft,
  Info,
  ArrowUpRight,
  ArrowDownRight,
  Globe,
} from "lucide-react";
import Footer from "../components/layout/Footer";

const Explore = () => {
  return (
    <div className="w-full bg-white min-h-screen pb-20">
      {/* 
        MAIN TWO-COLUMN LAYOUT
        Left: Primary content (Explore Header, Market Stats, Crypto Prices)
        Right: Sidebar (Sign Up Promo, Top Movers, New on Coinbase)
      */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 flex flex-col lg:flex-row pt-12 gap-8 lg:gap-12 relative">
        {/* =======================================================
            LEFT COLUMN (Main Content) 
        ======================================================= */}
        <div className="flex-1 max-w-[800px]">
          {/* --- Header Section --- */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mb-12 gap-6">
            <div className="flex flex-col">
              <h1 className="text-[2.5rem] font-bold text-[#0A0B0D] tracking-tight mb-2">
                Explore crypto
              </h1>
              <div className="flex items-center text-[#5B616E] text-[15px]">
                <span className="font-medium mr-1 text-[#0A0B0D]">
                  Coinbase 50 Index
                </span>
                is down
                <ArrowDownRight
                  className="text-[#FF5B5B] ml-1.5 mr-0.5"
                  size={16}
                  strokeWidth={3}
                />
                <span className="text-[#FF5B5B] font-semibold">1.36%</span>
                <span className="ml-1">(24hrs)</span>
                <Info size={14} className="ml-2 text-gray-400" />
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-[320px]">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="w-full bg-gray-50 border border-transparent hover:border-gray-200 focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-full py-3.5 pl-12 pr-4 text-[#0A0B0D] placeholder-gray-500 font-medium transition-all"
                placeholder="Search for an asset"
              />
            </div>
          </div>

          {/* --- Market Stats Section --- */}
          <div className="mb-16">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-[2rem] font-bold text-[#0A0B0D] tracking-tight">
                Market stats
              </h2>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-300 hover:text-black hover:border-gray-300 transition-colors cursor-default">
                  <ChevronLeft size={20} />
                </button>
                <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <p className="text-[#5B616E] text-[15px] leading-relaxed mb-1 pr-4">
              The overall crypto market is growing this week. As of today, the
              total crypto market capitalization is 24.02 trillion, representing
              a 0.75% increase from last week.
            </p>
            <button className="text-[#0052FF] font-bold text-[15px] hover:text-[#0045D8] mb-6">
              Read more
            </button>

            {/* Stats Cards Scroll Container */}
            <div className="flex overflow-x-auto gap-4 pb-4 snap-x hide-scrollbar">
              {/* Stat Card 1: Total market cap */}
              <div className="bg-[#F3F4F7] rounded-2xl p-5 min-w-[240px] flex-1 snap-start relative overflow-hidden group hover:bg-[#EAECEF] transition-colors cursor-pointer">
                <div className="relative z-10 flex flex-col h-full">
                  <span className="text-gray-500 text-[13px] font-medium mb-1">
                    Total market cap
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[#0A0B0D] font-bold text-lg">
                      GHS 24.02T
                    </span>
                    <span className="text-[#FF5B5B] text-sm font-bold flex items-center">
                      <ArrowDownRight
                        size={14}
                        strokeWidth={3}
                        className="mr-0.5"
                      />
                      1.16%
                    </span>
                  </div>
                </div>
                {/* Decorative Red Chart Line SVG */}
                <div className="absolute bottom-4 left-0 w-full h-12 flex items-end">
                  <svg
                    viewBox="0 0 100 30"
                    preserveAspectRatio="none"
                    className="w-full h-full text-[#FF5B5B] opacity-80"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="1.5"
                  >
                    <path
                      d="M0 25 L10 20 L20 28 L30 15 L40 22 L50 25 L60 5 L70 20 L80 22 L90 28 L100 24"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Stat Card 2: Trade volume */}
              <div className="bg-[#F3F4F7] rounded-2xl p-5 min-w-[240px] flex-1 snap-start relative overflow-hidden group hover:bg-[#EAECEF] transition-colors cursor-pointer">
                <div className="relative z-10 flex flex-col h-full">
                  <span className="text-gray-500 text-[13px] font-medium mb-1">
                    Trade volume
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[#0A0B0D] font-bold text-lg">
                      GHS 1.28T
                    </span>
                    <span className="text-[#00D395] text-sm font-bold flex items-center">
                      <ArrowUpRight
                        size={14}
                        strokeWidth={3}
                        className="mr-0.5"
                      />
                      19.49%
                    </span>
                  </div>
                </div>
                {/* Decorative Green Chart SVG */}
                <div className="absolute bottom-0 left-0 w-full h-14 flex items-end">
                  <svg
                    viewBox="0 0 100 30"
                    preserveAspectRatio="none"
                    className="w-full h-full"
                    stroke="none"
                    fill="#00D395"
                    fillOpacity="0.1"
                  >
                    <path d="M0 30 L0 25 L10 25 L20 22 L30 24 L40 20 L50 15 L60 8 L70 12 L80 5 L90 2 L100 0 L100 30 Z" />
                  </svg>
                  <svg
                    viewBox="0 0 100 30"
                    preserveAspectRatio="none"
                    className="absolute top-0 w-full h-full text-[#00D395]"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="1.5"
                  >
                    <path
                      d="M0 25 L10 25 L20 22 L30 24 L40 20 L50 15 L60 8 L70 12 L80 5 L90 2 L100 0"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Stat Card 3: Buy-sell ratio */}
              <div className="bg-[#F3F4F7] rounded-2xl p-5 min-w-[240px] flex-1 snap-start relative overflow-hidden group hover:bg-[#EAECEF] transition-colors cursor-pointer">
                <div className="relative z-10 flex flex-col h-full">
                  <span className="text-gray-500 text-[13px] font-medium mb-1">
                    Buy-sell ratio
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[#0A0B0D] font-bold text-lg">
                      GHS 0.76
                    </span>
                    <span className="text-[#FF5B5B] text-sm font-bold flex items-center">
                      <ArrowDownRight
                        size={14}
                        strokeWidth={3}
                        className="mr-0.5"
                      />
                      1.77%
                    </span>
                  </div>
                </div>
                {/* Decorative Red Chart SVG */}
                <div className="absolute bottom-0 left-0 w-full h-14 flex items-end">
                  <svg
                    viewBox="0 0 100 30"
                    preserveAspectRatio="none"
                    className="w-full h-full"
                    stroke="none"
                    fill="#FF5B5B"
                    fillOpacity="0.05"
                  >
                    <path d="M0 30 L0 5 L10 8 L20 12 L30 18 L40 20 L50 28 L60 25 L70 20 L80 22 L90 20 L100 15 L100 30 Z" />
                  </svg>
                  <svg
                    viewBox="0 0 100 30"
                    preserveAspectRatio="none"
                    className="absolute top-0 w-full h-full text-[#FF5B5B]"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="1.5"
                  >
                    <path
                      d="M0 5 L10 8 L20 12 L30 18 L40 20 L50 28 L60 25 L70 20 L80 22 L90 20 L100 15"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Stat Card 4: BTC dominance */}
              <div className="bg-[#F3F4F7] rounded-2xl p-5 min-w-[240px] flex-1 snap-start relative overflow-hidden group hover:bg-[#EAECEF] transition-colors cursor-pointer">
                <div className="relative z-10 flex flex-col h-full">
                  <span className="text-gray-500 text-[13px] font-medium mb-1">
                    BTC dominance
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[#0A0B0D] font-bold text-lg">
                      60.13%
                    </span>
                    <span className="text-[#00D395] text-sm font-bold flex items-center">
                      <ArrowUpRight
                        size={14}
                        strokeWidth={3}
                        className="mr-0.5"
                      />
                      0.09%
                    </span>
                  </div>
                </div>
                {/* Decorative Green Line Chart */}
                <div className="absolute bottom-4 left-0 w-full h-10 flex items-end opacity-80">
                  <svg
                    viewBox="0 0 100 30"
                    preserveAspectRatio="none"
                    className="w-full h-full text-[#00D395]"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="1"
                  >
                    <path
                      d="M0 25 L5 20 L10 15 L15 25 L20 10 L25 15 L30 10 L35 22 L40 15 L45 28 L50 20 L55 22 L60 5 L65 15 L70 10 L75 20 L80 15 L85 18 L90 8 L95 15 L100 10"
                      strokeLinejoin="miter"
                      strokeLinecap="square"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* --- Crypto Market Prices Section Header --- */}
          <div>
            <div className="flex items-baseline gap-4 mb-4">
              <h2 className="text-[2rem] font-bold text-[#0A0B0D] tracking-tight">
                Crypto market prices
              </h2>
              <span className="text-[#5B616E] text-sm font-medium">
                18,562 assets
              </span>
            </div>
            <p className="text-[#5B616E] text-[15px] leading-relaxed mb-8 pr-4">
              The overall crypto market is growing this week. As of today, the
              total crypto market capitalization is 24.02 trillion, representing
              a 0.75% increase from last week.
            </p>

            {/* Filters Row */}
            <div className="flex flex-wrap gap-2 mb-6">
              <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-[#0A0B0D] font-bold text-[13px] px-4 py-2 rounded-full transition-colors">
                <Globe size={16} /> All assets{" "}
                <ChevronRight
                  size={14}
                  className="rotate-90 mt-0.5 text-gray-400"
                />
              </button>
              <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-[#0A0B0D] font-bold text-[13px] px-4 py-2 rounded-full transition-colors">
                1D{" "}
                <ChevronRight
                  size={14}
                  className="rotate-90 mt-0.5 text-gray-400"
                />
              </button>
              <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-[#0A0B0D] font-bold text-[13px] px-4 py-2 rounded-full transition-colors">
                GHS{" "}
                <ChevronRight
                  size={14}
                  className="rotate-90 mt-0.5 text-gray-400"
                />
              </button>
              <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-[#0A0B0D] font-bold text-[13px] px-4 py-2 rounded-full transition-colors">
                10 rows{" "}
                <ChevronRight
                  size={14}
                  className="rotate-90 mt-0.5 text-gray-400"
                />
              </button>
            </div>

            {/* Crypto Data Table */}
            <div className="w-full overflow-x-auto pb-4">
              <div className="min-w-[850px]">
                {/* Header */}
                <div className="grid grid-cols-[30px_1fr_130px_100px_100px_130px_130px_80px] gap-4 py-3 border-b border-gray-100 text-[#5B616E] text-[13px] font-bold">
                  <div></div>
                  <div className="flex items-center gap-1 cursor-pointer hover:text-[#0A0B0D] transition-colors">
                    Asset <ChevronRight size={12} className="-rotate-90" />
                  </div>
                  <div className="flex items-center gap-1 cursor-pointer hover:text-[#0A0B0D] transition-colors">
                    Market price{" "}
                    <ChevronRight size={12} className="-rotate-90" />
                  </div>
                  <div>Chart</div>
                  <div className="flex items-center gap-1 cursor-pointer hover:text-[#0A0B0D] transition-colors">
                    Change <ChevronRight size={12} className="-rotate-90" />
                  </div>
                  <div className="flex items-center gap-1 cursor-pointer text-[#0052FF] transition-colors">
                    Mkt cap{" "}
                    <ChevronRight size={12} className="rotate-90 mt-1" />
                  </div>
                  <div className="flex items-center gap-1 cursor-pointer hover:text-[#0A0B0D] transition-colors">
                    Volume <ChevronRight size={12} className="-rotate-90" />
                  </div>
                  <div className="text-right pr-2">Actions</div>
                </div>

                {/* Rows */}
                <div className="flex flex-col">
                  {/* Row 1: Bitcoin */}
                  <div className="grid grid-cols-[30px_1fr_130px_100px_100px_130px_130px_80px] gap-4 py-4 items-center border-b border-gray-50 hover:bg-gray-50 transition-colors group cursor-pointer">
                    <div className="flex justify-center text-gray-300 group-hover:text-gray-400">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#F7931A] rounded-full flex justify-center items-center text-white font-bold text-lg shadow-sm">
                        <span className="-translate-y-px">₿</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-[#0A0B0D] text-[15px] leading-tight">
                          Bitcoin
                        </span>
                        <span className="text-[#5B616E] text-[13px] font-medium">
                          BTC
                        </span>
                      </div>
                    </div>
                    <div className="font-medium text-[#0A0B0D] text-[15px] whitespace-nowrap">
                      GHS 721,358.10
                    </div>
                    <div className="w-[60px] h-[24px]">
                      <svg
                        viewBox="0 0 100 30"
                        className="w-full h-full text-[#F7931A]"
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="1.5"
                      >
                        <path
                          d="M0 25 L10 20 L20 28 L30 15 L40 22 L50 10 L60 20 L70 5 L80 18 L90 10 L100 8"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="font-bold text-[#FF5B5B] text-[15px] flex items-center whitespace-nowrap">
                      <ArrowDownRight
                        size={16}
                        strokeWidth={3}
                        className="mr-0.5"
                      />{" "}
                      0.94%
                    </div>
                    <div className="font-medium text-[#0A0B0D] text-[15px] whitespace-nowrap">
                      GHS 14.4T
                    </div>
                    <div className="font-medium text-[#0A0B0D] text-[15px] whitespace-nowrap">
                      GHS 317.8B
                    </div>
                    <div className="text-right">
                      <button className="bg-[#0052FF] hover:bg-[#0045D8] text-white rounded-[1.75rem] px-5 py-2 font-bold text-[14px]">
                        Trade
                      </button>
                    </div>
                  </div>

                  {/* Row 2: Ethereum */}
                  <div className="grid grid-cols-[30px_1fr_130px_100px_100px_130px_130px_80px] gap-4 py-4 items-center border-b border-gray-50 hover:bg-gray-50 transition-colors group cursor-pointer">
                    <div className="flex justify-center text-gray-300 group-hover:text-gray-400">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#627EEA] rounded-full flex justify-center items-center text-white font-bold text-lg shadow-sm">
                        <span className="-translate-y-px">Ξ</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-[#0A0B0D] text-[15px] leading-tight">
                          Ethereum
                        </span>
                        <span className="text-[#5B616E] text-[13px] font-medium">
                          ETH
                        </span>
                      </div>
                    </div>
                    <div className="font-medium text-[#0A0B0D] text-[15px] whitespace-nowrap">
                      GHS 20,834.91
                    </div>
                    <div className="w-[60px] h-[24px]">
                      <svg
                        viewBox="0 0 100 30"
                        className="w-full h-full text-[#627EEA]"
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="1.5"
                      >
                        <path
                          d="M0 10 L10 12 L20 8 L30 25 L40 20 L50 28 L60 15 L70 20 L80 18 L90 28 L100 24"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="font-bold text-[#FF5B5B] text-[15px] flex items-center whitespace-nowrap">
                      <ArrowDownRight
                        size={16}
                        strokeWidth={3}
                        className="mr-0.5"
                      />{" "}
                      1.85%
                    </div>
                    <div className="font-medium text-[#0A0B0D] text-[15px] whitespace-nowrap">
                      GHS 2.5T
                    </div>
                    <div className="font-medium text-[#0A0B0D] text-[15px] whitespace-nowrap">
                      GHS 148.9B
                    </div>
                    <div className="text-right">
                      <button className="bg-[#0052FF] hover:bg-[#0045D8] text-white rounded-[1.75rem] px-5 py-2 font-bold text-[14px]">
                        Trade
                      </button>
                    </div>
                  </div>

                  {/* Row 3: USDC */}
                  <div className="grid grid-cols-[30px_1fr_130px_100px_100px_130px_130px_80px] gap-4 py-4 items-center border-b border-gray-50 hover:bg-gray-50 transition-colors group cursor-pointer">
                    <div className="flex justify-center text-gray-300 group-hover:text-gray-400">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#2775CA] rounded-full flex justify-center items-center text-white font-bold text-[10px] shadow-sm tracking-tighter">
                        USD
                        <br />C
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-[#0A0B0D] text-[15px] leading-tight">
                          USDC
                        </span>
                        <span className="text-[#5B616E] text-[13px] font-medium flex items-center">
                          USDC{" "}
                          <span className="w-1 h-1 bg-gray-400 rounded-full mx-1.5"></span>{" "}
                          <span className="text-[#00D395]">
                            Earns 3.35% APY
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="font-medium text-[#0A0B0D] text-[15px] whitespace-nowrap">
                      GHS 10.77
                    </div>
                    <div className="w-[60px] h-[24px]">
                      <svg
                        viewBox="0 0 100 30"
                        className="w-full h-full text-[#26A17B]"
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="1.5"
                      >
                        <path
                          d="M0 5 L10 28 L20 28 L30 25 L40 28 L50 26 L60 28 L70 28 L80 25 L90 28 L100 28"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="font-bold text-[#00D395] text-[15px] flex items-center whitespace-nowrap">
                      <ArrowUpRight
                        size={16}
                        strokeWidth={3}
                        className="mr-0.5"
                      />{" "}
                      0.01%
                    </div>
                    <div className="font-medium text-[#0A0B0D] text-[15px] whitespace-nowrap">
                      GHS 2.0T
                    </div>
                    <div className="font-medium text-[#0A0B0D] text-[15px] whitespace-nowrap">
                      GHS 627.0B
                    </div>
                    <div className="text-right">
                      <button className="bg-[#0052FF] hover:bg-[#0045D8] text-white rounded-[1.75rem] px-5 py-2 font-bold text-[14px]">
                        Trade
                      </button>
                    </div>
                  </div>

                  {/* Row 4: BNB */}
                  <div className="grid grid-cols-[30px_1fr_130px_100px_100px_130px_130px_80px] gap-4 py-4 items-center border-b border-gray-50 hover:bg-gray-50 transition-colors group cursor-pointer">
                    <div className="flex justify-center text-gray-300 group-hover:text-gray-400">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#F3BA2F] rounded-full flex justify-center items-center text-white shadow-sm">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2L6 8h4.5v8h3V8H18L12 2z" />
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-[#0A0B0D] text-[15px] leading-tight">
                          BNB
                        </span>
                        <span className="text-[#5B616E] text-[13px] font-medium">
                          BNB
                        </span>
                      </div>
                    </div>
                    <div className="font-medium text-[#0A0B0D] text-[15px] whitespace-nowrap">
                      GHS 6,606.68
                    </div>
                    <div className="w-[60px] h-[24px]">
                      <svg
                        viewBox="0 0 100 30"
                        className="w-full h-full text-[#F3BA2F]"
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="1.5"
                      >
                        <path
                          d="M0 25 L10 28 L20 20 L30 25 L40 10 L50 20 L60 28 L70 20 L80 15 L90 28 L100 24"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="font-bold text-[#FF5B5B] text-[15px] flex items-center whitespace-nowrap">
                      <ArrowDownRight
                        size={16}
                        strokeWidth={3}
                        className="mr-0.5"
                      />{" "}
                      1.37%
                    </div>
                    <div className="font-medium text-[#0A0B0D] text-[15px] whitespace-nowrap">
                      GHS 900.8B
                    </div>
                    <div className="font-medium text-[#0A0B0D] text-[15px] whitespace-nowrap">
                      GHS 13.6B
                    </div>
                    <div className="text-right">
                      <button className="bg-[#0052FF] hover:bg-[#0045D8] text-white rounded-[1.75rem] px-5 py-2 font-bold text-[14px]">
                        Trade
                      </button>
                    </div>
                  </div>

                  {/* Row 5: XRP */}
                  <div className="grid grid-cols-[30px_1fr_130px_100px_100px_130px_130px_80px] gap-4 py-4 items-center border-b border-gray-50 hover:bg-gray-50 transition-colors group cursor-pointer">
                    <div className="flex justify-center text-gray-300 group-hover:text-gray-400">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#23292F] rounded-full flex justify-center items-center text-white shadow-sm">
                        <span className="text-lg pb-0.5">✕</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-[#0A0B0D] text-[15px] leading-tight">
                          XRP
                        </span>
                        <span className="text-[#5B616E] text-[13px] font-medium">
                          XRP
                        </span>
                      </div>
                    </div>
                    <div className="font-medium text-[#0A0B0D] text-[15px] whitespace-nowrap">
                      GHS 14.47
                    </div>
                    <div className="w-[60px] h-[24px]">
                      <svg
                        viewBox="0 0 100 30"
                        className="w-full h-full text-[#0A0B0D]"
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="1.5"
                      >
                        <path
                          d="M0 25 L10 20 L20 28 L30 15 L40 22 L50 10 L60 20 L70 5 L80 18 L90 10 L100 8"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="font-bold text-[#FF5B5B] text-[15px] flex items-center whitespace-nowrap">
                      <ArrowDownRight
                        size={16}
                        strokeWidth={3}
                        className="mr-0.5"
                      />{" "}
                      0.88%
                    </div>
                    <div className="font-medium text-[#0A0B0D] text-[15px] whitespace-nowrap">
                      GHS 821.4B
                    </div>
                    <div className="font-medium text-[#0A0B0D] text-[15px] whitespace-nowrap">
                      GHS 45.7B
                    </div>
                    <div className="text-right">
                      <button className="bg-[#0052FF] hover:bg-[#0045D8] text-white rounded-[1.75rem] px-5 py-2 font-bold text-[14px]">
                        Trade
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination Controls */}
            <div className="flex flex-col items-center mt-10 w-full mb-8">
              <div className="flex items-center gap-6 mb-3">
                <button className="w-8 h-8 rounded-full bg-[#0052FF] text-white flex items-center justify-center font-bold text-[15px]">
                  1
                </button>
                <button className="text-[#0A0B0D] font-bold text-[15px] hover:text-[#0052FF] transition-colors">
                  2
                </button>
                <button className="text-[#0A0B0D] font-bold text-[15px] hover:text-[#0052FF] transition-colors">
                  3
                </button>
                <span className="text-[#0A0B0D] font-bold text-[15px] tracking-widest leading-none">
                  ...
                </span>
                <button className="text-[#0A0B0D] font-bold text-[15px] hover:text-[#0052FF] transition-colors">
                  1,857
                </button>
                <button className="text-[#0A0B0D] hover:text-[#0052FF] transition-colors ml-2">
                  <ChevronRight size={18} />
                </button>
              </div>
              <p className="text-[#5B616E] text-[13px] font-medium">
                1-10 of 18,562 assets
              </p>
            </div>
          </div>
        </div>

        {/* =======================================================
            RIGHT COLUMN (Sidebar)
        ======================================================= */}
        <div className="hidden lg:flex flex-col w-[360px] flex-shrink-0 pl-[40px] border-l border-gray-100">
          {/* Get Started Box */}
          <div className="bg-[#0052FF] rounded-[24px] p-6 relative overflow-hidden flex flex-col items-start min-h-[200px] w-full mb-10">
            <h3 className="text-white font-bold text-[20px] mb-2 relative z-10 w-[60%] tracking-tight">
              Get started
            </h3>
            <p className="text-white text-[15px] mb-8 relative z-10 w-[60%] leading-snug">
              Create your account today
            </p>
            <Link
              to="/signup/personal"
              className="bg-[#F3F4F7] text-[#0A0B0D] px-5 py-2.5 rounded-full font-bold text-[15px] hover:bg-white transition-colors relative z-10"
            >
              Sign up
            </Link>

            {/* Decorative Graphic */}
            <div className="absolute right-[-10px] top-[20px] w-32 h-32 z-0 pointer-events-none scale-[1.3]">
              {/* Top Gray Circle */}
              <div className="absolute top-0 right-4 w-7 h-7 bg-[#C9CCD4] rounded-full mix-blend-normal"></div>
              {/* Bottom Green Circle */}
              <div className="absolute bottom-1 left-2 w-9 h-9 bg-[#00D395] rounded-full mix-blend-normal z-20"></div>
              {/* Main Yellow Circle */}
              <div className="absolute inset-0 bg-[#FFD100] rounded-full overflow-hidden flex items-center justify-center m-[14px]">
                {/* Inner border shape to match screenshot */}
                <div className="absolute inset-[-4px] rounded-full border-[3px] border-[#0A0B0D] z-10"></div>
              </div>
              {/* Outer Blue Ring matching the exact visual intersection */}
              <div className="absolute inset-0 rounded-full border-[3px] border-[#0052FF] m-0.5 z-30 pointer-events-none"></div>
              {/* Star core graphic */}
              <div className="absolute inset-0 flex items-center justify-center translate-x-0 translate-y-[-1px] z-30">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0A0B0D"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                >
                  <path
                    d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5Z"
                    fill="#0A0B0D"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-gray-200 mb-8"></div>

          {/* Top Movers Section */}
          <div className="flex flex-col mb-10">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-[20px] text-[#0A0B0D] tracking-tight">
                Top movers
              </h3>
              <div className="flex gap-2 text-gray-400">
                <button className="hover:text-black transition-colors">
                  <ChevronLeft size={20} strokeWidth={1.5} />
                </button>
                <button className="text-black hover:text-gray-600 transition-colors">
                  <ChevronRight size={20} strokeWidth={2} />
                </button>
              </div>
            </div>
            <p className="text-[#5B616E] text-[15px] mb-6">24hr change</p>

            <div className="flex gap-4">
              {/* FAI Card */}
              <div className="bg-[#F3F4F7] rounded-[24px] p-[18px] w-[140px] flex flex-col flex-shrink-0 cursor-pointer hover:bg-gray-200 transition-colors">
                <div className="w-9 h-9 rounded-full bg-blue-500 mb-4 overflow-hidden border border-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&w=64&h=64"
                    alt="FAI"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[#5B616E] text-[12px] font-medium mb-1 tracking-wide">
                  FAI
                </span>
                <div className="flex items-center text-[#FF5B5B] font-normal text-[20px] mb-1.5 tracking-tight -ml-1">
                  <ArrowDownRight
                    size={18}
                    strokeWidth={2}
                    className="mr-0.5 mt-px"
                  />{" "}
                  25.70%
                </div>
                <span className="text-[#0A0B0D] text-[13px] font-medium">
                  GHS 0.0715
                </span>
              </div>

              {/* Plume Card */}
              <div className="bg-[#F3F4F7] rounded-[24px] p-[18px] w-[140px] flex flex-col flex-shrink-0 cursor-pointer hover:bg-gray-200 transition-colors">
                <div className="w-9 h-9 rounded-[8px] bg-[#FF5B5B] mb-4 overflow-hidden flex items-center justify-center text-white">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                </div>
                <span className="text-[#5B616E] text-[12px] font-medium mb-1 uppercase tracking-wide">
                  PLUME
                </span>
                <div className="flex items-center text-[#00D395] font-normal text-[20px] mb-1.5 tracking-tight -ml-1">
                  <ArrowUpRight
                    size={18}
                    strokeWidth={2}
                    className="mr-0.5 mt-px"
                  />{" "}
                  19.65%
                </div>
                <span className="text-[#0A0B0D] text-[13px] font-medium">
                  GHS 0.15
                </span>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-gray-200 mb-8"></div>

          {/* New on Coinbase Section */}
          <div className="flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-[20px] text-[#0A0B0D] tracking-tight">
                New on Coinbase
              </h3>
              <div className="flex gap-2 text-gray-400">
                <button className="hover:text-black transition-colors">
                  <ChevronLeft size={20} strokeWidth={1.5} />
                </button>
                <button className="text-black hover:text-gray-600 transition-colors">
                  <ChevronRight size={20} strokeWidth={2} />
                </button>
              </div>
            </div>

            <div className="flex gap-4">
              {/* HYPE Card */}
              <div className="bg-[#F3F4F7] rounded-[24px] p-[18px] w-[140px] flex flex-col flex-shrink-0 cursor-pointer hover:bg-gray-200 transition-colors">
                <div className="w-[38px] h-[38px] rounded-full bg-[#182C29] mb-4 flex items-center justify-center text-[#75C3BC]">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M16 8C18.2091 8 20 9.79086 20 12C20 14.2091 18.2091 16 16 16C14.1648 16 12.6193 14.7708 12.1476 13.0441C11.8315 11.8841 10.1685 11.8841 9.85236 13.0441C9.38072 14.7708 7.83515 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.83515 8 9.38072 9.2292 9.85236 10.9559C10.1685 12.1159 11.8315 12.1159 12.1476 10.9559C12.6193 9.2292 14.1648 8 16 8Z" />
                  </svg>
                </div>
                <span className="text-[#5B616E] text-[12px] font-medium mb-1 tracking-wide uppercase">
                  HYPE
                </span>
                <span className="text-[#0A0B0D] font-bold text-[15.5px] mb-[6px] tracking-tight">
                  Hyperliquid
                </span>
                <span className="text-[#0A0B0D] text-[13px] font-medium mt-auto">
                  Added Feb 5
                </span>
              </div>

              {/* Jupiter Card */}
              <div className="bg-[#F3F4F7] rounded-[24px] p-[18px] w-[140px] flex flex-col flex-shrink-0 cursor-pointer hover:bg-gray-200 transition-colors">
                <div className="w-[38px] h-[38px] rounded-full bg-[#0E1521] mb-4 flex items-center justify-center relative overflow-hidden">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="absolute"
                    style={{ transform: "rotate(-15deg)" }}
                  >
                    <circle cx="12" cy="12" r="10" fill="#0A0B0D" />
                    <path
                      d="M5 4.5 C 7 2 11 1.5 13.5 2.5 M2.5 8 C 5 4.5 12 3.5 16.5 5.5 M1.5 13 C 4 9.5 12 8 18.5 10.5 M3 17.5 C 6 14.5 13 13 18.5 15.5 M8.5 21.5 C 10.5 19.5 14.5 18 17.5 20.5"
                      stroke="#48C774"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M5 4.5 C 7 2 11 1.5 13.5 2.5 M2.5 8 C 5 4.5 12 3.5 16.5 5.5"
                      stroke="#3788C8"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <span className="text-[#5B616E] text-[12px] font-medium mb-1 tracking-wide uppercase">
                  JUPITER
                </span>
                <span className="text-[#0A0B0D] font-bold text-[15.5px] mb-[6px] tracking-tight">
                  Jupiter
                </span>
                <span className="text-[#0A0B0D] text-[13px] font-medium mt-auto">
                  Added Dec 9
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Promo Banner */}
      <div className="w-[70%] bg-[#0052FF] flex justify-center py-16 px-6 sm:px-10 mt-12">
        <div className="max-w-[1280px] w-full flex flex-col md:flex-row justify-between items-center gap-10 lg:pl-[20px] lg:pr-[120px]">
          <div className="max-w-[420px]">
            <h2 className="text-white text-[1.75rem] md:text-[2rem] font-[500] leading-[1.3] mb-8">
              Create a Coinbase account to trade crypto. It's quick, easy, and
              secure.
            </h2>
            <Link
              to="/signup/personal"
              className="bg-white hover:bg-gray-50 text-[#0A0B0D] rounded-full px-7 py-[17px] font-bold text-[15px] flex items-center w-full max-w-[245px] transition-colors group"
            >
              Start Trading
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="ml-auto group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14m-6-6l6 6-6 6" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* Decorative Graphic */}
          <div className="relative w-[300px] h-[160px] scale-110">
            {/* Horizontal lines */}
            <div className="absolute left-3 top-9 flex flex-col gap-[7px]">
              <div className="w-[48px] h-[2.5px] bg-[#0A0B0D]/30"></div>
              <div className="w-[60px] h-[2.5px] bg-[#0A0B0D]/30"></div>
            </div>

            {/* Visual Chart Graphic */}
            <div className="absolute right-0 bottom-0 w-[240px] h-full flex items-end">
              {/* Gray Base */}
              <div className="absolute bottom-5 left-0 w-full h-[40px] bg-[#C9CCD4]"></div>

              {/* Red Pillar */}
              <div className="absolute left-[30px] bottom-3 w-[24px] h-[55px] rounded-t-lg bg-[#FF5B5B] flex flex-col justify-between overflow-hidden">
                <div className="w-full h-3 border-b-2 border-black/10"></div>
                <div className="w-full h-8 bg-[#FF5B5B]"></div>
                <div className="w-full h-5 bg-[#0A0B0D] transform translate-y-7 rounded-sm shadow-[0_-2px_4px_rgba(0,0,0,0.1)]"></div>
              </div>

              {/* Blue Pillar */}
              <div className="absolute left-[95px] bottom-6 w-[24px] h-[75px] rounded-t-lg bg-[#0052FF] flex flex-col justify-between z-10 overflow-hidden shadow-[-4px_0_8px_rgba(0,0,0,0.05)]">
                <div className="w-full h-3 border-b-2 border-black/10"></div>
                <div className="w-full h-10 bg-[#0052FF]"></div>
                <div className="w-full h-5 bg-[#0A0B0D] transform translate-y-7 rounded-sm shadow-[0_-2px_4px_rgba(0,0,0,0.1)]"></div>
              </div>

              {/* Green Pillar */}
              <div className="absolute left-[165px] bottom-9 w-[24px] h-[95px] rounded-t-[7px] bg-[#00D395] flex flex-col justify-between z-10 overflow-hidden shadow-[-4px_0_8px_rgba(0,0,0,0.05)]">
                <div className="w-full h-3 border-b-2 border-black/10 transform-none"></div>
                <div className="w-full h-12 bg-[#00D395]"></div>
                <div className="w-full h-5 bg-[#0A0B0D] transform translate-y-7 rounded-sm shadow-[0_-2px_4px_rgba(0,0,0,0.1)]"></div>
              </div>

              {/* Black Upward Trend Arrow */}
              <svg
                className="absolute inset-0 w-full h-full z-20 pointer-events-none"
                viewBox="0 0 240 160"
                fill="none"
              >
                <path d="M30 115 L173 53" stroke="#0A0B0D" strokeWidth="2.5" />
                <polygon points="173,53 162,56 169,65" fill="#0A0B0D" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Explore;
