import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/login.svg";

function DeveloperSignup() {
  const [email, setEmail] = useState("");

  const isDisabled = email.trim() === "";

  return (
    <div className="min-h-screen bg-black text-white relative flex items-center justify-center">

      {/* Logo */}
      <div className="absolute top-6 left-8">
        <Link to="/" className="cursor-pointer">
          <img src={logo} alt="logo" className="h-8" />
        </Link>
      </div>

      <div className="w-full max-w-md px-6">

        {/* Heading */}
        <h1 className="text-2xl font-semibold mb-2">
          Create your account
        </h1>

        <p className="text-gray-400 mb-6">
          Access all that Coinbase has to offer with a single account.
        </p>

        {/* Email */}
        <label className="text-sm mb-2 block">Email</label>

        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-black border border-gray-700 rounded-lg p-3 mb-6 focus:outline-none focus:border-blue-500"
        />

        {/* Continue Button */}
        <button
          disabled={isDisabled}
          className={`w-full py-4 rounded-full font-medium transition
            ${
              isDisabled
                ? "bg-blue-900 text-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-500"
            }`}
        >
          Continue
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-700"></div>
          <span className="mx-4 text-gray-400 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-700"></div>
        </div>

        {/* Google Button */}
        <button className="w-full flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-700 py-4 rounded-full mb-4 transition">
          <span className="text-lg font-semibold">G</span>
          Sign up with Google
        </button>

        {/* Apple Button */}
        <button className="w-full flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-700 py-4 rounded-full transition">
          <span className="text-lg"></span>
          Sign up with Apple
        </button>

        {/* Sign in */}
        <p className="text-center mt-6 text-sm">
          Already have an account?{" "}
          <span className="text-blue-500 cursor-pointer">Sign in</span>
        </p>

        {/* Footer text */}
        <p className="text-xs text-gray-500 text-center mt-6">
          By creating an account you certify that you are over the age of 18
          and agree to our Privacy Policy and Cookie Policy.
        </p>

      </div>
    </div>
  );
}

export default DeveloperSignup;