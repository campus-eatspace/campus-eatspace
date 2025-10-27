import { useNavigate } from "react-router-dom";

const categories = ["All Menu", "Drinks", "Food", "Pastries", "Parfait"];

export default function CategoryList() {
  const navigate = useNavigate();

  const handleClick = (category: string) => {
    if (category === "All Menu") {
      
      return;
    }
    navigate("/coming-soon");
  };

  return (
    <div className="my-4">
      {/* Desktop Layout */}
      <div className="hidden sm:flex gap-2">
        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => handleClick(cat)}
            className={`px-4 py-2 rounded-lg text-sm transform transition-all duration-200 hover:bg-green-200 hover:text-orange-500 ease-out ${
              i === 0
                ? "bg-green-400 text-white"
                : "bg-white border hover:bg-green-200 hover:scale-[1.2]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Mobile Layout with Horizontal Scroll */}
      <div className="sm:hidden">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => handleClick(cat)}
              className={`px-3 py-2 rounded-lg text-xs whitespace-nowrap transform transition-all duration-200 hover:bg-green-200 hover:text-orange-500 ease-out flex-shrink-0 ${
                i === 0
                  ? "bg-green-400 text-white"
                  : "bg-white border hover:bg-green-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
