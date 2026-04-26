import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";

const fetchProduct = async (id) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
};

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { state } = useContext(ThemeContext);

  const { data, isLoading, error } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
  });

  // LOADING
  if (isLoading) {
    return (
      <div
        className={`p-10 grid md:grid-cols-2 gap-10 animate-pulse ${
          state.darkMode ? "bg-black" : "bg-white"
        }`}
      >
        <div className="h-80 bg-gray-200 rounded"></div>
        <div>
          <div className="h-6 bg-gray-200 w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 w-full mb-2"></div>
          <div className="h-4 bg-gray-200 w-5/6 mb-2"></div>
          <div className="h-4 bg-gray-200 w-2/3"></div>
        </div>
      </div>
    );
  }

  // ERROR
  if (error)
    return (
      <h2
        className={`p-10 text-xl ${
          state.darkMode ? "text-red-400" : "text-red-600"
        }`}
      >
        Error loading product ❌
      </h2>
    );

  return (
    <div
      className={`max-w-screen  py-6 md:p-10 transition-all duration-300 ${
        state.darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* IMAGE */}
        <div
          className={`rounded-xl shadow p-6 flex justify-center ${
            state.darkMode ? "bg-gray-900 border border-gray-700" : "bg-white"
          }`}
        >
          <img
            src={data.image}
            className="h-80 object-contain hover:scale-105 transition"
          />
        </div>

        {/* CONTENT */}
        <div>
          <h1 className="text-3xl font-bold mb-3">{data.title}</h1>

          <p
            className={`leading-relaxed ${
              state.darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {data.description}
          </p>

          <h2 className="text-2xl font-bold text-red-600 mt-5">
            ${data.price}
          </h2>

          <p
            className={`mt-2 text-sm ${
              state.darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Category: {data.category}
          </p>

          <button
            onClick={() => dispatch(addToCart(data))}
            className="mt-6 w-full md:w-auto bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition shadow"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
