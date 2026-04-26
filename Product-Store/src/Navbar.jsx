import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext, useState } from "react";
import { ThemeContext } from "./theme/ThemeContext";
import { Moon, Sun, ShoppingCart, Menu, X } from "lucide-react";

const Navbar = () => {
  const items = useSelector((state) => state.cart.items);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const { state, dispatch } = useContext(ThemeContext);

  // 🔥 mobile menu state
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-md border-b ${
        state.darkMode
          ? "bg-gray-900/80 text-white border-gray-700"
          : "bg-white/80 text-black border-gray-200"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 md:px-6 py-4">
        {/* LOGO */}
        <Link
          to="/"
          className="text-xl md:text-2xl font-extrabold text-red-600"
        >
          Unix Store
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6">
          <Link className="hover:text-red-500" to="/">
            Home
          </Link>
          <Link className="hover:text-red-500" to="/product">
            Product
          </Link>
          <Link className="hover:text-red-500" to="/about">
            About
          </Link>

          {/* CART */}
          <Link
            to="/cart"
            className="relative flex items-center hover:text-red-500"
          >
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs px-2 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>

          {/* THEME */}
          <button
            onClick={() => dispatch({ type: "TOGGLE_THEME" })}
            className={`p-2 rounded-full border ${
              state.darkMode
                ? "border-gray-600 hover:bg-gray-800"
                : "border-gray-400 hover:bg-red-500 hover:text-white"
            }`}
          >
            {state.darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* MOBILE BUTTON */}
        <div className="md:hidden flex items-center gap-3">
          {/* CART */}
          <Link to="/cart" className="relative">
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs px-2 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>

          {/* MENU TOGGLE */}
          <button onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {/* MOBILE MENU */}
      {open && (
        <div
          className={`md:hidden px-6 py-5 space-y-4 border-t transition-all duration-300 ${
            state.darkMode
              ? "bg-gray-900 border-gray-700 text-white"
              : "bg-white border-gray-200 text-black"
          }`}
        >
          {/* LINKS */}
          <Link
            onClick={() => setOpen(false)}
            to="/"
            className="block py-2 px-3 rounded-md hover:bg-red-500 hover:text-white transition"
          >
            Home
          </Link>

          <Link
            onClick={() => setOpen(false)}
            to="/product"
            className="block py-2 px-3 rounded-md hover:bg-red-500 hover:text-white transition"
          >
            Product
          </Link>

          <Link
            onClick={() => setOpen(false)}
            to="/about"
            className="block py-2 px-3 rounded-md hover:bg-red-500 hover:text-white transition"
          >
            About
          </Link>

          {/* DIVIDER */}
          <div className="border-t my-2 opacity-30"></div>

          {/* THEME BUTTON */}
          <button
            onClick={() => {
              dispatch({ type: "TOGGLE_THEME" });
              setOpen(false);
            }}
            className={`w-full text-left py-2 px-3 rounded-md transition ${
              state.darkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
            }`}
          >
            Toggle Theme
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
