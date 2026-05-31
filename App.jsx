import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  const { theme, themeStyles } = useContext(ThemeContext);

  return (
    <div
      className={theme === "dark" ? "dark-mode" : "light-mode"}
      style={themeStyles}
    >
      <h1>Global Theme Switcher</h1>

      <p>
        This application uses React Context API to manage
        light and dark themes globally.
      </p>

      <ThemeSwitcher />
    </div>
  );
}

export default App;