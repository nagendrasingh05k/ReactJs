import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
 
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
 
  const handleLogin = () => {
    if (!email || !password) {
      setErrorMessage('Please fill out both fields.');
      return;
    }
 
    if (email === 'user@example.com' && password === 'password') {
      setErrorMessage('');
      alert('Login successful!');
    } else {
      setErrorMessage('Invalid credentials.');
    }
  };
 
  return (
<div>
<h2>Login</h2>
<input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
<input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
<button onClick={handleLogin}>Login</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
</div>
  );
};
 
export default LoginForm;