import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CryptoTable from "./CryptoTable";

const CRYPTO_BASE = [
  {
    name: "Bitcoin",
    basePrice: 744715.57,
    baseChange: 3.25,
    iconBg: "#F7931A",
    icon: "₿",
  },
  {
    name: "Ethereum",
    basePrice: 21885.11,
    baseChange: 4.76,
    iconBg: "#627EEA",
    icon: "Ξ",
  },
  {
    name: "Tether",
    basePrice: 10.79,
    baseChange: 0.01,
    iconBg: "#26A17B",
    icon: "₮",
  },
  {
    name: "BNB",
    basePrice: 6904.35,
    baseChange: 4.45,
    iconBg: "#F3BA2F",
    icon: "B",
  },
  {
    name: "XRP",
    basePrice: 14.76,
    baseChange: 2.16,
    iconBg: "#23292F",
    icon: "✕",
  },
  {
    name: "USDC",
    basePrice: 10.79,
    baseChange: 0.0,
    iconBg: "#2775CA",
    icon: "$",
  },
];

const formatPrice = (price) => {
  return (
    "GHS " +
    price.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  );
};

function CryptoSection() {
  const [cryptoData, setCryptoData] = useState(() =>
    CRYPTO_BASE.map((c) => ({
      name: c.name,
      price: formatPrice(c.basePrice),
      change: c.baseChange.toFixed(2) + "%",
      up: c.baseChange >= 0,
      iconBg: c.iconBg,
      icon: c.icon,
      _numPrice: c.basePrice,
    })),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCryptoData((prev) =>
        prev.map((coin, i) => {
          const base = CRYPTO_BASE[i];
          // Small random fluctuation: -0.5% to +0.5% of base price
          const fluctuation = (Math.random() - 0.5) * 0.01 * base.basePrice;
          const newPrice = Math.max(0.01, coin._numPrice + fluctuation);
          // Change percentage relative to base
          const changePct =
            ((newPrice - base.basePrice) / base.basePrice) * 100 +
            base.baseChange;
          return {
            ...coin,
            price: formatPrice(newPrice),
            change: Math.abs(changePct).toFixed(2) + "%",
            up: changePct >= 0,
            _numPrice: newPrice,
          };
        }),
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="w-full bg-gray-100 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">

        {/* LEFT TEXT */}
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
            Explore crypto like Bitcoin, Ethereum, and Dogecoin.
          </h2>

          <p className="mt-4 md:mt-6 text-gray-600 text-base md:text-lg">
            Simply and securely buy, sell, and manage hundreds of cryptocurrencies.
          </p>

          <Link
            to="/explore"
            className="mt-6 md:mt-8 bg-black text-white px-4 md:px-6 py-3 rounded-full font-medium text-sm md:text-base cursor-pointer hover:bg-gray-800 transition-colors inline-block"
          >
            See more assets
          </Link>
        </div>

        {/* RIGHT CARD */}
        <CryptoTable cryptoData={cryptoData} />

      </div>
    </section>
  );
}

export default CryptoSection;