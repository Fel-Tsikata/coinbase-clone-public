import heroPhone from "@/assets/Hero-phone.png";
import { Link } from "react-router-dom";

function Hero(){
    return(
        <section className="w-full bg-white py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
                {/* Image */}
        <div className="flex justify-center lg:justify-start order-1">
          <img
            src={heroPhone}
            alt="Coinbase app"
            className="w-[320px] md:w-[420px] lg:w-[900px] xl:w-[1100px] rounded-4xl"
          />
        </div>

         {/* Text Content */}
        <div className="text-center lg:text-left order-2">

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight">
            The future of
            <br />
            finance is here.
          </h1>

          <p className="mt-6 text-base md:text-lg text-gray-600">
            Trade crypto and more on a platform you can trust.
          </p>

          {/* Email + Button */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

            <input
              type="email"
              placeholder="satoshi@nakamoto.com"
              className="px-4 py-3 w-full sm:w-[320px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium whitespace-nowrap">
              <Link to="/signup" className="block w-full h-full">
                Sign up
              </Link>
            </button>

          </div>
        </div>


        </div>

          
        </section>
    );
}
export default Hero;