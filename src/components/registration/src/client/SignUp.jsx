import React, {useState} from 'react';
import {useNavigate, useRoutes} from 'react-router-dom';
import './App.css';
import {validateEmail, validateFirstName, validateLastName, validatePassword} from '../utils/utils';
import { Link } from 'react-router-dom';

function SignUp () {
  const navigate = useNavigate ();
  const [firstName, setFirstName] = useState ('');
  const [lastName, setLastName] = useState ('');
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');
  const [errors, setErrors] = useState ({});

  const handleSignUp = async (e) => {
    e.preventDefault ();

    const isFormValid = getIsFormValid ();

    if (!isFormValid) {
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('firstName', firstName);
        navigate('/welcome');
      } else {
        const errorData = await response.json();
        console.error('Error registering user:', errorData);        
      }
    } catch (error) {
      console.error('Error registering user:', error);     
    }
    localStorage.setItem ('firstName', firstName);
    navigate ('/welcome');
  };

  const getIsFormValid = () => {
    const errors = {};

    if (!firstName) {
      errors.firstName = 'Enter your first name!';
    } else if (!validateFirstName (firstName)) {
      errors.firstName = 'First name must start with a capital letter!';
    }
    if (!lastName) {
      errors.lastName = 'Enter your last name!';
    } else if (!validateLastName (lastName)) {
      errors.lastName = 'Last name must start with a capital letter!';
    }
    if (!email) {
      errors.email = 'Enter your email!';
    } else if (!validateEmail (email)) {
      errors.email = 'Please enter a valid email!';
    }
    if (!password) {
      errors.password = 'Enter password!';
    } else if (!validatePassword (password)) {
      errors.password =
        'Password must have at least 8 characters, one uppercase letter, and one special character!';
    }

    setErrors (errors);
    return Object.keys (errors).length === 0;
  };

  return (
    <form onSubmit={handleSignUp} className="sign-in-form">
      <h3>Sign Up</h3>
      <div className="form-group">
        <label>First name</label>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          value={firstName}
          onChange={e => setFirstName (e.target.value)}
        />
        {errors.firstName && <div className="error">{errors.firstName}</div>}
      </div>
      <div className="form-group">
        <label>Last name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Last name"
          value={lastName}
          onChange={e => setLastName (e.target.value)}
        />
        {errors.lastName && <div className="error">{errors.lastName}</div>}
      </div>
      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={e => setEmail (e.target.value)}
        />
        {errors.email && <div className="error">{errors.email}</div>}
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={e => setPassword (e.target.value)}
        />
        {errors.password && <div className="error">{errors.password}</div>}
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already have an account? <Link to="/SignIn">Sign In</Link>
      </p>
    </form>
  );
}

export default SignUp;
