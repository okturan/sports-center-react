import React from "react";
import SectionHeader from "../SectionHeader";
import Trainer from "./Trainer";

const Trainers = () => {
  const trainerData = [
    {
      name: "Jane Miller",
      specialty: "Cardio Trainer",
      image: "/src/assets/trainer1.jpg",
      alt: "Jane Miller, Cardio Trainer",
    },
    {
      name: "Robert Davis",
      specialty: "Weight Lifter",
      image: "/src/assets/trainer2.jpg",
      alt: "Robert Davis, Weight Lifter",
    },
    {
      name: "Melissa Taylor",
      specialty: "Zumba Coach",
      image: "/src/assets/trainer3.jpg",
      alt: "Melissa Taylor, Zumba Coach",
    },
  ];

  return (
    <section id="trainers" className="trainers-wrapper">
      <SectionHeader
        title="Our Trainers"
        text="Meet our team of certified trainers dedicated to helping you achieve your fitness goals. With diverse expertise and a passion for health, they are here to support and motivate you every step of the way."
      />
      <div className="trainers-content">
        {trainerData.map((trainer, index) => (
          <Trainer
            key={index}
            name={trainer.name}
            specialty={trainer.specialty}
            image={trainer.image}
            alt={trainer.alt}
          />
        ))}
      </div>
    </section>
  );
};

export default Trainers;
