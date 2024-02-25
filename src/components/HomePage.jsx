import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Map from './map/Map';
import Shop from './shop/Shop';
import Chatroom from './chatroom/Chatroom';

const HomePage = () => {
  return (
    <div className='wrapper'>

      <Header />

      <div className="map-container"><Map /></div>
           
      <div class="main-container">        
        <div className="shop-container"><Shop /></div>
        <div className="chatroom-container"><Chatroom /></div>
      </div>

      <Footer />

    </div>
  );
}

export default HomePage;
