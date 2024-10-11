import React from 'react';

const Client = ({ name, title, image }) => {
  return (
    <div className="client">
      <div className="client__pfp">
        <img src={image} alt={name} className="client__image" />
      </div>
      <div className="client__info">
        <h4 className="client__name">{name}</h4>
        <p className="client__title">{title}</p>
      </div>
    </div>
  );
};

export default Client;
