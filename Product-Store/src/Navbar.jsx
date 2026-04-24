import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-black text-white">
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </div>
  );
};

export default Navbar;
