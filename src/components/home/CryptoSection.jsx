import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CryptoTable from "./CryptoTable";
import { cryptoApi } from "@/lib/api";

const formatPrice = (price) => {
  const numeric = Number(price) || 0;

  return (
    "GHS " +
    numeric.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  );
};

const iconColors = ["#F7931A", "#627EEA", "#26A17B", "#F3BA2F", "#2775CA", "#7C3AED"];

const normalizeCrypto = (coin, index) => {
  const change24h = Number(coin?.change24h ?? 0);
  const symbol = (coin?.symbol || coin?.name || "?").toString().trim();

  return {
    id: coin?._id || `${symbol}-${index}`,
    name: coin?.name || "Unknown",
    price: formatPrice(coin?.price),
    change: Math.abs(change24h).toFixed(2) + "%",
    up: change24h >= 0,
    iconBg: iconColors[index % iconColors.length],
    icon: symbol.slice(0, 1).toUpperCase(),
  };
};

function CryptoSection() {
  const [activeTab, setActiveTab] = useState("all");
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadCrypto = async () => {
      setLoading(true);
      setError("");

      try {
        let result;

        if (activeTab === "gainers") {
          result = await cryptoApi.getGainers();
        } else if (activeTab === "new") {
          result = await cryptoApi.getNew();
        } else {
          result = await cryptoApi.getAll();
        }

        const rows = (result?.data || [])
          .slice(0, 6)
          .map((coin, index) => normalizeCrypto(coin, index));

        setCryptoData(rows);
      } catch (err) {
        setError(err.message || "Unable to load crypto data.");
      } finally {
        setLoading(false);
      }
    };

    loadCrypto();
  }, [activeTab]);

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
        <CryptoTable
          activeTab={activeTab}
          onTabChange={setActiveTab}
          cryptoData={cryptoData}
          loading={loading}
          error={error}
        />

      </div>
    </section>
  );
}

export default CryptoSection;