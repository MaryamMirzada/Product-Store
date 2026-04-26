import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./theme/ThemeContext";

const Footer = () => {
  const { state } = useContext(ThemeContext);

  return (
    <footer
      className={` transition-all duration-300 ${
        state.darkMode ? "bg-gray-950 text-white" : "bg-gray-100 text-gray-900"
      }`}
    ><hr />
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-bold text-red-500">Unix Store</h2>

            <p
              className={`mt-4 text-sm leading-relaxed ${
                state.darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              We provide high-quality products at fair prices with a smooth
              shopping experience for everyone.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

            <ul
              className={`space-y-3 text-sm ${
                state.darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <li>
                <Link className="hover:text-red-500 transition" to="/">
                  Home
                </Link>
              </li>

              <li>
                <Link className="hover:text-red-500 transition" to="/product">
                  Product
                </Link>
              </li>

              <li>
                <Link className="hover:text-red-500 transition" to="/about">
                  About
                </Link>
              </li>

              <li>
                <Link className="hover:text-red-500 transition" to="/cart">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>

            <p
              className={`text-sm leading-relaxed ${
                state.darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              📍 Parwan, Afghanistan <br />
              📧 support@productstore.com <br />
              📞 +93 700 000 000
            </p>

            <div className="flex gap-4 mt-5 text-sm">
              <span className="cursor-pointer hover:text-red-500 transition">
                Facebook
              </span>
              <span className="cursor-pointer hover:text-red-500 transition">
                Instagram
              </span>
              <span className="cursor-pointer hover:text-red-500 transition">
                Twitter
              </span>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className={`border-t mt-12 pt-6 text-center text-sm ${
            state.darkMode
              ? "border-gray-800 text-gray-400"
              : "border-gray-200 text-gray-500"
          }`}
        >
          © {new Date().getFullYear()} Unix Store. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
