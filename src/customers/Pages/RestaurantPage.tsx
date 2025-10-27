import { useParams } from "react-router-dom";
import Sidebar from "../components/Layout/Sidebar/Sidebar";
import MenuCard from "../components/Menu/MenuCard/MenuCard";
import OrderSummary from "../components/Layout/OrderSummary/OrderSummary";
// import { useOrder } from "../context/OrderContext";
// import { toast } from "react-toastify";

export default function RestaurantPage() {
  const { id } = useParams();
  // const { addOrder } = useOrder();

  
  const menus: Record<string, { name: string; price: number }[]> = {
    "double-portion": [
      { name: "Jollof Rice", price: 10 },
      { name: "Fried Rice", price: 12 },
      { name: "Chicken", price: 8 },
    ],
    numbers: [
      { name: "Pizza", price: 15 },
      { name: "Burger", price: 9 },
      { name: "Shawarma", price: 11 },
    ],
    "manna-palace": [
      { name: "Pounded Yam", price: 13 },
      { name: "Egusi Soup", price: 14 },
      { name: "Goat Meat", price: 16 },
    ],
  };

  const menuItems = menus[id || ""] || [];

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />

      <main className="flex-1 p-4 md:p-6 bg-gray-50 flex flex-col">
        <div>
          <h1 className="text-2xl font-bold mb-4">Menu for {id}</h1>

          {menuItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {menuItems.map((item, index) => (
                <MenuCard
                  key={index}
                  name={item.name}
                  price={`$${item.price}`}
                />
              ))}
            </div>
          ) : (
            <p>No menu available for this restaurant.</p>
          )}
        </div>
      </main>

      <aside className="w-full md:w-72 p-4 md:p-6 bg-white md:border-l border-t md:border-t-0">
        <OrderSummary />
      </aside>
    </div>
  );
}
