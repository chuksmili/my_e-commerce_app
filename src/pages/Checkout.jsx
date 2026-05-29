import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import BackButton from "../components/BackButton";
// import { CartProvider } from "../context/CartProvider";




function Checkout() {
  const { cartItems, clearCart } = useContext(CartContext)

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")

  // Calculate Total
  const subtotal = cartItems.reduce(
    (total, item) =>
      total + item.price * (item.quantity || 1),
    0
  )

  function handleOrder() {
    // Empty cart validation
    if (cartItems.length === 0) {
      alert("Your cart is empty.")
      return
    }

    // Form validation
    if (!name || !phone || !address) {
      alert("Please fill in all required fields.")
      return
    }

    // Confirmation prompt
    const confirmed = window.confirm(
      "Are you sure you want to send this order to WhatsApp?"
    )

    if (!confirmed) return

    // Build order details
    const orderDetails = cartItems
      .map(
        (item, index) =>
          `${index + 1}. ${item.name}
    Size: ${item.selectedSize || "Not Selected"}
    Quantity: ${item.quantity}
    Price: ₦${(
            item.price * item.quantity
          ).toLocaleString()}`
      )
      .join("%0A%0A")

    const message =
      `Hello Panaz International,%0A%0A` +
      `I would like to place an order:%0A%0A` +
      `${orderDetails}%0A%0A` +
      `Order Total: ₦${subtotal.toLocaleString()}%0A%0A` +
      `Customer Name: ${name}%0A` +
      `Phone Number: ${phone}%0A` +
      `Delivery Address: ${address}`

    const whatsappNumber = "2348183057401"

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${message}`

    window.open(whatsappURL, "_blank")

    clearCart();
  }

  // const clearCart = () => {
  //       setCartItems([]);
  //   }

  return (
    <section className="min-h-screen bg-gray-100 py-6 px-4">

          <BackButton />
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

        {/* ORDER SUMMARY */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-3xl font-bold mb-6">
            Order Summary
          </h2>

          {cartItems.length === 0 ? (
            <p className="text-gray-500">
              No items in cart.
            </p>
          ) : (
            <>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between border-b py-3"
                >
                  <div>
                    <p className="font-medium">
                      {item.name}
                    </p>

                    <p className="text-sm text-gray-500">
                      Quantity: {item.quantity || 1}
                    </p>
                  </div>

                  <p className="font-semibold">
                    ₦
                    {(
                      item.price *
                      (item.quantity || 1)
                    ).toLocaleString()}
                  </p>
                </div>
              ))}

              <div className="flex justify-between mt-6 text-xl font-bold">
                <span>Total</span>
                <span>
                  ₦{subtotal.toLocaleString()}
                </span>
              </div>
            </>
          )}
        </div>

        {/* CUSTOMER INFORMATION */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h1 className="text-3xl font-bold mb-6">
            Customer Information
          </h1>

          <div className="space-y-5">

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              className="w-full border p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
              }
              className="w-full border p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />

            <textarea
              placeholder="Delivery Address"
              value={address}
              onChange={(e) =>
                setAddress(e.target.value)
              }
              className="w-full border p-4 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-black"
            />

            <button
              onClick={handleOrder}
              className="bg-green-600 text-white w-full py-4 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Send Order To WhatsApp
            </button>

            {/* <button
              onClick={clearCart}
              className="bg-red-600 text-white w-full py-4 rounded-lg hover:bg-red-700 transition duration-300"
            >
              Clear Cart
            </button> */}

            <p className="text-sm text-gray-500 text-center">
              After submitting your order, our team
              will contact you to confirm product
              availability, delivery details and
              payment arrangements.
            </p>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Checkout