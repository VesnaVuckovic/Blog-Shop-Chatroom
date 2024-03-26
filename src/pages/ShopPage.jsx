import React from 'react';
import ShopCarousel from '../components/shop/src/components/ShopCarousel';
import { Link } from 'react-router-dom';

const ShopPage = () => {

    return (    
      <div id="shop-container" className="shop-container">
      <ShopCarousel /> 
      </div>   
  );
}

export default ShopPage;
