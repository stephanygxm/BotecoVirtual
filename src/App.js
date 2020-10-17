import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Components/Theme/GlobalStyles";
import { lightTheme, darkTheme } from "./Components/Theme/Themes";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Switch from "react-switch";
import "./styles.css";
import Routes from "./router";
import Footer from "./Components/Footer/index";
import Alert from "./Components/Alert/index";

const useStateWithLocalStorage = (localStorageKey) => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem(localStorageKey) || "light"
  );

  useEffect(() => {
    localStorage.setItem(localStorageKey, theme);
  }, [theme]);

  return [theme, setTheme];
};

export default function App() {
  const [theme, setTheme] = useStateWithLocalStorage("@Theme");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    localStorage.clear();
    localStorage.setItem("@Theme", theme);
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div className="App">
          <div class="switch__container" title="Modo Dark">
            <label for="switch-shadow"></label>
          </div>
          <Switch
            className="btn-right"
            checked={theme === "dark" ? true : false}
            onChange={themeToggler}
          />
          <Routes />
          <Footer />
          <Alert />
        </div>
      </>
    </ThemeProvider>
  );
}
