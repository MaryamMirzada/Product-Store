import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";
import Footer from "../Footer";

const Layout = () => {
    // const cardClass =
    //   state.theme === "dark"
    //     ? "bg-gray-900 text-white border-gray-700"
    //     : "bg-white text-black border-gray-200";
  const { state } = useContext(SettingsContext);

  return (
    <div
      className={
        state.theme === "dark"
          ? "bg-black text- min-h-screen"
          : "bg-white text-black min-h-screen"
      }
    >
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
