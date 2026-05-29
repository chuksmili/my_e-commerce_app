import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"

import { FaBars, FaTimes } from "react-icons/fa"

function Navbar() {

  const { cartItems } = useContext(CartContext)

  const [menuOpen, setMenuOpen] = useState(false)

      // Calculate total items in cart
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-black"
        >
          Panaz International
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium items-center">

          <li>
            <Link to="/" className="hover:text-black">
              Home
            </Link>
          </li>

          <li>
            <Link to="/shop" className="hover:text-black">
              Shop
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-black">
              About
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-black">
              Contact
            </Link>
          </li>

          {/* Cart */}
          <li>
            <Link
              to="/cart"
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
            >
              Cart ({totalItems})
            </Link>
          </li>

        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (

        <div className="md:hidden bg-white shadow-md px-6 py-4">

          <ul className="flex flex-col gap-5 text-gray-700 font-medium">

            <li>
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/shop"
                onClick={() => setMenuOpen(false)}
              >
                Shop
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>

            <li>
              <Link
                to="/cart"
                onClick={() => setMenuOpen(false)}
                className="bg-black text-white px-4 py-3 rounded-lg inline-block text-center"
              >
                Cart ({totalItems})
              </Link>
            </li>

          </ul>

        </div>

      )}

    </nav>
  )
}

export default Navbar

