import logo from "../../assets/coinbase-logo.svg";
import { FaXTwitter, FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-gray-200 pt-12 md:pt-20 pb-6 md:pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">

          {/* Logo Column */}
          <div>
            <img src={logo} alt="logo" className="w-10" />
          </div>

          {/* Company + Learn */}
          <div className="space-y-10">
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>About</li>
                <li>Careers</li>
                <li>Affiliates</li>
                <li>Blog</li>
                <li>Press</li>
                <li>Security</li>
                <li>Investors</li>
                <li>Legal & privacy</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Learn</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>Explore</li>
                <li>Market statistics</li>
                <li>Coinbase Bytes newsletter</li>
                <li>Crypto basics</li>
                <li>Tips & tutorials</li>
                <li>Crypto glossary</li>
                <li>Market updates</li>
                <li>What is Bitcoin?</li>
                <li>What is crypto?</li>
                <li>What is a blockchain?</li>
                <li>How to set up a crypto wallet?</li>
                <li>How to send crypto?</li>
                <li>Taxes</li>
              </ul>
            </div>
          </div>

          {/* Individuals + Businesses + Institutions */}
          <div className="space-y-10">
            <div>
              <h4 className="font-semibold mb-4">Individuals</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>Buy & sell</li>
                <li>Earn free crypto</li>
                <li>Base App</li>
                <li>Coinbase One</li>
                <li>Debit Card</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Businesses</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>Asset Listings</li>
                <li>Coinbase Business</li>
                <li>Payments</li>
                <li>Commerce</li>
                <li>Token Manager</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Institutions</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>Prime</li>
                <li>Staking</li>
                <li>Exchange</li>
                <li>International Exchange</li>
                <li>Derivatives Exchange</li>
                <li>Verified Pools</li>
              </ul>
            </div>
          </div>

          {/* Developers */}
          <div>
            <h4 className="font-semibold mb-4">Developers</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Developer Platform</li>
              <li>Server Wallets</li>
              <li>Embedded Wallets</li>
              <li>Trade API</li>
              <li>Data API</li>
              <li>Verifications</li>
              <li>Node</li>
              <li>AgentKit</li>
              <li>Staking</li>
              <li>Faucet</li>
              <li>Exchange API</li>
              <li>International Exchange API</li>
              <li>Prime API</li>
              <li>Derivatives API</li>
            </ul>
          </div>

          {/* Support + Asset + Stock */}
          <div className="space-y-10">
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>Help center</li>
                <li>Contact us</li>
                <li>Create account</li>
                <li>ID verification</li>
                <li>Account information</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Asset prices</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>Bitcoin price</li>
                <li>Ethereum price</li>
                <li>Solana price</li>
                <li>XRP price</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Stock prices</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>NVIDIA price</li>
                <li>Apple price</li>
                <li>Microsoft price</li>
                <li>Amazon price</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Social Icons */}
        <div className="flex gap-6 mt-16 text-xl text-gray-600">
          <FaXTwitter />
          <FaLinkedin />
          <FaInstagram />
          <FaTiktok />
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-10 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-600">
          <div>© 2026 Coinbase • Privacy • Terms & Conditions</div>
          <div>Global • English</div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;