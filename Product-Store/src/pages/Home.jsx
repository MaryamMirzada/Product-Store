import { useProducts } from "../hook/useProducts";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
   
    <div>
      <h1 className="text-4xl font-bold text-red-700">Welcome to Our Store</h1>

      <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
        We provide high-quality products with the best prices. Discover amazing
        deals and enjoy a smooth shopping experience.
      </p>
    </div>
  );
};

export default Home;
