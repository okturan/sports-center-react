import React from 'react';

const ClassType = ({ label, content, isSelected, onClick }) => {
  return (
    <li>
      <button
        type="button"
        className={`class-type pill pill-lg pill-blue ${isSelected ? 'selected' : ''}`}
        data-content={content}
        aria-pressed={isSelected}
        onClick={onClick}
      >
        {label}
      </button>
    </li>
  );
};

export default ClassType;
