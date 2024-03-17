import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Globe from './GlobePage';
import Chatroom from '../components/Chatroom';
import ShopPage from './ShopPage';


const HomePage = () => {
  return (
    <div className='wrapper'>
      <Header />
      <div className="globe-container"><Globe /></div>            
      <div className="shop-container"><h1>Souvenir Shop</h1><ShopPage /></div>
      <div className="chatroom-container"><Chatroom /></div>
      <Footer />
    </div>
  );
}

export default HomePage;
