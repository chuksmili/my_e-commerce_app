import products from "../data/products";
import ProductCard from "./ProductCard";

function NewArrivals() {
  // 1. Filter real new arrivals (last 30 days)
  const newArrivals = products
    .filter((product) => {
      const createdDate = new Date(product.createdAt);
      const now = new Date();

      const differenceInDays =
        (now - createdDate) / (1000 * 60 * 60 * 24);

      return differenceInDays <= 60;
    })

    // 2. Sort newest first (VERY IMPORTANT)
    .sort(
      (a, b) =>
        new Date(b.createdAt) - new Date(a.createdAt)
    )

    // 3. Limit to 4 products for homepage
    .slice(0, 4);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gray-500 uppercase tracking-widest">
            Fresh Drops
          </p>

          <h2 className="text-4xl font-bold mt-2">
            New Arrivals
          </h2>

          <p className="text-gray-600 mt-4">
            Discover the latest additions to our collection
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {newArrivals.length > 0 ? (
            newArrivals.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                showBadge="new"
              />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No new arrivals yet.
            </p>
          )}

        </div>

      </div>
    </section>
  );
}

export default NewArrivals;




// import products from "../data/products"
// import ProductCard from "./ProductCard"

// function NewArrivals() {

//     const newArrivals = products.filter((product) => {

//   const createdDate =
//     new Date(product.createdAt);

//   const now = new Date();

//   const differenceInDays =
//     (now - createdDate) /
//     (1000 * 60 * 60 * 24);

//   return differenceInDays <= 30;
// });


//   return (
//     <section className="py-20 bg-white">

//       <div className="max-w-7xl mx-auto px-6">

//         {/* Header */}
//         <div className="text-center mb-12">
//           <p className="text-gray-500 uppercase tracking-widest">
//             Fresh Drops
//           </p>

//           <h2 className="text-4xl font-bold mt-2">
//             New Arrivals
//           </h2>

//           <p className="text-gray-600 mt-4">
//             Discover the latest additions to our collection
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

//           {products.slice(0, 4).map((product) => (
//             <div key={product.id} className="relative">

//               {/* NEW badge */}
//               <span className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full z-10">
//                 NEW
//               </span>

//               <ProductCard
//                 key={product.id}
//                 product={product}
//               />

//             </div>
//           ))}

//         </div>

//       </div>

//     </section>
//   )
// }

// export default NewArrivals