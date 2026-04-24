import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { SettingsContext } from "./context/SettingsContext";
import { Moon, Sun, ShoppingCart } from "lucide-react";

const Navbar = () => {
  const items = useSelector((state) => state.cart.items);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const { state, dispatch } = useContext(SettingsContext);

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-md border-b ${
        state.theme === "dark"
          ? "bg-gray-900/80 text-white border-gray-700"
          : "bg-white/80 text-black border-gray-200"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <Link
          to="/"
          className="text-2xl font-extrabold text-red-600 tracking-wide hover:scale-105 transition"
        >
          Parwan Store
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="relative font-medium hover:text-red-500 transition"
          >
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-500 transition-all hover:w-full"></span>
          </Link>

          <Link
            to="product"
            className="relative font-medium hover:text-red-500 transition"
          >
            Product
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-500 transition-all hover:w-full"></span>
          </Link>
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

          <button
            onClick={() => dispatch({ type: "TOGGLE_THEME" })}
            className="p-2 rounded-full border hover:border-transparent cursor-pointer border-gray-400 hover:bg-red-500 hover:text-white transition"
          >
            {state.theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
