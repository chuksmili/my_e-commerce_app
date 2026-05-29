import { useNavigate } from "react-router-dom"
import BackButton from "../components/BackButton";
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

function Cart() {

  const { cartItems, setCartItems, increaseQuantity, decreaseQuantity } = useContext(CartContext)
  const navigate = useNavigate()

  function removeItem(index) {
    const updatedCart = cartItems.filter((item, i) => i !== index)
    setCartItems(updatedCart)
  }

  const totalItems = cartItems.reduce(
  (total, item) => total + item.quantity,
  0
);

  const subtotal = cartItems.reduce((total, item) => {
  return total + item.price * item.quantity
}, 0)

  return (
    <section className="min-h-screen bg-gray-100 py-6">

      <div className="max-w-6xl mx-auto px-6">
        
        <BackButton />

        <h1 className="text-4xl font-bold mb-8">
          Shopping Cart
        </h1>

        {totalItems === 0 ? (

          <div className="bg-white p-10 rounded-2xl shadow-md text-center">
            <h2 className="text-2xl font-semibold">
              Your cart is empty
            </h2>

            <p className="text-gray-500 mt-3">
              Add some products to continue shopping.
            </p>
          </div>

        ) : (

          <div className="space-y-6">

            {cartItems.map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-5 flex items-center justify-between"
              >

                <div className="flex items-center gap-5">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-xl"
                  />

                  <div>
                    <h2 className="text-xl font-semibold">
                      {item.name}
                    </h2>

                     <span> Quantity: {item.quantity}</span>

                    <p className="text-gray-500">
                      Size: {item.selectedSize}
                    </p>

                    <p className="text-gray-500 mt-2">
                      Unit Price: {item.price}
                    </p>
                  </div>

                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2">

                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="bg-gray-200 px-2 py-1 rounded"
                  >
                    -
                  </button>

                 

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="bg-gray-200 px-2 py-1 rounded"
                  >
                    +
                  </button>

                

                <button
                  onClick={() => removeItem(index)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                >
                  Remove
                </button>

                </div>

              </div>

            ))}

            {/* Cart Summary */}

            <div className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-between">

              <div>
                <h2 className="text-2xl font-bold">
                  Total Items: {totalItems}
                </h2>

                <h2 className="text-2xl font-bold mt-8">
                 Total: ₦{subtotal.toLocaleString()}
                </h2>

              </div>

              <button 
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
                onClick={() => navigate("/checkout")}
              >
                Proceed to Order
              </button>

            </div>

          </div>

        )}

      </div>

    </section>
  )
}

export default Cart