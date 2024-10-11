import React, { useState } from "react";
import BMIForm from "./BMIForm";
import BMIResult from "./BMIResult";
import BMIChart from "./BMIChart";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [category, setCategory] = useState("");
  const [arrowPosition, setArrowPosition] = useState(null);

  const calculateBMI = (weight, height) => {
    if (weight > 0 && height > 0) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBMI(bmiValue.toFixed(1));

      let bmiCategory = "";
      let positionPercentage;

      // Determine BMI category and position for the arrow on the chart
      if (bmiValue < 18.5) {
        bmiCategory = "Underweight";
        positionPercentage = mapRange(bmiValue, 13.5, 18.5, 2, 20);
      } else if (bmiValue < 25) {
        bmiCategory = "Normal weight";
        positionPercentage = mapRange(bmiValue, 18.5, 25, 21.5, 39.5);
      } else if (bmiValue < 30) {
        bmiCategory = "Overweight";
        positionPercentage = mapRange(bmiValue, 25, 30, 41, 59);
      } else if (bmiValue < 35) {
        bmiCategory = "Obese";
        positionPercentage = mapRange(bmiValue, 30, 35, 60.5, 78.3);
      } else {
        bmiCategory = "Extremely Obese";
        positionPercentage = mapRange(bmiValue, 35, 40.5, 79.9, 97.7);
      }

      setCategory(bmiCategory);
      setArrowPosition(Math.min(97.7, Math.max(2, positionPercentage)));
    } else {
      setBMI(null);
      setCategory("");
      setArrowPosition(null);
    }
  };

  const mapRange = (value, inMin, inMax, outMin, outMax) => {
    return ((value - inMin) / (inMax - inMin)) * (outMax - outMin) + outMin;
  };

  return (
    <section id="bmi" className="bmi-calculator-wrapper">
      <div className="bmi-calculator__content">
        <h2>BMI Calculator</h2>
        <p>Calculate your Body Mass Index (BMI) to understand your body weight category.</p>
        <br />
        <p>Enter your weight in kilograms and height in centimeters to get your BMI result.</p>
        <br />
        <BMIForm
          weight={weight}
          height={height}
          setWeight={setWeight}
          setHeight={setHeight}
          calculateBMI={calculateBMI}
        />
      </div>
      <div className="bmi-calculator__result">
        <BMIChart arrowPosition={arrowPosition} />
        <BMIResult bmi={bmi} category={category} />
      </div>
    </section>
  );
};

export default BMICalculator;
