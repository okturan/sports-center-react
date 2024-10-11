import React from 'react';

const SectionHeader = ({ title, text }) => {
  return (
    <div className="section-header">
      <h2 className="section-header__title">{title}</h2>
      <p className="section-header__text">{text}</p>
    </div>
  );
};

export default SectionHeader;
