import React, { useState } from "react";
import SectionHeader from "../SectionHeader";
import ClassType from "./ClassType";
import ClassInfo from "./ClassInfo";

// Import images
import yoga from "/src/assets/yoga.jpg";
import group from "/src/assets/group.webp";
import solo from "/src/assets/solo.jpg";
import stretching from "/src/assets/stret.webp";

const Classes = () => {
  const classTypes = [
    { label: "Yoga", content: "yoga" },
    { label: "Group", content: "group" },
    { label: "Solo", content: "solo" },
    { label: "Stretching", content: "stretching" },
  ];

  const classInfoData = {
    yoga: {
      title: "Why Choose Yoga?",
      description: `Yoga is an excellent way to enhance flexibility, build strength, and improve your mental well-being. 
                    Practicing yoga regularly can help relieve stress, increase focus, and maintain a balanced lifestyle.`,
      schedule: `
        Saturday-Sunday: 8:00am - 10:00am\n
        Monday-Tuesday: 10:00am - 12:00pm\n
        Wednesday-Friday: 3:00pm - 6:00pm`,
      image: yoga,
      alt: "Woman doing yoga",
    },
    group: {
      title: "Group Sessions",
      description: `Group sessions are a fantastic way to stay motivated and connect with others. Practicing with a group 
                    helps build a sense of community and accountability, making your fitness journey more enjoyable.`,
      schedule: `
        Saturday: 10:00am - 12:00pm\n
        Wednesday: 5:00pm - 7:00pm`,
      image: group,
      alt: "Group exercise session",
    },
    solo: {
      title: "Solo Practice",
      description: `Solo practice allows you to focus on your individual needs and goals. It offers the flexibility to 
                    progress at your own pace, ensuring a personalized and mindful experience.`,
      tips: `Find a quiet space, set your own pace, and create a routine that works best for you. 
             Solo yoga is all about listening to your body and growing at your own rhythm.`,
      image: solo,
      alt: "Person on a treadmill",
    },
    stretching: {
      title: "Stretching Sessions",
      description: `Stretching is a crucial component of maintaining flexibility and preventing injuries. Whether as a warm-up
                    or cool-down, stretching helps your muscles recover and reduces tension.`,
      schedule: `
        Monday: 9:00am - 10:00am\n
        Thursday: 4:00pm - 5:00pm`,
      image: stretching,
      alt: "Person stretching",
    },
  };

  const [selectedClass, setSelectedClass] = useState("yoga");

  return (
    <section id="classes" className="classes-wrapper">
      <SectionHeader
        title="Our Classes"
        text="Discover a variety of classes designed to suit all fitness levels. Whether you're a beginner or a seasoned athlete, we have something for everyone."
      />
      <div className="classes__types">
        <ul>
          {classTypes.map((type, index) => (
            <ClassType
              key={index}
              label={type.label}
              content={type.content}
              isSelected={selectedClass === type.content}
              onClick={() => setSelectedClass(type.content)}
            />
          ))}
        </ul>
        {Object.keys(classInfoData).map((key) => (
          <ClassInfo
            key={key}
            className={`class__info ${key} ${selectedClass === key ? "active" : ""}`}
            info={classInfoData[key]}
          />
        ))}
      </div>
    </section>
  );
};

export default Classes;
