import { useParams } from "react-router-dom";

function AssetDetail() {
  const { id } = useParams();

  const articles = {
    "usdc-digital-dollar": {
      title: "USDC: The digital dollar for the global crypto economy",
      content: "Coinbase believes crypto will be part of the solution for creating an open financial system that is both more efficient and more accessible. USDC (USD Coin) is a stablecoin that maintains a 1:1 peg with the US dollar, making it a reliable digital dollar for the global crypto economy."
    },
    "crypto-replace-bank": {
      title: "Can crypto really replace your bank account?",
      content: "If you're a big enough fan of crypto, you've probably heard the phrase 'be your own bank' or the term 'bankless' — the idea being that crypto can provide financial services without traditional banking intermediaries."
    },
    "best-time-invest-crypto": {
      title: "When is the best time to invest in crypto?",
      content: "Cryptocurrencies like Bitcoin can experience daily (or even hourly) price volatility. As with any kind of investment, volatility may cause significant price swings. Timing the market perfectly is nearly impossible, but understanding market cycles can help."
    }
  };

  const article = articles[id];

  return (
    <div className="min-h-screen bg-gray-100 py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        {article ? (
          <>
            <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-8">{article.title}</h1>
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm">
              <p className="text-gray-700 text-lg leading-relaxed">{article.content}</p>
            </div>
          </>
        ) : (
          <h1 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-8">Article not found</h1>
        )}
      </div>
    </div>
  );
}

export default AssetDetail;