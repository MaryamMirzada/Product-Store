import { useProducts } from "../hook/useProducts";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { useRef, useEffect, useState, useContext } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { ThemeContext } from "../theme/ThemeContext";

const Product = () => {
  const { data, isLoading, error } = useProducts();
  const dispatch = useDispatch();
  const { state } = useContext(ThemeContext);

  const [visibleCount, setVisibleCount] = useState(12);
  const [viewMode, setViewMode] = useState("grid");

  const visibleProducts = data?.slice(0, visibleCount);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (data) {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 }
      );
    }
  }, [data]);

  if (isLoading) return null;

  if (error)
    return <h2 className="p-5 text-red-500">Error loading products</h2>;

  return (
    <div
      className={`p-6 pb-20 lg:px-20 transition-all duration-300 ${
        state.darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-red-600">Our Products</h1>

        <button
          onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
          className="text-sm px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
        >
          {viewMode === "grid" ? "List View" : "Grid View"}
        </button>
      </div>

      {/* PRODUCTS */}
      <div
        className={
          viewMode === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            : "flex flex-col gap-4"
        }
      >
        {visibleProducts.map((product, index) => (
          <div
            key={product.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className={`rounded-xl shadow-md hover:shadow-xl transition duration-300 flex ${
              viewMode === "list"
                ? "flex-row items-center gap-5 p-4"
                : "flex-col p-5"
            } ${
              state.darkMode
                ? "bg-gray-900 border border-gray-700"
                : "bg-white border border-gray-100"
            }`}
          >
            {/* IMAGE */}
            <img
              src={product.image}
              className={`object-contain ${
                viewMode === "list" ? "h-16 w-16" : "h-44 mx-auto"
              }`}
            />

            {/* INFO */}
            <div className="flex-1 mt-3">
              <h2
                className={`font-semibold line-clamp-2 ${
                  viewMode === "list" ? "text-sm" : "text-base"
                } ${state.darkMode ? "text-white" : "text-gray-800"}`}
              >
                {product.title}
              </h2>

              <p className="text-red-600 font-bold mt-2">${product.price}</p>
            </div>

            {/* BUTTONS */}
            <div
              className={`flex gap-2 mt-3 ${
                viewMode === "list" ? "flex-col" : "flex-row"
              }`}
            >
              <button
                onClick={() => dispatch(addToCart(product))}
                className="text-sm px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded"
              >
                Add
              </button>

              <Link to={`/product/${product.id}`}>
                <button className="text-sm px-3 py-1.5 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded transition">
                  View
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* VIEW MORE */}
      {visibleCount < data?.length && (
        <div className="text-center mt-10">
          <button
            onClick={() => setVisibleCount((prev) => prev + 6)}
            className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-lg shadow transition"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default Product;
