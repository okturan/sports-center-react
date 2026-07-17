export const BMI_SEGMENTS = [
  { label: "Underweight", min: 13.5, max: 18.5 },
  { label: "Healthy weight", min: 18.5, max: 25 },
  { label: "Overweight", min: 25, max: 30 },
  { label: "Class 1 obesity", min: 30, max: 35 },
  { label: "Class 2 obesity", min: 35, max: 40 },
  { label: "Class 3 obesity", min: 40, max: 45.5 },
];

export function classifyAdultBmi(bmi) {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Healthy weight";
  if (bmi < 30) return "Overweight";
  if (bmi < 35) return "Class 1 obesity";
  if (bmi < 40) return "Class 2 obesity";
  return "Class 3 obesity (severe obesity)";
}

export function positionForBmi(bmi) {
  const segmentIndex = BMI_SEGMENTS.findIndex(({ max }) => bmi < max);
  const index = segmentIndex === -1 ? BMI_SEGMENTS.length - 1 : segmentIndex;
  const segment = BMI_SEGMENTS[index];
  const progress = Math.min(1, Math.max(0, (bmi - segment.min) / (segment.max - segment.min)));
  return Math.min(99, Math.max(1, ((index + progress) / BMI_SEGMENTS.length) * 100));
}

export function calculateAdultBmi(weightKg, heightCm) {
  const weight = Number(weightKg);
  const height = Number(heightCm);
  if (!Number.isFinite(weight) || !Number.isFinite(height) || weight <= 0 || height <= 0) return null;

  const bmi = weight / ((height / 100) ** 2);
  return {
    value: bmi.toFixed(1),
    category: classifyAdultBmi(bmi),
    position: positionForBmi(bmi),
  };
}
