import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./components/Login";
import ProductCatalogue from "./components/ProductCatalogue";
import "./style.css";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="nav-link">Login</Link>
      <Link to="/products" className="nav-link">Home</Link>
      <Link to="/" className="nav-link">Logout</Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/products" element={<ProductCatalogue />} />
      </Routes>
    </Router>
  );
}

export default App;