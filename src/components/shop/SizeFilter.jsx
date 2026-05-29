

const sizes = [
  "All",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46"
]

function SizeFilter({
  selectedSize,
  setSelectedSize
}) {
  return (
    <div className="mb-6">

      <h3 className="font-semibold mb-3">
        Size
      </h3>

      <div className="flex flex-wrap gap-2">

        {sizes.map((size) => (
          <button
            key={size}
            onClick={() =>
              setSelectedSize(size)
            }
            className={`
              px-3 py-2 border rounded

              ${
                selectedSize === size
                  ? "bg-black text-white"
                  : ""
              }
            `}
          >
            {size}
          </button>
        ))}

      </div>
    </div>
  )
}

export default SizeFilter
