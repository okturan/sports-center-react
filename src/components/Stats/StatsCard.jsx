import React from 'react';

const StatsCard = ({ quantity, info }) => {
  return (
    <div className="stats__card">
      <p className="stats__quantity">{quantity}</p>
      <p className="stats__info">{info}</p>
    </div>
  );
};

export default StatsCard;
