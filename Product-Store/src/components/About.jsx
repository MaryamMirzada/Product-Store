import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";

const About = () => {
  const navigate = useNavigate();
  const { state } = useContext(ThemeContext);

  return (
    <div
      className={`my-20 px-4 lg:px-20 transition-all duration-300 ${
        state.darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
      id="about"
    >
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* IMAGE */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a"
            alt="about store"
            className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
          />

          <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur px-4 py-2 rounded-xl shadow">
            <p className="text-sm font-bold text-red-600">
              Trusted Online Store
            </p>
          </div>
        </div>

        {/* TEXT */}
        <div>
          <h2 className="text-4xl font-extrabold text-red-600 mb-4">
            About Our Store
          </h2>

          <p
            className={`leading-relaxed mb-6 ${
              state.darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            We are a modern e-commerce platform dedicated to delivering
            high-quality products with the best prices.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div
              className={`text-center p-3 rounded-lg ${
                state.darkMode ? "bg-gray-900" : "bg-gray-100"
              }`}
            >
              <h3 className="text-xl font-bold text-red-600">10K+</h3>
              <p className="text-sm text-gray-500">Products</p>
            </div>

            <div
              className={`text-center p-3 rounded-lg ${
                state.darkMode ? "bg-gray-900" : "bg-gray-100"
              }`}
            >
              <h3 className="text-xl font-bold text-red-600">5K+</h3>
              <p className="text-sm text-gray-500">Customers</p>
            </div>

            <div
              className={`text-center p-3 rounded-lg ${
                state.darkMode ? "bg-gray-900" : "bg-gray-100"
              }`}
            >
              <h3 className="text-xl font-bold text-red-600">24/7</h3>
              <p className="text-sm text-gray-500">Support</p>
            </div>
          </div>

          <button
            onClick={() => navigate("about")}
            className="bg-red-600 cursor-pointer hover:bg-red-700 text-white px-6 py-3 rounded-xl shadow transition"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
