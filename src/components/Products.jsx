import products from "../data/products";
import ProductCard from "./ProductCard";
import { HOME_LIMITS } from "../constants/homeConfig";

function FeaturedProducts() {

  const featuredProducts = products
    .filter((p) => p.featured)
    .sort((a, b) => a.featuredOrder - b.featuredOrder)
    .slice(0, HOME_LIMITS.featured);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">
          Featured Products
        </h2>
        <p className="text-gray-600 mt-3">
          Explore our premium footwear collection
        </p>
      </div>

      {featuredProducts.length === 0 ? (
        <p className="text-center text-gray-500">
          No featured products available
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}

    </section>
  );
}

export default FeaturedProducts;





// import { useState } from "react"
// import products from "../data/products"
// import ProductCard from "./ProductCard"
// import { HOME_LIMITS } from "../constants/homeConfig"


// function Products() {
//   const [searchTerm, setSearchTerm] = useState("")
//   const [selectedCategory, setSelectedCategory] = useState("All")


//   const categories = ["All",
//      "Men's Half Shoes",
//       "Men's Slides",
//        "Men's Native Slippers",
//         "Men's Sandals"
//       ]


//       // Filter products based on search term and selected category
//   const filteredProducts = products.filter((product) => {
//     const matchesCategory =
//     product.name.toLowerCase().includes(searchTerm.toLowerCase())

//     const matchesSearch =
//     selectedCategory === "All" ||
//      product.category === selectedCategory

//     return matchesCategory && matchesSearch
// })

//   const featuredProducts = products
//   .filter((p) => p.featured)
//   .sort((a, b) => a.featuredOrder - b.featuredOrder)
//   .slice(0, HOME_LIMITS.featured);
    

// return (
//     <section className="max-w-7xl mx-auto px-6 py-16">

//       {/* Heading */}
//       <div className="text-center mb-10">
//         <h2 className="text-4xl font-bold">
//           Featured Products
//         </h2>

//         <p className="text-gray-600 mt-3">
//           Explore our premium footwear collection
//         </p>
//       </div>

//       {/* Search */}
//       <div className="max-w-md mx-auto mb-10">
//         <input
//           type="text"
//           placeholder="Search footwear..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-black"
//         />
//       </div>

//       {/* Category Filter */}
//       <div className="flex flex-wrap justify-center gap-3 mb-8">

//         {categories.map((category) => (
//           <button
//             key={category}
//             onClick={() => setSelectedCategory(category)}
//             className={`px-4 py-2 rounded-lg border ${
//             selectedCategory === category
//             ? "bg-black text-white"
//             : "bg-white"
//             }`}
//           >
//             {category}
//           </button>
//   ))}

// </div>


//       {/* Product Grid */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//         {featuredProducts.map((product) => (
//           <ProductCard
//             key={product.id}
//             product={product}
//           />
//         ))}
//       </div>

//     </section>
//   )
// }

// export default Products