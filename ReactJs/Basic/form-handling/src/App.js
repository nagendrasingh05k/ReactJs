import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
 
function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
 
  return (
<div>
<h1>Form Example</h1>
      {!submitted ? (
<form onSubmit={handleSubmit}>
<label>
            Name:
<input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
</label>
<br />
<label>
            Email:
<input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
</label>
<br />
<button type="submit">Submit</button>
</form>
      ) : (
<div>
<h2>Form Submitted!</h2>
<p>Name: {name}</p>
<p>Email: {email}</p>
</div>
      )}
</div>
  );
}
 
export default App;
