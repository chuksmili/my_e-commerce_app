function PromoBanner() {
  return (
    <section
      className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1542291026-7eec264c27ff')",
      }}
    >

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">

        <p className="text-white uppercase tracking-[6px] mb-4">
          New Season Collection
        </p>

        <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight">
          Step Into <br /> Luxury
        </h1>

        <p className="text-gray-200 mt-6 max-w-2xl mx-auto text-lg">
          Premium footwear designed for comfort, confidence,
          and everyday style.
        </p>

        <button className="mt-8 bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition">
          Shop Collection
        </button>

      </div>

    </section>
  )
}

export default PromoBanner