import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";

const Layout = () => {
  const { state } = useContext(SettingsContext);

  return (
    <div
      className={
        state.theme === "dark"
          ? "bg-black text-white min-h-screen"
          : "bg-white text-black min-h-screen"
      }
    >
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
