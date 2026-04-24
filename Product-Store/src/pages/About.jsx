import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="px-4 lg:px-20 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-5xl font-extrabold text-red-600 leading-tight">
            About Our Store
          </h1>

          <p className="text-gray-600 mt-6 leading-relaxed">
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
        <div>
          <img
            src="https://www.thoughtco.com/thmb/ctxxtfGGeK5f_-S3f8J-jbY-Gp8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/close-up-of-clothes-hanging-in-row-739240657-5a78b11f8e1b6e003715c0ec.jpg"
            className="rounded-2xl shadow-xl object-cover w-full h-[350px]"
          />
        </div>
      </div>
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Why Choose Us?</h2>

        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          We focus on quality, trust, and customer satisfaction.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <div className="p-6 rounded-2xl shadow hover:shadow-xl transition bg-white border">
            <h3 className="text-xl font-bold text-red-600">Quality</h3>
            <p className="text-gray-600 mt-3 text-sm">
              All products are carefully selected for best quality.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow hover:shadow-xl transition bg-white border">
            <h3 className="text-xl font-bold text-red-600">Fast Delivery</h3>
            <p className="text-gray-600 mt-3 text-sm">
              We deliver your orders quickly and safely.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow hover:shadow-xl transition bg-white border">
            <h3 className="text-xl font-bold text-red-600">Support</h3>
            <p className="text-gray-600 mt-3 text-sm">
              24/7 customer support for all your needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
