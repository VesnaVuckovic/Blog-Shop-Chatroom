import { Link } from 'react-router-dom';
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import SignIn from '../components/registration/src/client/SignIn';
import Chatroom from './Chatroom';


<ScrollLink
  to="shop-container"
  smooth={true}
  duration={1000} 
>
  Souvenir Shop
</ScrollLink>

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
          <li className="menu-button"><ScrollLink to="shop-container" smooth={true} duration={2000}>Souvenir Shop</ScrollLink></li>                  
          <li className="menu-button"><Link to="/Chatroom">Chatroom</Link></li>          
        </ul>
      </nav>
    </header>
  );
}

export default Header;