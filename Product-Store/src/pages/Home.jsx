import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";

import About from "../components/About";
import DeliveryService from "../components/DeliveryService";
import FeaturedProducts from "../components/FeaturedProducts";
import CustomerFeedback from "../components/CustomerFeedback";

const Home = () => {
  const navigate = useNavigate();
  const { state } = useContext(ThemeContext);

  return (
    <div
      className={`transition-all duration-300 ${
        state.darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* HERO */}
      <div className="relative mb-14 overflow-hidden shadow-xl">
        <img
          src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a"
          alt="store"
          className="w-full h-[420px] object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Welcome to <span className="text-red-500">Our Store</span>
          </h1>

          <p className="text-gray-200 mt-4 max-w-xl text-lg">
            Discover high-quality products with the best prices.
          </p>

          <div className="mt-6 flex gap-4">
            <button
              onClick={() => navigate("product")}
              className="bg-red-600 hover:bg-red-700 cursor-pointer text-white px-6 py-3 rounded-xl shadow-lg transition"
            >
              Shop Now
            </button>

            <button
              onClick={() => navigate("about")}
              className="border cursor-pointer border-white text-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* SECTIONS */}
      <About />
      <DeliveryService />
      <FeaturedProducts />
      <CustomerFeedback />
    </div>
  );
};

export default Home;