import { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import SizeFilter from "./SizeFilter";

function ShopSidebar({
  selectedCategory,
  setSelectedCategory,
  selectedSize,
  setSelectedSize,
  categoryCounts,
}) {

const [showCategories, setShowCategories] = useState(false);

const [showSizes, setShowSizes] = useState(false);



  return (
    <div>

      <div>

  <button
    onClick={() =>
      setShowCategories(
        !showCategories
      )
    }
    className="
      w-full
      flex
      justify-between
      items-center
      font-semibold
      mb-3
    "
  >
    Categories

    <span>
      {showCategories ? "▲" : "▼"}
    </span>
  </button>

  {showCategories && (
    <CategoryFilter
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
      categoryCounts={categoryCounts}
    />
  )}

</div>

     <div>

  <button
    onClick={() =>
      setShowSizes(!showSizes)
    }
    className="
      w-full
      flex
      justify-between
      items-center
      font-semibold
      mb-3
    "
  >
    Sizes

    <span>
      {showSizes ? "▲" : "▼"}
    </span>
  </button>

  {showSizes && (
    <SizeFilter
      selectedSize={selectedSize}
      setSelectedSize={setSelectedSize}
    />
  )}

</div>

    </div>
  );
}

export default ShopSidebar;