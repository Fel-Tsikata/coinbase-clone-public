import usdcImg from "@/assets/image1.jpeg";
import bankImg from "@/assets/image3.jpeg";
import investImg from "@/assets/image2.jpeg";
import { Link } from "react-router-dom";

function LearnSection() {

  const articles = [
    {
      id: "usdc-digital-dollar",
      image: usdcImg,
      title: "USDC: The digital dollar for the global crypto economy",
      description:
        "Coinbase believes crypto will be part of the solution for creating an open financial system that is both more efficient and more accessible."
    },
    {
      id: "crypto-replace-bank",
      image: bankImg,
      title: "Can crypto really replace your bank account?",
      description:
        "If you're a big enough fan of crypto, you've probably heard the phrase 'be your own bank' or the term 'bankless' — the idea being that..."
    },
    {
      id: "best-time-invest-crypto",
      image: investImg,
      title: "When is the best time to invest in crypto?",
      description:
        "Cryptocurrencies like Bitcoin can experience daily (or even hourly) price volatility. As with any kind of investment, volatility may cause..."
    }
  ];

  return (
    <section className="bg-gray-100 py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">

          <h2 className="text-6xl font-semibold leading-tight">
            New to crypto? <br />
            Learn some <br/>
            crypto basics
          </h2>

          <div>
            <p className="text-gray-600 mb-6 font-bold text-xl">
              Beginner guides, practical tips, and market updates for<br/>
              first-timers, experienced investors, and everyone in <br/>between
            </p>

            <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
              Read More
            </button>
          </div>

        </div>

        {/* Articles */}
        <div className="grid md:grid-cols-3 gap-10">

          {articles.map((article, index) => (
            <Link key={index} to={`/learn/${article.id}`} className="space-y-4 block">
              <img
                src={article.image}
                alt="article"
                className={`rounded-3xl w-full ${
                    index === 1 ? "h-56 object-cover" : ""
                }`}
              />

              <h3 className="text-2xl font-bold text-gray-900 hover:underline">
                {article.title}
              </h3>

              <p className="text-gray-600 text-base font-semibold">
                {article.description}
              </p>
            </Link>
          ))}

        </div>

      </div>

    </section>
  );
}

export default LearnSection;