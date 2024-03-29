import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';

function Welcome() {
  const location = useLocation();
  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    const storedFirstName = localStorage.getItem('firstName');
    if (storedFirstName) {
      setFirstName(storedFirstName);
    }
  }, []);

  return (
    <div className="welcome-message">
      <h2>Welcome, {firstName}!</h2>
      <p>You have successfully logged in or registered.</p>
      <p>Now you can:</p>
      <button className="btn btn-primary"><Link to="/HomeShop">Buy</Link></button>
      <p className="separator">or</p>
      <button className="btn btn-primary">Chat</button>
      
    </div>
  );
}

export default Welcome;