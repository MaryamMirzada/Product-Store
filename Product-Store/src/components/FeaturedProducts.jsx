import { useProducts } from "../hook/useProducts";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";

const FeaturedProducts = () => {
  const { data, isLoading } = useProducts();
  const { state } = useContext(ThemeContext);

  if (isLoading) return null;

  const featured = data?.slice(0, 4);

  return (
    <div
      className={`my-24 px-4 lg:px-20 transition-all duration-300 ${
        state.darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* TITLE */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-extrabold text-red-600">
          Featured Products
        </h2>

        <p
          className={`mt-4 max-w-2xl mx-auto ${
            state.darkMode ? "text-gray-300" : "text-gray-500"
          }`}
        >
          Discover our top-rated and most loved products chosen for quality,
          performance, and value.
        </p>
      </div>

      {/* PRODUCTS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {featured?.map((product) => (
          <div
            key={product.id}
            className={`group rounded-2xl shadow-md hover:shadow-2xl transition duration-300 border flex flex-col h-full overflow-hidden ${
              state.darkMode
                ? "bg-gray-900 border-gray-700"
                : "bg-white border-gray-100"
            }`}
          >
            {/* IMAGE */}
            <div
              className={`h-48 flex items-center justify-center p-4 ${
                state.darkMode ? "bg-gray-800" : "bg-gray-50"
              }`}
            >
              <img
                src={product.image}
                className="h-36 object-contain group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-4 flex flex-col flex-1 justify-between">
              <div>
                <h3
                  className={`font-semibold line-clamp-2 min-h-[48px] ${
                    state.darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  {product.title}
                </h3>

                <div className="flex items-center justify-between mt-3">
                  <p className="text-red-600 font-bold text-lg">
                    ${product.price}
                  </p>

                  <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                    Featured
                  </span>
                </div>
              </div>

              <Link to={`/product/${product.id}`}>
                <button className="mt-5 w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white py-2 rounded-xl transition shadow-md">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
