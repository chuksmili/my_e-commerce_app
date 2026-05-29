function Testimonials() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            What Our Customers Say
          </h2>

          <p className="text-gray-600 mt-4">
            Real feedback from happy buyers
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
            <p className="text-gray-700">
              “The sneakers are super comfortable and delivery was fast.
              I’ll definitely order again!”
            </p>

            <h4 className="mt-4 font-semibold">
              — David, Lagos
            </h4>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
            <p className="text-gray-700">
              “Quality is top-notch. Exactly what I saw online is what I got.
              Very reliable store.”
            </p>

            <h4 className="mt-4 font-semibold">
              — Amina, Abuja
            </h4>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
            <p className="text-gray-700">
              “Ordering via WhatsApp was very easy. Customer service is great.”
            </p>

            <h4 className="mt-4 font-semibold">
              — Tunde, Port Harcourt
            </h4>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Testimonials