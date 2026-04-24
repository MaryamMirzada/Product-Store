import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";

const Settings = () => {
  const { state, dispatch } = useContext(SettingsContext);

  return (
    <div className="p-5 border m-5">
      <h2 className="text-xl font-bold">Settings</h2>

      {/* Theme */}
      <button
        onClick={() => dispatch({ type: "TOGGLE_THEME" })}
        className="bg-black text-white px-3 py-1 mt-3"
      >
        Toggle Theme ({state.theme})
      </button>

      {/* View */}
      <div className="mt-3">
        <button
          onClick={() => dispatch({ type: "SET_VIEW", payload: "grid" })}
          className="mr-2 bg-blue-500 text-white px-3 py-1"
        >
          Grid
        </button>

        <button
          onClick={() => dispatch({ type: "SET_VIEW", payload: "list" })}
          className="bg-green-500 text-white px-3 py-1"
        >
          List
        </button>
      </div>
    </div>
  );
};

export default Settings;
