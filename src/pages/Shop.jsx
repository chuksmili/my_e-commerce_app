import { useState, useEffect } from "react";
// import CategoryFilter from "../components/shop/CategoryFilter";
import  products  from "../data/products";
import ProductGrid from "../components/shop/ProductGrid";
import SearchBar from "../components/shop/SearchBar";
import SortDropdown from "../components/shop/SortDropdown";
import ShopSidebar from "../components/shop/ShopSidebar";





function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("newest");  
  const [selectedSize, setSelectedSize] = useState("All")
  // const [visibleProducts, setVisibleProducts] = useState(12);
  const [page, setPage] = useState(1);

    useEffect(() => {
    setPage(1);
  }, [
    selectedCategory,
    searchQuery,
    selectedSize,
    sortOption
  ]);

    const filteredProducts = products.filter((product) => {
        const matchesCategory =
          selectedCategory === "All" ||
          product.category === selectedCategory;

        const matchesSearch =
          product.name
            .toLowerCase()
            .includes(searchQuery.toLowerCase());


        // Size filter logic
        const matchesSize =
          selectedSize === "All" ||
          product.sizes.includes(selectedSize);

         

          // Return true only if the product matches all filters

        return matchesCategory && matchesSearch && matchesSize;
    });

      


      const categoryCounts = {
        "Men's Half Shoes": products.filter(
          (p) => p.category === "Men's Half Shoes"
        ).length,

        "Men's Slides": products.filter(
          (p) => p.category === "Men's Slides"
        ).length,

        "Men's Native Slippers": products.filter(
          (p) => p.category === "Men's Native Slippers"
        ).length,

        "Men's Sandals": products.filter(
          (p) => p.category === "Men's Sandals"
        ).length,
      };


      // Sorting logic

       const sortedProducts = [...filteredProducts]

          switch (sortOption) {

            case "newest":
              sortedProducts.sort(
                (a, b) =>
                  new Date(b.createdAt) -
                  new Date(a.createdAt)
              )
              break

            case "low-high":
              sortedProducts.sort(
                (a, b) => a.price - b.price
              )
              break

            case "high-low":
              sortedProducts.sort(
                (a, b) => b.price - a.price
              )
              break

            case "a-z":
              sortedProducts.sort(
                (a, b) => a.name.localeCompare(b.name)
              )
              break

            case "z-a":
              sortedProducts.sort(
                (a, b) => b.name.localeCompare(a.name)
              )
              break

            default:
              break
          }

          const productsPerPage = 12;
          const displayedProducts = sortedProducts.slice(0,
            page * productsPerPage
          );
          
         

  return (
    
    <div className="max-w-7xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">
          Shop
        </h1>


        

        {/* Search will go here */}

        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* <div className="grid grid-cols-1 lg:grid-cols-4 gap-8"> */}
          <div className="lg:col-span-1">
            <ShopSidebar
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
              categoryCounts={categoryCounts}
            />
          </div>

          <div className="lg:col-span-3">
            <p className="text-gray-500 mb-6">
              Showing {displayedProducts.length} of {sortedProducts.length} Products
            </p>


            {/* Sort Dropdown will go here */}
              <SortDropdown
                sortOption={sortOption}
                setSortOption={setSortOption}
              />
            {/* Products Grid will go here */}

            <div className="lg:col-span-3">
              <ProductGrid products={displayedProducts} />
            </div>

          </div>

              {
                displayedProducts.length < sortedProducts.length && (
                <div className="text-center mt-10">
                  <button
                    onClick={() =>
                      setPage(prev => prev + 1)
                      }
                      className="
                        px-6
                        py-3
                        bg-black
                        text-white
                        rounded-lg
                        hover:opacity-90
                        transition
                      "
                    >
                      Load More(
                        {sortedProducts.length - displayedProducts.length}
                        remaining
                      )
                    </button>
                  </div>
                )
              }
  

      </div>

    // </div>

  );
}

export default Shop;