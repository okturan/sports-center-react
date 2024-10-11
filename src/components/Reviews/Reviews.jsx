import React from 'react';
import SectionHeader from '../SectionHeader';
import Review from './Review';

const Reviews = () => {
  const reviewData = [
    {
      id: 1,
      name: 'Michael Lee',
      title: 'Software Engineer',
      image: '/src/assets/client1.jpg',
      reviewText: "Joining the Sports Center has been the best decision I've made for my health. The trainers are knowledgeable and truly care about your progress.",
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      title: 'Marketing Manager',
      image: '/src/assets/client2.jpg',
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
