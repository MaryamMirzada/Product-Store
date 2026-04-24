import { useProducts } from "../hook/useProducts";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

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
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 }
      );
    }
  }, [data]);

  // 🟡 Loading Skeleton
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="p-4 rounded-lg shadow animate-pulse bg-white"
            >
              <div className="h-40 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 mt-4 w-3/4"></div>
              <div className="h-4 bg-gray-200 mt-2 w-1/2"></div>
            </div>
          ))}
      </div>
    );
  }

  if (error)
    return <h2 className="p-5 text-red-500">Error loading products</h2>;

  return (
    <div className="p-6 lg:px-20">
      {/* 🟢 Title */}
      <h1 className="text-3xl font-bold mb-6 text-red-700">Our Products</h1>

      {/* 🟢 Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleProducts.map((product, index) => (
          <div
            key={product.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-4 flex flex-col justify-between hover:scale-[1.02]"
          >
            {/* Image */}
            <img src={product.image} className="h-44 object-contain mx-auto" />

            {/* Info */}
            <div className="mt-4">
              <h2 className="font-semibold text-lg line-clamp-2">
                {product.title}
              </h2>

              <p className="text-red-600 font-bold mt-2 text-lg">
                ${product.price}
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-4 space-y-2">
              <button
                onClick={() => dispatch(addToCart(product))}
                className="w-full cursor-pointer bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition"
              >
                Add to Cart
              </button>

              <Link to={`/product/${product.id}`}>
                <button className="w-full cursor-pointer border border-red-600 text-red-600 hover:bg-red-600 hover:text-white py-2 rounded-lg transition">
                  More Info
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* 🟡 View More */}
      {visibleCount < data?.length && (
        <div className="text-center mt-10">
          <button
            onClick={() => setVisibleCount((prev) => prev + 6)}
            className="bg-red-700 hover:bg-red-800 text-white cursor-pointer px-6 py-3 rounded-lg shadow transition"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
