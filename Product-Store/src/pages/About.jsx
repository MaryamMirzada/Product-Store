import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";
import WhyUs from "../data/WhyUs";

const About = () => {
  const navigate = useNavigate();
  const { state } = useContext(ThemeContext);

  return (
    <div
      className={`my-20 px-4 lg:px-20 py-16 transition-all duration-300 ${
        state.darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
      id="about"
    >
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT */}
        <div>
          <h1 className="text-5xl font-extrabold text-red-600 leading-tight">
            About Our Store
          </h1>

          <p
            className={`mt-6 leading-relaxed ${
              state.darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            We are a modern e-commerce platform dedicated to providing
            high-quality products at the best prices. Our mission is to make
            online shopping simple, fast, and enjoyable for everyone.
          </p>

          <button
            onClick={() => navigate("/product")}
            className="mt-6 bg-red-600 cursor-pointer hover:bg-red-700 text-white px-6 py-3 rounded-xl shadow-md transition"
          >
            Explore Products
          </button>
        </div>

        {/* RIGHT */}
        <div>
          <img
            src="https://www.thoughtco.com/thmb/ctxxtfGGeK5f_-S3f8J-jbY-Gp8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/close-up-of-clothes-hanging-in-row-739240657-5a78b11f8e1b6e003715c0ec.jpg"
            className="rounded-2xl shadow-xl object-cover w-full h-[350px]"
            alt="store"
          />
        </div>
      </div>

      {/* WHY US TITLE */}
      <div className="mt-20 text-center">
        <h2
          className={`text-3xl font-bold ${
            state.darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Why Choose Us?
        </h2>

        <p
          className={`mt-3 max-w-2xl mx-auto ${
            state.darkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          We focus on quality, trust, and customer satisfaction.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {WhyUs.map((data, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl shadow hover:shadow-xl transition ${
              state.darkMode
                ? "bg-gray-900 border border-gray-700"
                : "bg-white border border-gray-200"
            }`}
          >
            <h3 className="text-xl font-bold text-red-600">{data.name}</h3>

            <p
              className={`mt-3 text-sm ${
                state.darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {data.decs}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
