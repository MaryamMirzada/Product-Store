import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { SettingsContext } from "./context/SettingsContext";

const Navbar = () => {
  const items = useSelector((state) => state.cart.items);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const { state } = useContext(SettingsContext);

  return (
    <nav
      className={
        state.theme === "dark"
          ? "flex justify-between items-center px-6 py-4 bg-gray-900 text-white shadow"
          : "flex justify-between items-center px-6 py-4 bg-white text-black shadow"
      }
    >
      {/* Logo */}
      <Link to="/" className="text-xl font-bold">
        🛒 Product Store
      </Link>

      {/* Links */}
      <div className="flex items-center gap-6">
        <Link to="/" className="hover:text-blue-500 transition">
          Home
        </Link>

        <Link to="/cart" className="relative hover:text-blue-500 transition">
          Cart
          {/* Badge */}
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 rounded-full">
              {totalItems}
            </span>
          )}
        </Link>

        {/* Theme indicator */}
        <span className="text-sm opacity-70">
          {state.theme === "dark" ? "🌙 Dark" : "☀️ Light"}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
