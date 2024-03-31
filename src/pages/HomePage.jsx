import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Globe from './GlobePage';
// import Chatroom from '../components/Chatroom';
import ShopPage from './ShopPage';
import { animateScroll as scroll } from 'react-scroll';


const HomePage = () => {
  
  return (
    <div className='wrapper'>
      <div className="main-header"><Header /></div>
      <div className="globe-container"><Globe /></div>            
      <div className="shop-container"><h1>Souvenir Shop</h1><ShopPage /></div>
      {/* <div className="chatroom-container"><Chatroom /></div> */}
      <div className="main-footer"><Footer /></div>
    </div>
  );
}

export default HomePage;
