import { useProducts } from "../hook/useProducts";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const { data, isLoading, error } = useProducts();
  const dispatch = useDispatch();
  const [visibleCount, setVisibleCount] = useState(12);
  const visibleProducts = data?.slice(0, visibleCount);

  const cardsRef = useRef([]);

  useEffect(() => {
    if (data) {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }
      );
    }
  }, [data]);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="border p-3 rounded animate-pulse">
              <div className="h-40 bg-gray-300"></div>
              <div className="h-4 bg-gray-300 mt-3 w-3/4"></div>
              <div className="h-4 bg-gray-300 mt-2 w-1/2"></div>
            </div>
          ))}
      </div>
    );
  }
  if (error) return <h2>Error</h2>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5">
      {visibleProducts.map((product) => (
        <div key={product.id} className="border p-3 rounded shadow">
          <img src={product.image} className="h-40 mx-auto" />

          <h2 className="font-bold mt-2">{product.title}</h2>
          <p>${product.price}</p>

          {/* 🟢 Add to Cart */}
          <button
            onClick={() => dispatch(addToCart(product))}
            className="bg-blue-500 text-white px-3 py-1 mt-3 rounded"
          >
            Add to Cart
          </button>

          {/* 🟡 More Info Button */}
          <Link to={`/product/${product.id}`}>
            <button className="bg-gray-700 text-white px-3 py-1 mt-2 rounded w-full">
              More Info
            </button>
          </Link>
        </div>
      ))}
      {visibleCount < data?.length && (
        <div className="text-center mt-6">
          <button
            onClick={() => setVisibleCount((prev) => prev + 6)}
            className="bg-red-800 text-white px-5 py-2 rounded hover:bg-gray-800 transition"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
