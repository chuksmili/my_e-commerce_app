import ProductCard from "../ProductCard";

function ProductGrid({ products }) {
  return (
    <div
      className="
        grid
        grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-4
      "
    >
      {
        products.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <h2 className="text-xl font-semibold">
              No products found
            </h2>

            <p className="text-gray-500 mt-2">
              Try a different search or category.
            </p>
          </div>
        ) : (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        )
      }
    </div>
  );
}

export default ProductGrid;