import { createContext, useState } from "react";

// Create Context
export const ThemeContext = createContext();

// Theme styles
const themes = {
  light: {
    background: "#ffffff",
    color: "#000000",
  },
  dark: {
    background: "#1e1e1e",
    color: "#ffffff",
  },
};

// Provider Component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Toggle function
  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "light" ? "dark" : "light"
    );
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeStyles: themes[theme],
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};