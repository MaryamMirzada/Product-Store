import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { ThemeContext } from "./theme/ThemeContext";
import { Moon, Sun, ShoppingCart } from "lucide-react";

const Navbar = () => {
  const items = useSelector((state) => state.cart.items);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const { state, dispatch } = useContext(ThemeContext);

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-md border-b ${
        state.darkMode
          ? "bg-gray-900/80 text-white border-gray-700"
          : "bg-white/80 text-black border-gray-200"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-red-600 tracking-wide hover:scale-105 transition"
        >
          Parwan Store
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-6">
          <Link to="/" className="font-medium hover:text-red-500 transition">
            Home
          </Link>

          <Link
            to="product"
            className="font-medium hover:text-red-500 transition"
          >
            Product
          </Link>

          <Link
            to="about"
            className="font-medium hover:text-red-500 transition"
          >
            About
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative flex items-center gap-1 hover:text-red-500 transition"
          >
            <ShoppingCart size={20} />

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs px-2 rounded-full shadow">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Toggle Theme */}
          <button
            onClick={() => dispatch({ type: "TOGGLE_THEME" })}
            className={`p-2 rounded-full border cursor-pointer transition ${
              state.darkMode
                ? "border-gray-600 hover:bg-gray-800 text-white"
                : "border-gray-400 hover:bg-red-500 hover:text-white"
            }`}
          >
            {state.darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
