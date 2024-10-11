import React from 'react';
import StatsCard from './StatsCard';

const Stats = () => {
  const statsData = [
    { quantity: 325, info: 'Courses' },
    { quantity: 405, info: 'Workouts' },
    { quantity: 305, info: 'Working Hours' },
    { quantity: 705, info: 'Happy Clients' }
  ];

  return (
    <section id="stats" className="stats-wrapper">
      <div className="stats-content">
        {statsData.map((stat, index) => (
          <StatsCard key={index} quantity={stat.quantity} info={stat.info} />
        ))}
      </div>
    </section>
  );
};

export default Stats;
