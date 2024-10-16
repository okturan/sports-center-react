import React from 'react';
import SectionHeader from '../SectionHeader';
import Review from './Review';
import client1 from '/src/assets/client1.jpg';
import client2 from '/src/assets/client2.jpg';

const Reviews = () => {
  const reviewData = [
    {
      id: 1,
      name: 'Michael Lee',
      title: 'Software Engineer',
      image: client1,
      reviewText: "Joining the Sports Center has been the best decision I've made for my health. The trainers are knowledgeable and truly care about your progress.",
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      title: 'Marketing Manager',
      image: client2,
      reviewText: "The group classes are fun and challenging. I've met amazing people and achieved goals I never thought possible.",
    },
  ];

  return (
    <section id="reviews" className="reviews-wrapper">
      <SectionHeader
        title="Reviews"
        text="Hear from our satisfied members who have transformed their lives with our programs and support."
      />
      <div className="reviews-content">
        {reviewData.map((review) => (
          <Review
            key={review.id}
            name={review.name}
            title={review.title}
            image={review.image}
            reviewText={review.reviewText}
          />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
