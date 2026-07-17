import assert from "node:assert/strict";
import test from "node:test";
import { calculateAdultBmi, classifyAdultBmi, positionForBmi } from "./bmi.js";

test("adult categories change at the documented boundaries", () => {
  assert.equal(classifyAdultBmi(18.49), "Underweight");
  assert.equal(classifyAdultBmi(18.5), "Healthy weight");
  assert.equal(classifyAdultBmi(25), "Overweight");
  assert.equal(classifyAdultBmi(30), "Class 1 obesity");
  assert.equal(classifyAdultBmi(35), "Class 2 obesity");
  assert.equal(classifyAdultBmi(40), "Class 3 obesity (severe obesity)");
});

test("metric BMI calculation returns a rounded value, category, and bounded chart position", () => {
  assert.deepEqual(calculateAdultBmi(70, 175), {
    value: "22.9",
    category: "Healthy weight",
    position: positionForBmi(70 / (1.75 ** 2)),
  });
  assert.equal(calculateAdultBmi("", 175), null);
  assert.equal(calculateAdultBmi(70, 0), null);
  assert.equal(calculateAdultBmi("not-a-number", 175), null);
  assert.equal(positionForBmi(5), 1);
  assert.equal(positionForBmi(100), 99);
});
