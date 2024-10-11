import React from 'react';

const ClassType = ({ label, content, isSelected, onClick }) => {
  return (
    <li
      className={`pill pill-lg pill-blue ${isSelected ? 'selected' : ''}`}
      data-content={content}
      onClick={onClick}
    >
      {label}
    </li>
  );
};

export default ClassType;
