import { useState } from "react";
import logo from "@/assets/login.svg";
import googleIcon from "@/assets/google.svg";
import appleIcon from "@/assets/apple.svg";

function SignIn() {
  const [email, setEmail] = useState("");

  const isDisabled = email.trim() === "";

  return (
    <div className="min-h-screen bg-black text-white relative flex items-center justify-center">

      {/* Logo */}
      <div className="absolute top-6 left-8">
        <img src={logo} alt="logo" className="h-8" />
      </div>

      <div className="w-full max-w-md px-6">

        {/* Title */}
        <h1 className="text-2xl font-semibold mb-6 text-center">
          Sign in to Coinbase
        </h1>

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
          className={`w-full py-4 rounded-full font-medium transition mb-6
          ${
            isDisabled
              ? "bg-blue-900 text-gray-400 "
              : "bg-blue-600 hover:bg-blue-500"
          }`}
        >
          Continue
        </button>

        {/* Divider */}
        <div className="flex items-center mb-6">
          <div className="flex-grow border-t border-gray-700"></div>
          <span className="mx-4 text-gray-400 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-700"></div>
        </div>

        {/* Passkey */}
        <button className="relative w-full flex items-center justify-center py-4 rounded-full 
        bg-gradient-to-r from-[#2A2F37] to-[#343A43] 
        hover:from-[#343A43] hover:to-[#3d4450] 
        transition mb-4">

          {/* Icon */}
           <passkeyIcon className="absolute left-5 w-5 h-5 fill-white" />

          {/* Text */}
          Sign in with Passkey

        </button>
        

        {/* Google */}
        <button className="relative w-full flex items-center justify-center py-4 rounded-full 
        bg-gradient-to-r from-[#2A2F37] to-[#343A43] 
        hover:from-[#343A43] hover:to-[#3d4450] 
        transition mb-4">

          <img
            src={googleIcon}
            alt="google"
            className="absolute left-5 w-5 h-5"
          />

          Sign in with Google

        </button>

        {/* Apple */}
       <button className="relative w-full flex items-center justify-center py-4 rounded-full 
        bg-gradient-to-r from-[#2A2F37] to-[#343A43] 
        hover:from-[#343A43] hover:to-[#3d4450] 
        transition mb-6">

          <img
            src={appleIcon}
            alt="apple"
            className="absolute left-5 w-5 h-5"
          />

          Sign in with Apple

        </button>

        {/* Signup */}
        <p className="text-center text-lg font-semibold mb-6">
          Don't have an account?{" "}
          <span className="text-blue-500 cursor-pointer">Sign up</span>
        </p>

        {/* Privacy */}
        <p className="text-xs text-white-500 text-center mb-8">
          Not your device? Use a private window. See <br/>
          our Privacy Policy for more info.
        </p>

        {/* Cancel */}
        <p className="text-center font-semibold text-blue-500 cursor-pointer">
          Cancel signing in
        </p>

      </div>
    </div>
  );
}

export default SignIn;