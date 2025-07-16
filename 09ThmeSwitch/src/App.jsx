import React, { useState, useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "./context/Theme";
import ThemeButton from "./components/ThemeButton";
import Card from "./components/Card";

function App() {

  const [thememode, setThememode] = useState("light")

  const lightTheme = () => {
    setThememode("light")
  }

  const darkTheme = () => {
    setThememode("dark")
  }

  // Actual change of theme
  useEffect(() => {
    document.querySelector('html').classList.remove("dark", "light");
    document.querySelector('html').classList.add(thememode);
  }, [thememode]);


  
  return (
    <ThemeProvider value={{ thememode, darkTheme, lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {<ThemeButton/>}
          </div>

          <div className="w-full max-w-sm mx-auto">{<Card/>}</div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
