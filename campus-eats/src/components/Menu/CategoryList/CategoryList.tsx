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
    <div className="flex gap-2 my-4">
      {categories.map((cat, i) => (
        <button
          key={i}
          onClick={() => handleClick(cat)}
          className={`px-4 py-2 rounded-lg text-sm ${
            i === 0
              ? "bg-green-400 text-white"
              : "bg-white border hover:bg-gray-100"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
