import { Link } from "react-router-dom";

interface RestaurantCardProps {
  id: string;
  name: string;
}

const RestaurantCard = ({ id, name }: RestaurantCardProps) => {
  return (
    <Link
      to={`/restaurant/${id}`}
      className="group block p-4 bg-white rounded-lg shadow hover:shadow-lg hover:scale-[1.1] transition"
    >
      <h3 className="text-sm font-semibold text-black transition group-hover:text-orange-500">{name}</h3>
      <p className="text-xs text-black transition group-hover:text-orange-500">Click to view menu</p>
    </Link>
  );
};

export default RestaurantCard;
