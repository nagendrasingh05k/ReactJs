import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import UsersList from './components/UsersList';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Navigate to="/signup" />} /> 
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/users" element={<UsersList />} />
      <Route path="*" element={<h2>404 - Page Not Found</h2>} /> 
    </Routes>
  </Router>
);

export default App;
