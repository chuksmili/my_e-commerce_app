function Hero() {
  return (
    <section className="bg-gray-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>
          <p className="text-gray-500 uppercase tracking-widest mb-4">
            Premium Footwear Collection
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-black leading-tight">
            Step Into <br /> Style
          </h1>

          <p className="text-gray-600 mt-6 text-lg">
            Discover quality sneakers, slides, and luxury footwear
            designed for comfort and confidence.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
              Shop Now
            </button>

            <button className="border border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition">
              Explore
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
            alt="Sneaker"
            className="rounded-2xl shadow-2xl w-full max-w-lg"
          />
        </div>

      </div>
    </section>
  )
}

export default Hero