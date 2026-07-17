import React, { useState } from "react";
import BMIForm from "./BMIForm";
import BMIResult from "./BMIResult";
import BMIChart from "./BMIChart";
import { calculateAdultBmi } from "../../bmi";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [category, setCategory] = useState("");
  const [arrowPosition, setArrowPosition] = useState(null);

  const calculateBMI = (weight, height) => {
    const result = calculateAdultBmi(weight, height);
    if (!result) {
      setBMI(null);
      setCategory("");
      setArrowPosition(null);
      return;
    }

    setBMI(result.value);
    setCategory(result.category);
    setArrowPosition(result.position);
  };

  return (
    <section id="bmi" className="bmi-calculator-wrapper">
      <div className="bmi-calculator__content">
        <h2>BMI Calculator</h2>
        <p>Estimate adult Body Mass Index (BMI) as a weight-status screening measure.</p>
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
        <p className="bmi-disclaimer">
          For adults age 20 and older. BMI is a screening measure, not a diagnosis or substitute for professional medical advice.
        </p>
      </div>
      <div className="bmi-calculator__result">
        <BMIChart arrowPosition={arrowPosition} />
        <BMIResult bmi={bmi} category={category} />
      </div>
    </section>
  );
};

export default BMICalculator;
