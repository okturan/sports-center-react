import React from 'react';
import Client from './Client';

const Review = ({ name, title, image, reviewText }) => {
  return (
    <div className="review">
      <Client name={name} title={title} image={image} />
      <div className="review__text">"{reviewText}"</div>
    </div>
  );
};

export default Review;
