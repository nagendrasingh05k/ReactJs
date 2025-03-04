import './App.css';

import React, { useContext } from "react";
import { ThemeContext, ThemeProvider } from "./ThemeContext";
function ThemeSwitcher() {
 const { theme, setTheme } = useContext(ThemeContext);
 return (
<div>
<p>Current Theme: {theme}</p>
<button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
       Toggle Theme
</button>
</div>
 );
}
export default function App() {
 return (
<ThemeProvider>
<ThemeSwitcher />
</ThemeProvider>
 );
}