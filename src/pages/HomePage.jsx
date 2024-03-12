import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Globe from './GlobePage';
import Shop from './ShopPage';
import Chatroom from '../components/Chatroom';

const HomePage = () => {
  return (
    <div className='wrapper'>

      <Header />

      <div className="globe-container"><Globe /></div>
           
      <div class="main-container">        
        <div className="shop-container"><Shop /></div>
        <div className="chatroom-container"><Chatroom /></div>
      </div>

      <Footer />

    </div>
  );
}

export default HomePage;
