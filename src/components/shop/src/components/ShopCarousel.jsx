import React, { useState, useEffect } from 'react';
import { config } from "react-spring";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

const ShopCarousel = () => {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const importImages = async () => {      
      const imagesContext = import.meta.glob('../../public/images/*.jpg');
      const imagesKeys = Object.keys(imagesContext);
      const images = await Promise.all(imagesKeys.map(key => imagesContext[key]()));
      const formattedSlides = images.map(image => ({
        key: uuidv4(),
        content: <img src={image.default} alt="Slide" />
      }));
      setSlides(formattedSlides);
    };
    importImages();
  }, []);

  const onChangeInput = (e) => {
    setCurrentIndex(parseInt(e.target.value, 10) || 0);
  };

  return (        
    <>
      <Carousel
        slides={slides}
        offsetRadius={2}
        showNavigation={true}        
        animationConfig={config.gentle}
      />  
      <Link to="/HomeShop" className="buy-link">
        <div className="buy-button">Buy</div>
      </Link> 
    </>
  );
};

export default ShopCarousel;
