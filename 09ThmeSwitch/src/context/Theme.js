import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    thememode: "light", // default theme
    darkTheme: () => {}, // function to toggle dark theme
    lightTheme: () => {} // function to toggle light theme
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
    return useContext(ThemeContext);
}