import { useParams } from "react-router-dom"
import products from "../data/products"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { useState } from "react"
import BackButton from "../components/BackButton";


function ProductDetails() {

  const [selectedSize, setSelectedSize] = useState(null)
  console.log("Selected Size:", selectedSize)
  const { id } = useParams()

  const { addToCart } = useContext(CartContext)

  const product = products.find(
    (item) => item.id === Number(id)
  )

  if (!product) {
    return (
      <div className="text-center py-20">
        Product not found
      </div>
    )
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-6">
        <BackButton />
      <div className="grid md:grid-cols-2 gap-12">

        {/* Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-2xl shadow-lg"
          />
        </div>

        {/* Details */}
        <div>

          <span className="text-sm text-gray-500 uppercase">
            {product.category}
          </span>

          <h1 className="text-4xl font-bold mt-2">
            {product.name}
          </h1>

          <p className="text-2xl font-semibold mt-4">
            ₦{product.price.toLocaleString()}
          </p>

          <p className="text-gray-600 mt-6 leading-8">
            {product.description}
          </p>

          {/* Sizes */}
          <div className="mt-8">

            <h3 className="font-semibold mb-3">
              Available Sizes
            </h3>

            <div className="flex gap-3 flex-wrap">

            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 rounded-lg border transition
                  ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "bg-white"
                  }`}
              >
                {size}
              </button>
            ))}

          </div>

          </div>

          {/* Button */}
          <button
            onClick={() => {
                if (!selectedSize) {
                  alert("Please select a size")
                  return
                }
                  
                addToCart({
                  ...product,
                  selectedSize,
                })
              }}
            className="mt-10 bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition"
          >
            Add To Cart
          </button>

        </div>

      </div>

    </section>
  )
}

export default ProductDetails