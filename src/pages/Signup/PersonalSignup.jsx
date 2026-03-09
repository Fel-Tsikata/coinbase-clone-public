import logo from "@/assets/login.svg";
import { Link } from "react-router-dom";
import {useState} from "react";

function PersonalSignup() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="absolute top-6 left-8">
          <Link to="/" className="cursor-pointer">
            <img src={logo} alt="logo" className="h-8" />
          </Link>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold mb-2">
          Create your account
        </h1>

        <p className="text-gray-400 mb-6">
          Access all that Coinbase has to offer with a single <br />account.
        </p>

        {/* Email */}
        <label className="text-semibold text-gray-300">Email</label>

        <input
          type="email"
          placeholder="Your email address"
          value = {email}
          onChange = {(e) => setEmail(e.target.value)}
          className="w-full mt-2 mb-6 p-3 rounded-lg bg-black border border-gray-700 focus:outline-none focus:border-[#5F90FA]"
        />

        {/* Continue Button */}
         <button
            disabled={!email}
            className={`w-full py-3 rounded-full font-medium mb-6 transition 
              ${email 
                ? "bg-[#5F90FA] hover:bg-blue-500 text-black-400 disabled:opacity-50 " 
                : "bg-[#5F90FA] text-black-400"}
            `}
          >
            Continue
          </button>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 border-t border-gray-700"></div>
          <span className="text-gray-400 text-sm">OR</span>
          <div className="flex-1 border-t border-gray-700"></div>
        </div>

        {/* Google Button */}
        <button className="w-full bg-gray-800 py-3 rounded-full mb-4">
          Sign up with Google
        </button>

        {/* Apple Button */}
        <button className="w-full bg-gray-800 py-3 rounded-full mb-6">
          Sign up with Apple
        </button>

        {/* Sign In */}
        <p className="text-center text-gray-400 text-sm">
          Already have an account? 
          <span className="text-blue-400 ml-1 cursor-pointer">
            Sign in
          </span>
        </p>

      </div>
    </div>
  );
}

export default PersonalSignup;