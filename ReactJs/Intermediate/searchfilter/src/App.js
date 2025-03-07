import React, { createContext, useContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import "./style.css";


const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      document.body.className = newTheme === "light" ? "light-theme" : "dark-theme"; 
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);



const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username) => setUser(username);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
  );
};
const useAuth = () => useContext(AuthContext);


const Navbar = () => {
  const { user } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <h2 className="navbar-logo">My App</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        {user ? <Link to="/logout">Logout</Link> : <Link to="/login">Login</Link>}
        <button className="toggle-button" onClick={toggleTheme}>
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </nav>
  );
};


const SearchableList = () => {
  const items = ["laptop", "mobile", "watch", "camera", "headphone", "iphone"];
  const [search, setSearch] = useState("");
  const filteredItems = items.filter(item => item.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="container">
      <h1>User Authenticated..</h1>
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


const LoginPage = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    if (username.trim()) {
      login(username);
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Varify User..."
        className="search-input"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button className="auth-button" onClick={handleLogin}>Login</button>
    </div>
  );
};


const LogoutPage = () => {
  const { logout } = useAuth();
  return (
    <div className="container">
      <h1>Logout</h1>
      <p>You have been logged out.</p>
      <button className="auth-button" onClick={logout}>Logout</button>
    </div>
  );
};


const Home = () => (
  <div>
    <SearchableList />
  </div>
);


const App = () => {
  const { user } = useAuth();
  const { theme } = useTheme();

  return (
    <div className={theme === "light" ? "light-theme" : "dark-theme"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={!user ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/logout" element={user ? <LogoutPage /> : <Navigate to="/login" />} />
      </Routes>
    </div>
  );
};


export default function Root() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}
