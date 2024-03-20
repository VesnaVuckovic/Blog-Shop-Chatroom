import './App.css'; 
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import handleRegister from './App';
import './App.css';
import {validateEmail} from './src/utils/utils'

const LoginPopup = ({ onClose, onLogin }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); 

  const handleLogin = () => {    
    dispatch({ type: 'LOGIN', payload: { email, password } });
    onLogin(); 
  };

  const handleRegister = () => {    
    dispatch({ type: 'REGISTER', payload: { email, password } });
    onClose(); 
  };

  const handleSubmit = () => {
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      setError('Email nije validan!');
      return;
    } else {
      setErrorMessage('');
    }
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>{isRegistering ? 'Create account' : 'Login'}</h2>
        <form>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          {errorMessage && <div className="error-message">{errorMessage}</div>}       
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <p className="hover-text" onClick={isRegistering ? handleRegister : handleLogin}>{isRegistering ? 'Create account' : 'Login'}</p>
          <p onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering ? 'Already have account? Login ' : 'Do not have account? Create account '}
          <span className="hover-text">here.</span> 
          </p>
        </form>
        <div className="danger" onClick={onClose}>&times;</div>
      </div>
    </div>
  );
};

export default LoginPopup;