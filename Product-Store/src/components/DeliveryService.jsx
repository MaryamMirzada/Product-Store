import { Truck, ShieldCheck, PackageCheck } from "lucide-react";

const DeliveryService = () => {
  return (
    <div className="my-20 px-4 lg:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-red-600">
          Delivery Services
        </h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Fast, secure, and reliable delivery services to ensure your products
          reach you safely and on time anywhere.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="group p-6 rounded-2xl bg-white shadow-md hover:shadow-2xl transition duration-300 text-center border hover:border-red-500">
          <div className="flex justify-center mb-4 text-red-600 group-hover:scale-110 transition">
            <Truck size={40} />
          </div>

          <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
          <p className="text-gray-600 text-sm">
            Get your orders delivered within 24-48 hours with high speed
            service.
          </p>
        </div>

        <div className="group p-6 rounded-2xl bg-white shadow-md hover:shadow-2xl transition duration-300 text-center border hover:border-red-500">
          <div className="flex justify-center mb-4 text-red-600 group-hover:scale-110 transition">
            <ShieldCheck size={40} />
          </div>
          <h3 className="text-xl font-bold mb-2">Secure Packaging</h3>
          <p className="text-gray-600 text-sm">
            All products are safely packed with high-quality protection
            materials.
          </p>
        </div>
        <div className="group p-6 rounded-2xl bg-white shadow-md hover:shadow-2xl transition duration-300 text-center border hover:border-red-500">
          <div className="flex justify-center mb-4 text-red-600 group-hover:scale-110 transition">
            <PackageCheck size={40} />
          </div>
          <h3 className="text-xl font-bold mb-2">Order Tracking</h3>
          <p className="text-gray-600 text-sm">
            Track your order in real-time from warehouse to your doorstep.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryService;
