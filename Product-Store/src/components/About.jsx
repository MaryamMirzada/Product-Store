const About = () => {
  return (
    <div className="my-16 px-4 lg:px-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-red-600">About Our Store</h2>

        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          We are a modern online store dedicated to providing high-quality
          products at the best prices. Our mission is to make shopping simple,
          fast, and enjoyable for everyone.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl shadow hover:shadow-lg transition bg-white">
          <h3 className="font-bold text-lg text-red-600 mb-2">Quality</h3>
          <p className="text-gray-600 text-sm">
            We ensure all products meet high quality standards.
          </p>
        </div>

        <div className="p-6 rounded-xl shadow hover:shadow-lg transition bg-white">
          <h3 className="font-bold text-lg text-red-600 mb-2">Fast Delivery</h3>
          <p className="text-gray-600 text-sm">
            Quick and reliable delivery to your doorstep.
          </p>
        </div>

        <div className="p-6 rounded-xl shadow hover:shadow-lg transition bg-white">
          <h3 className="font-bold text-lg text-red-600 mb-2">Support</h3>
          <p className="text-gray-600 text-sm">
            24/7 customer support for all your needs.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
