import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./studies.css";

function Home() {
  return (
    <div className="page home">
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
    </div>
  );
}

function About() {
  return (
    <div className="page about">
      <h1>About Page</h1>
      <p>This is the about page.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

