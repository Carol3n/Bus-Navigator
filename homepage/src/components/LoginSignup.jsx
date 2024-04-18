import React, { useState } from 'react';
import './LoginSignup.css';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data (e.g., check if passwords match)
    if (password !== confirmPassword) {
      console.error('Passwords do not match');
      return;
    }

    // Send form data to the PHP script
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    try {
      const response = await fetch('./LoginSignup.php', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Handle successful registration (e.g., redirect to login page)
        console.log('User registered successfully');
        navigate('/dist');
      } else {
        // Handle error response (e.g., display error message)
        console.error('Error registering user');
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>Sign Up</div>
        <div className='underline'></div>
      </div>
      <form className='inputs' onSubmit={handleSubmit}>
        <div className='input'>
          <input
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='input'>
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='input'>
          <input
            type='password'
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          
        </div>
        <button type='submit'>Register</button>
      </form>
    </div>
  );
};

export default SignupForm;
