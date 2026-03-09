function CryptoTable({ cryptoData }) {
  return (
    <div className="bg-black text-white w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-3xl p-4 md:p-6 lg:p-10 mx-auto">

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 md:gap-6 text-xs md:text-sm mb-4 md:mb-6">
        <span className="bg-gray-700 px-3 md:px-4 py-2 rounded-full">Tradable</span>
        <span className="text-gray-400">Top gainers</span>
        <span className="text-gray-400">New on Coinbase</span>
      </div>

      {/* Coins */}
      <div className="space-y-4 md:space-y-8">
        {cryptoData.map((crypto, index) => (
          <CryptoRow key={index} crypto={crypto} />
        ))}
      </div>

    </div>
  );
}

function CryptoRow({ crypto }) {
  return (
    <div className="grid grid-cols-3 items-center gap-2 md:gap-4">

       {/* Coin */}
      <div className="flex items-center gap-2 md:gap-3 min-w-0">
        <div
          className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
          style={{ backgroundColor: crypto.iconBg }}
        >
          {crypto.icon}
        </div>
        <span className="text-sm md:text-lg truncate">{crypto.name}</span>
      </div>
         {/* Price and Change */}
      <div className="text-right col-span-2">
        <p className="text-sm md:text-base">{crypto.price}</p>
        <p className={`text-xs md:text-sm ${crypto.up ? "text-green-400" : "text-red-400"}`}>
          {crypto.up ? "+" : "-"}{crypto.change}
        </p>
      </div>

    </div>
  );
}

export default CryptoTable;