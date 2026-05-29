function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Why Choose Us
          </h2>

          <p className="text-gray-600 mt-4">
            We focus on quality, comfort, and customer satisfaction
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="text-xl font-semibold">Fast Delivery</h3>
            <p className="text-gray-600 mt-2">
              Quick and reliable delivery to your location
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <div className="text-4xl mb-4">👟</div>
            <h3 className="text-xl font-semibold">Quality Shoes</h3>
            <p className="text-gray-600 mt-2">
              Premium footwear built for comfort and durability
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-semibold">Easy Ordering</h3>
            <p className="text-gray-600 mt-2">
              Simple WhatsApp-based ordering system
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold">Trusted Service</h3>
            <p className="text-gray-600 mt-2">
              Reliable customer support and secure communication
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}

export default WhyChooseUs