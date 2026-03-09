import { Link } from "react-router-dom";

function Feature({ buttonValue,title, description, buttonText, image, reverse }) {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div
        className={`max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Image */}
        <div className={`${reverse ? "lg:order-2" : ""}`}>
          <img
            src={image}
            alt={title}
            className="rounded-3xl shadow-xl w-full max-w-md mx-auto lg:max-w-none"
          />
        </div>

        {/* Text */}
        <div className="text-center lg:text-left">
            <button className="text-xs md:text-sm text-gray-500 font-medium mb-4 rounded-xl border border-gray-200 bg-white-200 px-3 md:px-4 py-2">
                {buttonValue}
            </button>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold">
            {title}
          </h2>

          <p className="mt-4 md:mt-6 text-gray-600 max-w-lg mx-auto lg:mx-0">
            {description}
          </p>

          <button className="mt-6 md:mt-8 bg-black text-white px-4 md:px-6 py-3 rounded-full text-sm md:text-base">
            <Link to="/signup" className="block w-full h-full">
              {buttonText}
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Feature;