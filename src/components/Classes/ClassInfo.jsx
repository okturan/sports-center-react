import React from 'react';

const ClassInfo = ({ info, className }) => {
  return (
    <div className={className}>
      <div className="class__text">
        <h3>{info.title}</h3>
        <p>{info.description}</p>
        {info.schedule && (
          <>
            <h3>Schedule</h3>
            <p>{info.schedule}</p>
          </>
        )}
        {info.tips && (
          <>
            <h3>Practice Tips</h3>
            <p>{info.tips}</p>
          </>
        )}
      </div>
      <div className="class__image">
        <img src={info.image} alt={info.alt} />
      </div>
    </div>
  );
};

export default ClassInfo;
