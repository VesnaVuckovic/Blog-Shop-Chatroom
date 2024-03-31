import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {validateEmail} from '../utils/utils';
import './App.css';

function SignIn () {
  const navigate = useNavigate ();
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');
  const [errors, setErrors] = useState ({});

  const handleSignIn =  e => {
    e.preventDefault ();

    const isFormValid = getIsFormValid ();

    if (!isFormValid) {
      return;
    }

    console.log("Email:", email);
    console.log("Password:", password);


    fetch ('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify ({email, password}),
    })
      .then (response => {
        if (response.ok) {
          navigate ('/welcome');
        } else {
          if (response.status === 404) {
            setErrors({ ...errors, sign: 'User not found. Please sign up.' });
          } else {
            setErrors({ ...errors, sign: 'An error occurred. Please try again later.' });
          }
        }
      })         
      .catch(error => {        
        setErrors({ ...errors, sign: 'An error occurred. Please try again later.' });
      });        
  };

  const getIsFormValid = () => {
    const errors = {};

    if (!email) {
      errors.email = 'Enter your email!';
    } else if (!validateEmail (email)) {
      errors.email = 'Please enter a valid email!';
    }
    if (!password) {
      errors.password = 'Enter password!';
    } else if (password.length < 8) {
      errors.password =
        'Password must have at least 8 characters, one uppercase letter, and one special character!';
    }

    setErrors (errors);
    return Object.keys (errors).length === 0;
  };

  return (
    <form onSubmit={handleSignIn} className="sign-in-form">
      <h3>Sign In</h3>
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
      {errors.sign && <div className="error">{errors.sign}</div>}
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Sign In
        </button>
      </div>
      <p className="forgot-password text-right">
        Do not have an account? <Link to="/SignUp">Sign Up</Link>
      </p>
    </form>
  );
}

export default SignIn;