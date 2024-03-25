import { Link } from 'react-router-dom';
import React from 'react';
import ShopPage from '../pages/ShopPage';
import SignIn from '../components/registration/src/client/SignIn';
import Chatroom from './Chatroom';

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img src="./LogoW.jpg" alt="LogoW" />
      </div>
      <nav className="menu">
        <ul>
          <li className="menu-button"><Link to="">About</Link></li> 
          <li className="menu-button"><Link to="/SignIn">SignIn</Link></li> 
          <li className="menu-button"><Link to="/ShopPage">Souvenir Shop</Link></li>                   
          <li className="menu-button"><Link to="/Chatroom">Chatroom</Link></li>          
        </ul>
      </nav>
    </header>
  );
}

export default Header;