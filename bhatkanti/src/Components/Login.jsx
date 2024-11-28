
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Background_login from '../Assets/Background_login.png'; // Import the background image

const Login = () => {
  const navigate = useNavigate();
  const initialUserEnteredInfo = {
    email: "",
    password: ""
  };

  const [userEnteredInfo, setUserEnteredInfo] = useState(initialUserEnteredInfo);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserEnteredInfo({ ...userEnteredInfo, [name]: value });
  };

  const findUser = async (e) => {
    e.preventDefault();

    try {
      // Sending POST request to authenticate the user
      const response = await axios.post('http://localhost:8080/api/auth/login', userEnteredInfo);

      const { jwt, role, user } = response.data;

      // Check if the role is Traveler
      if (role === 'ROLE_Traveler') {
        // Store the token in localStorage
        localStorage.setItem('token', jwt);
        localStorage.setItem('role', role);
        
        console.log(role);
        // Navigate to traveler's profile page
        navigate('/traveler-dashboard');
      } else {
        alert("Access denied. Only travelers can log in.");
      }
    } catch (err) {
      console.error(err);
      alert("Username or password is incorrect. Please try again!");
    }
  };

  return (
    <section
      style={{
        backgroundImage: `url(${Background_login})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.3)', // Semi-transparent white background for the form
          padding: '2rem',
          borderRadius: '15px',
          boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
          width: '100%',
          maxWidth: '400px',
          textAlign: 'center',
          backdropFilter: 'blur(10px)' // Apply the frosted glass blur effect
        }}
      >
        <h2 className="mb-5">Sign in</h2>

        <div className="form-outline mb-4">
          <input 
            type="text" 
            id="email" 
            className="form-control" 
            placeholder="Email"
            value={userEnteredInfo.email} 
            onChange={handleInputChange} 
            name="email" 
          />
        </div>

        <div className="form-outline mb-4">
          <input 
            type="password" 
            id="password" 
            className="form-control" 
            placeholder="Password" 
            value={userEnteredInfo.password} 
            onChange={handleInputChange} 
            name="password" 
          />
        </div>

        <div className="form-check d-flex justify-content-start mb-4" style={{ marginTop: '25px' }}>
          <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
          <label className="form-check-label" htmlFor="form1Example3" style={{ marginLeft: '10px', color: '#585555' }}>
            Remember password
          </label>
        </div>

        <button 
          style={{
            width: '100px',
            textDecoration: 'none',
            color: 'white',
            fontWeight: '700',
            backgroundColor: '#4468E2',
            textAlign: 'center',
            padding: '7px 30px',
            borderRadius: '5px',
            outlineStyle: 'solid',
            outlineWidth: '2px',
            marginTop: '15px'
          }} 
          type="submit" 
          onClick={findUser}
        >
          Login
        </button>

        <hr className="my-4" style={{ opacity: '0.15' }} />

        <div className="d-flex align-items-center justify-content-center pb-4">
          <p className="mb-0 me-2">Don't have an account?</p>
          <Link to="/signup" style={{ textDecoration: 'none', color: '#4468E2' }}>Sign up</Link>
        </div>
      

      <div className="d-flex align-items-center justify-content-center">
          <p className="mb-0 me-2">Admin?</p>
          <Link to="/admin-login" style={{ textDecoration: 'none', color: '#4468E2' }}>Admin Login</Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
