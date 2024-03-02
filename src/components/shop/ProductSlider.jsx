import React from 'react';

const ProductSlider = ({ products }) => {
  return (
    <div className="product-slider">
      {products.map((product, index) => (
        <div key={index} className="product-slide">
          <img src={product.image} alt={product.name} />
          <p>{product.name}</p>
          <p>{product.price}</p>
          
        </div>
      ))}
    </div>
  );
};

export default ProductSlider;
