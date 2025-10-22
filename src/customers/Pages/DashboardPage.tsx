import Sidebar from "../components/Layout/Sidebar/Sidebar";
import Searchbar from "../components/Layout/Searchbar/Searchbar";
import CategoryList from "../components/Menu/CategoryList/CategoryList";
import RestaurantCard from "../components/Menu/RestaurantCard/RestaurantCard";
import OrderSummary from "../components/Layout/OrderSummary/OrderSummary";
import Footer from "../components/Layout/Footer/Footer";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      
      <Sidebar />

      
      <main className="flex-1 p-6 bg-gray-50 flex flex-col">
        <div>
          <Searchbar />
          <CategoryList />

          <section className="mt-6">
          <h2 className="flex justify-between items-center mb-4">
            <span className="font-semibold text-lg">Restaurants</span>
            <button className="text-orange-500 hover:underline">View All</button>
          </h2>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <RestaurantCard id="double-portion" name="Double Portion" />
            <RestaurantCard id="numbers" name="Numbers" />
            <RestaurantCard id="manna-palace" name="Manna Palace" />
          </div>
          </section>
        </div>

        <div className="mt-auto">
          <Footer />
        </div>
      </main>

      
      <aside className="w-72 p-6 bg-white border-l">
        <OrderSummary />
      </aside>
    </div>
  );
}
