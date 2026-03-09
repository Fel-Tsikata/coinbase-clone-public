import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  ShoppingCart,
  Smartphone,
  Shield,
  Briefcase,
  Link2,
  BarChart2,
  PieChart,
  Gem,
  CreditCard,
  Building2,
  LineChart,
  Wallet,
  ArrowRightLeft,
  Lock,
  Users,
  Blocks,
  Banknote,
  HelpCircle,
  FileText,
  Globe,
} from "lucide-react";

import { NAV_MENU } from "./navMenu";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  // Close mega menu on mouse leave of navbar
  const handleNavMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <nav
      className="h-[68px] border-b border-gray-100 text-[#0A0B0D] sticky top-0 bg-white z-50 w-full"
      onMouseLeave={handleNavMouseLeave}
    >
      <div className="flex items-center justify-between w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 h-full relative">
        <div className="flex items-center h-full">
          <Link to="/" className="ml-6 mr-6 lg:mr-10">
            <img src="/src/assets/coinbase-logo.svg" alt="Coinbase" className="h-8" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-1 h-full">
            {NAV_MENU.map((item, idx) => (
              <div
                key={idx}
                className="h-full flex items-center"
                onMouseEnter={() => setActiveMenu(item.label)}
              >
                {item.link ? (
                  <Link
                    to={item.link}
                    className="flex items-center px-3 h-full text-base font-bold text-[#0A0B0D] hover:bg-gray-100 hover:rounded-[1.75rem] transition-all"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div className="group cursor-default h-full flex items-center px-3 text-base font-bold text-[#0A0B0D] hover:bg-gray-100 hover:rounded-[1.75rem] transition-all">
                    <span>{item.label}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4 mr-8">
          <button className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
            <img src="/src/assets/search.svg" alt="search" className="w-6 h-6" />
          </button>
          <button className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
            <img src="/src/assets/globe.jpg" alt="globe" className="w-6 h-6 rounded-full" />
          </button>
          <Link
            to="/signin"
            className="text-lg font-bold text-[#0A0B0D] hover:text-[#0052FF] transition-colors"
          >
            Sign in
          </Link>
          <Link
            to="/signup"
            className="bg-[#0052FF] hover:bg-[#0045D8] text-white rounded-[1.75rem] px-6 py-3 font-bold transition-colors text-lg leading-tight"
          >
            Sign up
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-gray-700 hover:text-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mega Menu Dropdown */}
      <div
        className={`absolute top-[68px] left-0 w-full bg-white border-b border-gray-100 shadow-[0_12px_30px_rgba(0,0,0,0.06)] transform origin-top transition-all duration-200 ease-in-out z-40 ${
          activeMenu && NAV_MENU.find((m) => m.label === activeMenu)?.columns
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        {NAV_MENU.map((item, idx) => {
          if (!item.columns) return null;
          return (
            <div
              key={idx}
              className={`w-full max-w-[1280px] mx-auto px-10 py-10 flex transition-opacity duration-200 absolute left-0 right-0 ${activeMenu === item.label ? "opacity-100 relative z-10" : "opacity-0 invisible absolute top-0 pointer-events-none"}`}
            >
              <div className="flex-1 flex gap-12 pr-12 border-r border-gray-100">
                {item.columns.map((col, cIdx) => (
                  <div key={cIdx} className="flex-1 flex flex-col gap-6">
                    {col.map((link, lIdx) => (
                      <div
                        key={lIdx}
                        className={`flex items-start gap-4 ${!link.heading && "cursor-pointer group/link"}`}
                      >
                        {link.heading ? (
                          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-[-8px] block">
                            {link.heading}
                          </span>
                        ) : (
                          <>
                            <div className="w-10 h-10 rounded-full bg-[#F3F4F7] flex items-center justify-center flex-shrink-0 text-[#0A0B0D] group-hover/link:bg-[#0052FF] group-hover/link:text-white transition-colors duration-200">
                              <link.icon size={20} strokeWidth={1.5} />
                            </div>
                            <div className="flex-1 mt-0.5">
                              <h4 className="text-[15px] font-bold text-[#0A0B0D] group-hover/link:text-[#0052FF] transition-colors">
                                {link.title}
                              </h4>
                              {link.desc && (
                                <p className="text-[13px] text-[#5B616E] mt-0.5 leading-snug">
                                  {link.desc}
                                </p>
                              )}
                            </div>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              <div className="w-[320px] pl-12 flex">
                {activeMenu === "Individuals" && (
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0">
                      <img
                        src="/src/assets/individuals.png"
                        alt="Individuals"
                        className="w-32 h-40 object-contain rounded-xl"
                      />
                    </div>
                    <div className="flex-1">
                      <span className="text-[12px] font-bold uppercase tracking-widest text-[#5B616E] mb-2 block">
                        {item.promo.tag}
                      </span>
                      <h3 className="text-[18px] font-bold leading-tight text-[#0A0B0D] mb-3">
                        {item.promo.text}
                      </h3>
                      <span className="text-[#0052FF] font-bold text-[14px] hover:text-[#0045D8] cursor-pointer flex items-center transition-colors group/arrow">
                        {item.promo.linkLabel}
                        <span className="ml-1 transition-transform group-hover/arrow:translate-x-1">
                          →
                        </span>
                      </span>
                    </div>
                  </div>
                )}
                {activeMenu === "Institutions" && (
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0">
                      <img
                        src="/src/assets/institutions.png"
                        alt="Institutions"
                        className="w-32 h-40 object-contain rounded-xl"
                      />
                    </div>
                    <div className="flex-1">
                      <span className="text-[12px] font-bold uppercase tracking-widest text-[#5B616E] mb-2 block">
                        {item.promo.tag}
                      </span>
                      <h3 className="text-[18px] font-bold leading-tight text-[#0A0B0D] mb-3">
                        {item.promo.text}
                      </h3>
                      <span className="text-[#0052FF] font-bold text-[14px] hover:text-[#0045D8] cursor-pointer flex items-center transition-colors group/arrow">
                        {item.promo.linkLabel}
                        <span className="ml-1 transition-transform group-hover/arrow:translate-x-1">
                          →
                        </span>
                      </span>
                    </div>
                  </div>
                )}
                {activeMenu === "Businesses" && (
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0">
                      <img
                        src="/src/assets/businesses.png"
                        alt="Businesses"
                        className="w-32 h-40 object-contain rounded-xl"
                      />
                    </div>
                    <div className="flex-1">
                      <span className="text-[12px] font-bold uppercase tracking-widest text-[#5B616E] mb-2 block">
                        {item.promo.tag}
                      </span>
                      <h3 className="text-[18px] font-bold leading-tight text-[#0A0B0D] mb-3">
                        {item.promo.text}
                      </h3>
                      <span className="text-[#0052FF] font-bold text-[14px] hover:text-[#0045D8] cursor-pointer flex items-center transition-colors group/arrow">
                        {item.promo.linkLabel}
                        <span className="ml-1 transition-transform group-hover/arrow:translate-x-1">
                          →
                        </span>
                      </span>
                    </div>
                  </div>
                )}
                {activeMenu === "Developers" && (
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0">
                      <img
                        src="/src/assets/developers.jpg"
                        alt="Developers"
                        className="w-32 h-40 object-contain rounded-xl"
                      />
                    </div>
                    <div className="flex-1">
                      <span className="text-[12px] font-bold uppercase tracking-widest text-[#5B616E] mb-2 block">
                        {item.promo.tag}
                      </span>
                      <h3 className="text-[18px] font-bold leading-tight text-[#0A0B0D] mb-3">
                        {item.promo.text}
                      </h3>
                      <span className="text-[#0052FF] font-bold text-[14px] hover:text-[#0045D8] cursor-pointer flex items-center transition-colors group/arrow">
                        {item.promo.linkLabel}
                        <span className="ml-1 transition-transform group-hover/arrow:translate-x-1">
                          →
                        </span>
                      </span>
                    </div>
                  </div>
                )}
                {activeMenu === "Company" && (
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0">
                      <img
                        src="/src/assets/company.png"
                        alt="Company"
                        className="w-32 h-40 object-contain rounded-xl"
                      />
                    </div>
                    <div className="flex-1">
                      <span className="text-[12px] font-bold uppercase tracking-widest text-[#5B616E] mb-2 block">
                        {item.promo.tag}
                      </span>
                      <h3 className="text-[18px] font-bold leading-tight text-[#0A0B0D] mb-3">
                        {item.promo.text}
                      </h3>
                      <span className="text-[#0052FF] font-bold text-[14px] hover:text-[#0045D8] cursor-pointer flex items-center transition-colors group/arrow">
                        {item.promo.linkLabel}
                        <span className="ml-1 transition-transform group-hover/arrow:translate-x-1">
                          →
                        </span>
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile Menu Content Sidebar */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-[68px] left-0 w-full h-[calc(100vh-68px)] bg-white overflow-y-auto z-50 flex flex-col p-6 shadow-inner border-t border-gray-50">
          <div className="flex flex-col gap-6 mb-8">
            {NAV_MENU.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col border-b border-gray-100 pb-4"
              >
                <span className="font-bold text-lg text-black">
                  {item.label}
                </span>
                {item.columns && (
                  <div className="flex flex-col gap-4 mt-4 pl-4 border-l border-gray-100">
                    {item.columns[0]
                      ?.filter((i) => !i.heading)
                      .map((sub, i) => (
                        <span key={i} className="font-medium text-[#5B616E]">
                          {sub.title}
                        </span>
                      ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-auto flex flex-col gap-4">
            <Link
              to="/signin"
              className="text-center font-bold text-lg py-3 text-[#0A0B0D] border border-gray-200 rounded-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="bg-[#0052FF] text-white text-center rounded-full px-6 py-3 font-bold text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
