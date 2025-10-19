import { useOrder } from "../../../context/OrderContext";
import { toast } from "react-toastify";

interface MenuCardProps {
  name: string;
  price: string;
}

export default function MenuCard({ name, price }: MenuCardProps) {
  const { addOrder } = useOrder();

  // Convert price string to number for addOrder
  const handleClick = () => {
    const priceNumber = Number(price.replace(/[^\d.]/g, ""));
    addOrder({ name, price: priceNumber });
    toast.success(`${name} added to order`);
  };

  return (
    <div
      className="p-4 border rounded-lg shadow hover:shadow-lg cursor-pointer transition"
      onClick={handleClick}
    >
      <h3 className="font-semibold">{name}</h3>
      <p className="text-sm text-gray-500">{price}</p>
      <p className="text-xs text-green-600 mt-2">Click to add</p>
    </div>
  );
}
