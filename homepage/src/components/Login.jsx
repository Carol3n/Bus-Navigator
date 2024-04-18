import React, { useState } from 'react';
import './LoginSignup.css';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send form data to the PHP script
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    try {
      const response = await fetch('./Login.php', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Handle successful registration (e.g., redirect to login page)
        console.log('User logged successfully');
        const data = await response.json();
            if (data.redirect) {
                // Redirect to another page upon successful login
                navigate('/dist/Home');
            } else {
                console.error(data.error);
            }
      } else {
        // Handle error response (e.g., display error message)
        console.error('Error logging user');
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>Sign In</div>
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
        <div>
          
        </div>
        <button type='submit'>Login</button>
      </form>
      <div><Link to={'/dist/Register'}>Register</Link></div>
    </div>
  );
};

export default Login;
