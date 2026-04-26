import { createContext, useReducer } from "react";
import { useContext } from "react";

export const ThemeContext = createContext();

const initialState = {
  darkMode: localStorage.getItem("theme") === "dark",
};

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      const newMode = !state.darkMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return { darkMode: newMode };
    default:
      return state;
  }
}
export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
