import { Link } from "react-router-dom"
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaSnapchat,
    FaTiktok,
    FaTelegram,
} from "react-icons/fa"


function Footer() {
  return (
    <footer className="bg-black text-white py-12">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">
            Panaz International
          </h2>

          <p className="text-gray-400 mt-4">
            Premium footwear designed for comfort, style, and confidence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/cart" className="hover:text-white">Cart</Link></li>
            <li><Link to="/checkout" className="hover:text-white">Checkout</Link></li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Connect With Us
          </h3>

          <p className="text-gray-400">
            WhatsApp: +234XXXXXXXXXX
          </p>

          <p className="text-gray-400 mt-2">
            Email: support@panazinternational.com
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 text-xl">

            <a href="#" className="hover:text-pink-500">
              <FaInstagram />
            </a>

            <a href="#" className="hover:text-blue-500">
              <FaFacebook />
            </a>

            <a href="#" className="hover:text-blue-400">
              <FaTwitter />
            </a>
            
            <a href="#" className="hover:text-yellow-400">
              <FaSnapchat />
            </a>

            <a href="#" className="hover:text-white">
              <FaTiktok />
            </a>

            <a href="#" className="hover:text-sky-400">
              <FaTelegram />
            </a>

          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Panaz International. All rights reserved.
      </div>

    </footer>
  )
}

export default Footer