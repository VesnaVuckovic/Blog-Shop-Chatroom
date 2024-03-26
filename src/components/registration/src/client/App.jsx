import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Welcome from './Welcome';


function App() {
  return (
    <Router>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Routes>            
            <Route path="/" element={<SignIn />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/welcome" element={<Welcome/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;