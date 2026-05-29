// import { useContext } from 'react'
// import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'


function ProductCard({ product }) {

    
    
  return (
    <div className="bg-white rounded-2xl shadow-md 
      overflow-hidden transition-all
      duration-300 hover:translate-y-2 hover:shadow-xl">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover"
          />
        </Link>

      <div className="p-5">
        <Link to={`/product/${product.id}`}>
          <h2 className="text-xl font-semibold">
            {product.name}
          </h2>
        </Link>

        <p className="text-gray-600 mt-2">
          {product.price}
        </p>

        <Link
          to={`/product/${product.id}`}
          className="block w-full bg-black text-white text-center py-3 rounded-lg"
        >
          View Details
        </Link>

      </div>
    </div>
  )
}

export default ProductCard