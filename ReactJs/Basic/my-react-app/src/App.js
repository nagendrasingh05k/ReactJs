import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
 
function App() {
  // useState hook to manage state in the component
  const [count, setCount] = useState(0);
 
  // Function to increment the count
  const incrementCount = () => {
    setCount(count + 1);
  };
 
  return (
<div className="App">
<header className="App-header">
<h1>Welcome to My React App</h1>
<p>You clicked {count} times</p>
<button onClick={incrementCount}>Click me</button>
</header>
</div>
  );
}
 
export default App;