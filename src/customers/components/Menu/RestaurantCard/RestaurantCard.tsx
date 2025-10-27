import { Link } from "react-router-dom";

interface RestaurantCardProps {
  id: string;
  name: string;
}

const RestaurantCard = ({ id, name }: RestaurantCardProps) => {
  return (
    <Link
      to={`/restaurant/${id}`}
      className={
        "group block w-full p-4 bg-white rounded-lg shadow overflow-hidden transform-gpu transition-transform duration-200 ease-out " +

        "sm:hover:shadow-lg sm:hover:scale-105 "
        }
      aria-label={`Open ${name} restaurant page`}
    >
      <div className="min-h-[72px] flex flex-col justify-center">
        <h3 className="text-base sm:text-sm font-semibold text-black transition sm:group-hover:text-orange-500">{name}</h3>
        <p className="text-sm sm:text-xs text-black/80 transition sm:group-hover:text-orange-500">Click to view menu</p>
      </div>
    </Link>
  );
};

export default RestaurantCard;
