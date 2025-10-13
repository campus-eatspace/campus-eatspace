import { Link } from "react-router-dom";

interface RestaurantCardProps {
  id: string;
  name: string;
}

const RestaurantCard = ({ id, name }: RestaurantCardProps) => {
  return (
    <Link
      to={`/restaurant/${id}`}
      className="block p-4 bg-white rounded-lg shadow hover:shadow-lg transition"
    >
      <h3 className="font-semibold">{name}</h3>
      <p className="text-sm text-gray-500">Click to view menu</p>
    </Link>
  );
};

export default RestaurantCard;
