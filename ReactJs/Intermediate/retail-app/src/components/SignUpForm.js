import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import './SignUpForm.css';

const schema = yup.object({
  username: yup.string().required('Username is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const SignUpForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log("Submitting data:", data);

    try {
      const response = await axios.post('http://localhost:5001/register', {
        username: data.username,
        email: data.email,
        password: data.password,
      });

      console.log("Response from server:", response.data);
      alert('User registered successfully!');
    } catch (error) {
      console.error('Error registering user:', error);
      alert(error.response?.data?.error || 'Failed to register. Try again.');
    }
  };

  return (
    <div>
      <nav className="navbar">
        <h1>Welcome to the Sign-Up Page</h1>
      </nav>

      <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
          <div className="form-group">
            <label>Username</label>
            <input {...register('username')} />
            {errors.username && <p className="error">{errors.username.message}</p>}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" {...register('email')} />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" {...register('password')} />
            {errors.password && <p className="error">{errors.password.message}</p>}
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" {...register('confirmPassword')} />
            {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}
          </div>
          <button type="submit" className="submit-btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
