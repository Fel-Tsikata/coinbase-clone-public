import coinbaseImage from "../../assets/coinbaseImage.avif";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="bg-gray-50 py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">

          {/* Left Side */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-semibold leading-tight">
              Take control <br /> of your money
            </h2>

            <p className="mt-4 md:mt-6 text-black text-base md:text-lg">
              Start your portfolio today and discover crypto
            </p>

            {/* Email Input */}
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <input
                type="email"
                placeholder="satoshi@nakamoto.com"
                className="px-4 md:px-5 py-3 border rounded-lg w-full sm:w-72"
              />

              <button className="bg-blue-600 text-white px-4 md:px-6 py-3 rounded-full font-medium whitespace-nowrap">
                <Link to="/signup" className="block w-full h-full">
                  Sign up
                </Link>
              </button>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={coinbaseImage}
              alt="Crypto icons"
              className="w-[250px] md:w-[350px] lg:w-[550px]"
            />
          </div>

        </div>

        {/* Disclaimer */}
        <div className="mt-8 md:mt-12 text-xs md:text-sm text-gray-600 text-center lg:text-left max-w-7xl mx-auto px-4 md:px-6">
            <p>DEX trading is offered by Coinbase Bermuda Technologies Ltd.
            Products and features may not be available in all regions. Information is for informational purposes only, and is not (i) an offer, or
            (ii) a solicitation of an offer, to invest in, or to buy or sell, any interests or shares, or to participate in any investment or trading strategy or (iii)
            intended to provide accounting, legal, or tax advice, or investment recommendations. Trading cryptocurrency comes with a risk.</p>
        </div>
      </div>
    </section>
  );
}

export default CTA;