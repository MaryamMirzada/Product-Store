import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-red-500">Parwan Store</h2>

            <p className="text-gray-400 mt-4 text-sm leading-relaxed">
              We provide high-quality products at affordable prices. Our goal is
              to make your online shopping experience fast, easy, and enjoyable.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/" className="hover:text-red-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="product" className="hover:text-red-400">
                  Product
                </Link>
              </li>
              <li>
                <Link to="about" className="hover:text-red-400">
                  About
                </Link>
              </li>
              <li>
                <Link to="cart" className="hover:text-red-400">
                  Shop List
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>

            <p className="text-gray-400 text-sm">
              📍 Parwan, Afghanistan <br />
              📧 support@productstore.com <br />
              📞 +93 700 000 000
            </p>
            <div className="flex gap-4 mt-4">
              <span className="cursor-pointer hover:text-red-500">
                Facebook
              </span>
              <span className="cursor-pointer hover:text-red-500">
                Instagram
              </span>
              <span className="cursor-pointer hover:text-red-500">Twitter</span>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Product Store. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
