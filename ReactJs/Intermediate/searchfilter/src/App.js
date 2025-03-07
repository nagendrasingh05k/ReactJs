import React, { createContext, useContext, useState } from "react";
import "./style.css";

// Theme Context
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === "light" ? "light-theme" : "dark-theme"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

// Search Filter Component
const SearchableList = () => {
  const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];
  const [search, setSearch] = useState("");

  const filteredItems = items.filter(item => item.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search..."
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul className="list">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <li className="no-results">No results found</li>
        )}
      </ul>
    </div>
  );
};

// Main App
const App = ({ toggleTheme }) => {
  return (
    <div className="app">
      <button className="toggle-button" onClick={toggleTheme}>
        Toggle Theme
      </button>
      <SearchableList />
    </div>
  );
};


export default function Root() {
  const { toggleTheme } = useTheme();

  return (
    <ThemeProvider>
      <App toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

