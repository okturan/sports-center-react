import React from 'react';

const Product = ({ title, price, image, alt }) => {
  return (
    <div className="product">
      <img src={image} alt={alt} className="product__image" />
      <h3 className="product__title">{title}</h3>
      <p className="product__price">{price}</p>
      <a href="" className="product__cart">Add to Cart</a>
    </div>
  );
};

export default Product;
