import Sidebar from "../components/Layout/Sidebar/Sidebar";
import Searchbar from "../components/Layout/Searchbar/Searchbar";
import CategoryList from "../components/Menu/CategoryList/CategoryList";
import MenuCard from "../components/Menu/MenuCard/MenuCard";
import RestaurantCard from "../components/Menu/RestaurantCard/RestaurantCard";
import OrderSummary from "../components/Layout/OrderSummary/OrderSummary";
import Footer from "../components/Layout/Footer/Footer";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      
      <Sidebar />

    
      <main className="flex-1 p-6 bg-gray-50">
        <Searchbar />
        <CategoryList />

        <section className="mt-6">
          <h2 className="flex justify-between items-center mb-4">
            <span className="font-semibold">Menu</span>
            <button className="text-orange-500">View All</button>
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <MenuCard title="Pizza" price="$12" />
            <MenuCard title="Burger" price="$8" />
          </div>
        </section>

        <section className="mt-6">
          <h2 className="flex justify-between items-center mb-4">
            <span className="font-semibold">Restaurants</span>
            <button className="text-orange-500">View All</button>
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <RestaurantCard name="Double Portion" />
            <RestaurantCard name="Numbers" />
            <RestaurantCard name="Manna Palace" />
          </div>
        </section>

        <Footer />
      </main>

    
      <aside className="w-72 p-6">
        <OrderSummary />
      </aside>
    </div>
  );
}
