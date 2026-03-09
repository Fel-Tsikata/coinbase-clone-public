import { useNavigate, Link } from "react-router-dom";
import personalIcon from "@/assets/personal.svg";
import businessIcon from "@/assets/business.svg";
import developerIcon from "@/assets/Developer.svg";    
import logo from "@/assets/login.svg";

function AccountType() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white relative">

      {/* Logo */}
      <div className="absolute top-6 left-8">
        <Link to="/" className="cursor-pointer">
          <img src={logo} alt="logo" className="h-8" />
        </Link>
      </div>

      <div className="flex items-center justify-center min-h-screen">
        <div className="max-w-md w-full px-6">

          <h1 className="text-2xl font-semibold mb-8">
            What kind of account are you creating?
          </h1>

          <div className="space-y-4">

            {/* Personal */}
            <div
              onClick={() => navigate("/signup/personal")}
              className="flex items-center gap-4 p-5 border border-gray-700 rounded-xl cursor-pointer hover:border-blue-500 transition"
            >
              <img src={personalIcon} alt="personal" className="w-12 h-12" />

              <div>
                <h2 className="font-semibold">Personal</h2>
                <p className="text-gray-400 text-sm">
                  Trade crypto as an individual.
                </p>
              </div>
            </div>

            {/* Business */}
            <div
              onClick={() => navigate("/signup/business")}
              className="flex items-center gap-4 p-5 border border-gray-700 rounded-xl cursor-pointer hover:border-blue-500 transition"
            >
              <img src={businessIcon} alt="business" className="w-12 h-12" />

              <div>
                <h2 className="font-semibold">Business</h2>
                <p className="text-gray-400 text-sm">
                  Manage teams and portfolios, accept crypto payments, access APIs, and more.
                </p>
              </div>
            </div>

            {/* Developer */}
            <div
              onClick={() => navigate("/signup/developer")}
              className="flex items-center gap-4 p-5 border border-gray-700 rounded-xl cursor-pointer hover:border-blue-500 transition"
            >
              <img src={developerIcon} alt="developer" className="w-12 h-12" />

              <div>
                <h2 className="font-semibold">Developer</h2>
                <p className="text-gray-400 text-sm">
                  Build onchain using developer tooling.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default AccountType;