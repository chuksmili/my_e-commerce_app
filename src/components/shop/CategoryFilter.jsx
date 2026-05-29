import { categories } from "../../constants/categories";

function CategoryFilter({
  selectedCategory,
  setSelectedCategory,
  categoryCounts,
}) {



  return (
    <div className="flex gap-3 overflow-x-auto pb-2 mb-8">

      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`
            whitespace-nowrap
            px-4
            py-2
            rounded-full
            border
            transition

            ${
              selectedCategory === category
                ? "bg-black text-white"
                : "bg-white"
            }
          `}
        >
          {category}
          {category !== "ALL" &&
            ` (${categoryCounts[category] || 0})`}
        </button>
      ))}

    </div>
  );
}

export default CategoryFilter;