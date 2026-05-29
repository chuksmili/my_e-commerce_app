import {
  FaInstagram,
  FaFacebook,
  FaSnapchat,
  FaTiktok,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa"

import BackButton from "../components/BackButton";


function Contact() {
  return (
    <section className="min-h-screen bg-gray-100 py-6">

        <BackButton />
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">

          <h1 className="text-5xl font-bold">
            Contact Us
          </h1>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We are always ready to assist you with your orders,
            questions, and product inquiries.
          </p>

        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Left Side */}
          <div className="bg-white p-8 rounded-2xl shadow-md">

            <h2 className="text-3xl font-bold mb-6">
              Get In Touch
            </h2>

            {/* Trust Paragraph */}
            <p className="text-gray-600 leading-8">
              At Panaz International, customer satisfaction,
              reliability, and trust remain our top priorities.
              We are committed to providing quality footwear,
              responsive customer service, and a smooth ordering
              experience for every customer. Whether you are making
              an inquiry or placing an order, our team is always
              ready to assist you in a friendly and professional manner.
            </p>

            {/* Contact Info */}
            <div className="mt-8 space-y-4">

              <p className="text-gray-700">
                📞 WhatsApp: +234XXXXXXXXXX
              </p>

              <p className="text-gray-700">
                📧 Email: support@panazinternational.com
              </p>

              <p className="text-gray-700">
                📍 Lagos, Nigeria
              </p>

            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/234XXXXXXXXXX"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3 bg-green-500 text-white px-6 py-4 rounded-lg hover:bg-green-600 transition"
            >
              <FaWhatsapp />
              Chat With Us
            </a>

            {/* Social Icons */}
            <div className="flex gap-5 mt-10 text-2xl text-gray-700">

              <a href="#" className="hover:text-pink-500">
                <FaInstagram />
              </a>

              <a href="#" className="hover:text-blue-500">
                <FaFacebook />
              </a>

              <a href="#" className="hover:text-yellow-400">
                <FaSnapchat />
              </a>

              <a href="#" className="hover:text-black">
                <FaTiktok />
              </a>

              <a href="#" className="hover:text-sky-400">
                <FaTelegram />
              </a>

            </div>

          </div>

          {/* Right Side - Form */}
          <div className="bg-white p-8 rounded-2xl shadow-md">

            <h2 className="text-3xl font-bold mb-6">
              Send A Message
            </h2>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border p-4 rounded-lg outline-none focus:border-black"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border p-4 rounded-lg outline-none focus:border-black"
              />

              <textarea
                placeholder="Your Message"
                rows="6"
                className="w-full border p-4 rounded-lg outline-none focus:border-black"
              ></textarea>

              <button
                type="submit"
                className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Contact