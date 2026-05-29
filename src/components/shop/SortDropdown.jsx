function SortDropdown({ sortOption, setSortOption }) {
  return (
    <div className="mb-6">
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="
          border
          rounded-lg
          px-4
          py-2
          bg-white
          outline-none
        "
      >
        <option value="newest">
          Newest First
        </option>

        <option value="low-high">
          Price: Low to High
        </option>

        <option value="high-low">
          Price: High to Low
        </option>

        <option value="a-z">
          Name: A-Z
        </option>

        <option value="z-a">
          Name: Z-A
        </option>
      </select>
    </div>
  );
}

export default SortDropdown;