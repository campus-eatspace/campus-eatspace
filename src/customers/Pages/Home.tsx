import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
    
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
        <div className="flex items-center justify-between px-6 py-3 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-gray-200/50">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Campus Eats" className="w-8 h-8 object-contain" />
            <span className="font-semibold text-lg">Campus Eats</span>
          </Link>

          <nav className="flex items-center gap-4">
            <Link to="/about" className="px-5 py-2 rounded-full bg-white hover:bg-orange-400 hover:text-white transition-all duration-300 shadow">
              About Us
            </Link>
            <Link to="/order" className="px-5 py-2 rounded-full bg-white hover:bg-orange-400 hover:text-white transition-all duration-300 shadow">
              Order Now
            </Link>
            <Link to="/register" className="px-5 py-2 rounded-full bg-white hover:bg-orange-400 hover:text-white transition-all duration-300 shadow">
              Register
            </Link>
            <Link to="/login" className="px-5 py-2 rounded-full bg-white hover:bg-orange-400 hover:text-white transition-all duration-300 shadow">
              Login
            </Link>
          </nav>
        </div>
      </header>

      <section
        className="relative flex flex-col items-center justify-center text-center min-h-[90vh] pt-24 pb-16"
        style={{ backgroundImage: "url('/cafeteria-bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-white/80 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="italic text-orange-500 font-signature">From</span>{" "}
            <span className="text-gray-900">Cafeteria</span>{" "}
            <span className="text-orange-500 italic font-signature">To</span>{" "}
            <span className="text-gray-900">Crib</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl max-w-2xl mx-auto text-gray-700">
            Order from DP, Manna Palace, Foodmart, Mimi’s, National Kitchen and more — delivered straight to your door.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 bg-gradient-to-b from-gray-50 to-white text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Why <span className="text-orange-500">We</span> Exist
          </h2>

          <div className="relative bg-black text-white p-10 rounded-3xl shadow-lg">
            <img
              src="/campus-bg.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-30 rounded-3xl"
            />
            <div className="relative z-10 space-y-4 text-lg leading-relaxed">
              <p>
                We know campus life is hectic — finding time to eat shouldn’t be a struggle.
              </p>
              <p>
                Campus Eats saves you time and energy by delivering your favorite meals straight
                from your cafeteria to your location.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {[
          { title: "Fast & Efficient", desc: "Get your food delivered hot and on time. No long waits, no stress.", icon: "⚡" },
          { title: "Wide Selection", desc: "From Numbers to DP, Manna Palace, National Kitchen, and more — all in one place.", icon: "🍽️" },
          { title: "Seamless Experience", desc: "Simple navigation, quick checkout, and mobile-friendly ordering.", icon: "📱" },
          { title: "Secure & Reliable", desc: "Register, log in, and pay with confidence. Your privacy is our priority.", icon: "🔒" },
        ].map((feature, i) => (
          <div
            key={i}
            className="bg-black text-white rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300 border border-gray-800"
          >
            <h3 className="font-semibold text-lg mb-2">{feature.icon} {feature.title}</h3>
            <p className="text-sm text-gray-300">{feature.desc}</p>
          </div>
        ))}
      </section>

      <section className="px-6 py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-12">
          How <span className="text-orange-500">it</span> Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-black text-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-green-400 mb-2">Browse</h3>
            <p>Explore menus from your favorite campus restaurants.</p>
          </div>

          <div className="bg-gray-800 text-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-green-400 mb-2">Order</h3>
            <p>Choose your meal, customize, and checkout in seconds.</p>
          </div>

          <div className="bg-red-900 text-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-green-400 mb-2">Enjoy</h3>
            <p>Get it delivered straight to your hostel, class, or hangout spot.</p>
          </div>
        </div>

        <Link
          to="/order"
          className="inline-block mt-12 text-orange-500 font-semibold hover:underline hover:scale-105 transition-transform"
        >
          Get Started →
        </Link>
      </section>


      <footer className="bg-black text-white py-10 text-center space-y-4">
        <img src="/logo.png" alt="Campus Eats" className="w-10 h-10 mx-auto" />
        <p className="font-semibold text-lg">CampusEats</p>
        <p className="italic text-orange-500">From Cafeteria to Crib</p>

        <div className="flex justify-center gap-6 mt-4 text-gray-400">
          <a href="#" className="hover:text-white">Twitter</a>
          <a href="#" className="hover:text-white">Instagram</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
        </div>

        <div className="text-sm text-gray-500">
          <Link to="/terms" className="hover:text-white">Terms and Conditions</Link>
          <p className="mt-2">© {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}
