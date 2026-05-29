import { useState } from "react"
import { CartContext } from "./CartContext"
import { useEffect } from "react"

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try{
    const storedCart = localStorage.getItem("cartItems")
    return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error("Error parsing cart items from localStorage:", error)
      return []
    }
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
  }, [cartItems]);
  

const addToCart = (product) => {

  const existingItem = cartItems.find(
    (item) =>
      item.id === product.id &&
      item.selectedSize === product.selectedSize
  )

  if (existingItem) {
    setCartItems(
      cartItems.map((item) =>
        item.id === product.id &&
        item.selectedSize === product.selectedSize
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    )
  } else {
    setCartItems([
      ...cartItems,
      {
        ...product,
        quantity: 1,
      },
    ])
  }
}

const increaseQuantity = (id) => {
  setCartItems(
    cartItems.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    )
  )
}

const decreaseQuantity = (id) => {
  setCartItems(
    cartItems
      .map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
      .filter((item) => item.quantity > 0)
  )
}

        const clearCart = () => {
          setCartItems([]);
        }
      

  // function addToCart(product) {
  //   setCartItems((prev) => [...prev, product])
  // }

  return (
    <CartContext.Provider value={{ cartItems,
      addToCart,
      setCartItems,
      increaseQuantity,
      decreaseQuantity,
      clearCart
      }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider