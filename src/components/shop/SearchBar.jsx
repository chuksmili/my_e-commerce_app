function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="
          w-full
          border
          rounded-lg
          px-4
          py-3
          outline-none
          focus:ring-2
          focus:ring-black
        "
      />
    </div>
  );
}

export default SearchBar;