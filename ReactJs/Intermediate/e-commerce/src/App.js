import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./components/Login";
import ProductCatalogue from "./components/ProductCatalogue";
import "./style.css";

function App() {
  return (
    <Router>
      <div className="navbar">
        <Link to="/">Login</Link>
        <Link to="/products">Product Catalogue</Link>
      </div>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/products" element={<ProductCatalogue />} />
      </Routes>
    </Router>
  );
}

export default App;

