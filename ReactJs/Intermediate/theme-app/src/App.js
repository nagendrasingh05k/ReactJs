import React, { Suspense } from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";

// Lazy load the components
const About = React.lazy(() => import("./About"));
const Contact = React.lazy(() => import("./Contact"));

const App = () => {
  return (
    <ThemeProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    </ThemeProvider>
  );
};

const Home = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="container">
      <h1>Welcome to the {theme} theme!</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Suspense fallback={<div>Loading about section...</div>}>
        <About />
      </Suspense>
      <Suspense fallback={<div>Loading contact section...</div>}>
        <Contact />
      </Suspense>
    </div>
  );
};

export default App;
