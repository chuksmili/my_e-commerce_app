import BackButton from "../components/BackButton";


function About() {
  return (
    <section className="bg-gray-100 min-h-screen">

        <h1 className="bg-red-900"><BackButton /></h1>

      {/* HERO SECTION */}
      <div className="relative h-[500px] bg-black flex items-center justify-center text-center px-6">

        {/* Background Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1542291026-7eec264c27ff')",
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl">

          <p className="text-white uppercase tracking-[6px] mb-4">
            About Panaz International
          </p>

          <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight">
            30+ Years Of Trust <br /> & Reliability
          </h1>

          <p className="text-gray-200 mt-6 text-lg leading-8">
            For over three decades, Panaz International has remained
            committed to delivering quality footwear with excellence,
            integrity, and customer satisfaction at the center of our service.
          </p>

        </div>

      </div>

      {/* BRAND STORY */}
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div>

            <p className="uppercase tracking-[5px] text-gray-500 mb-3">
              Our Story
            </p>

            <h2 className="text-4xl font-bold leading-tight">
              Building Trust Through Quality & Service
            </h2>

          </div>

          {/* Right */}
          <div>

            <p className="text-gray-600 leading-8">
              Panaz International has built a strong reputation over the years
              by prioritizing customer satisfaction, reliability, and quality products.
              We believe that great footwear goes beyond appearance — it should provide
              comfort, durability, confidence, and long-lasting value.
            </p>

            <p className="text-gray-600 leading-8 mt-6">
              Our commitment to excellent customer service and trustworthy business
              practices has helped us maintain lasting relationships with customers
              across different locations. Every product we offer reflects our dedication
              to quality and professionalism.
            </p>

          </div>

        </div>

      </div>

      {/* PRODUCT VALUES */}
      <div className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-14">

            <p className="uppercase tracking-[5px] text-gray-500 mb-3">
              Our Products
            </p>

            <h2 className="text-4xl font-bold">
              Designed With Excellence
            </h2>

          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Card 1 */}
            <div className="bg-gray-100 p-8 rounded-2xl shadow-md">

              <div className="text-4xl mb-5">👑</div>

              <h3 className="text-2xl font-semibold mb-4">
                Luxury Wear
              </h3>

              <p className="text-gray-600 leading-7">
                Stylish and elegant footwear designed to give you a premium look and feel.
              </p>

            </div>

            {/* Card 2 */}
            <div className="bg-gray-100 p-8 rounded-2xl shadow-md">

              <div className="text-4xl mb-5">🛡️</div>

              <h3 className="text-2xl font-semibold mb-4">
                Durability
              </h3>

              <p className="text-gray-600 leading-7">
                Crafted with long-lasting materials to ensure comfort and reliability.
              </p>

            </div>

            {/* Card 3 */}
            <div className="bg-gray-100 p-8 rounded-2xl shadow-md">

              <div className="text-4xl mb-5">✅</div>

              <h3 className="text-2xl font-semibold mb-4">
                Quality Assured
              </h3>

              <p className="text-gray-600 leading-7">
                Every product is carefully selected to meet high quality standards.
              </p>

            </div>

            {/* Card 4 */}
            <div className="bg-gray-100 p-8 rounded-2xl shadow-md">

              <div className="text-4xl mb-5">💰</div>

              <h3 className="text-2xl font-semibold mb-4">
                Value For Money
              </h3>

              <p className="text-gray-600 leading-7">
                Affordable premium footwear that combines style, quality, and comfort.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* CTA SECTION */}
      <div className="bg-black py-20 text-center px-6">

        <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight">
          Experience Premium Footwear Today
        </h2>

        <p className="text-gray-300 mt-6 max-w-2xl mx-auto leading-8">
          Discover footwear designed with quality, comfort,
          and customer satisfaction in mind.
        </p>

        <button className="mt-8 bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition">
          Shop Now
        </button>

      </div>

    </section>
  )
}

export default About