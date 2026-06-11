// src/registry.js

// 1. Pre-authorized list of your classmate's serial tokens/numbers 
// Add your classmates' registration endings here
export const ALLOWED_CS_STUDENTS = [
  "24pwbcs1196", // Your registration number
  "24pwbcs1100",
  "24pwbcs1101",
  "24pwbcs1102"
];

// 2. Local Storage Array to track who has completed the test during this session
export const checkAttemptedStatus = (regNo) => {
  const attempts = JSON.parse(localStorage.getItem("quiz_attempts") || "[]");
  return attempts.includes(regNo.toLowerCase().trim());
};

export const saveAttemptToDatabase = (regNo) => {
  const attempts = JSON.parse(localStorage.getItem("quiz_attempts") || "[]");
  const cleanReg = regNo.toLowerCase().trim();
  if (!attempts.includes(cleanReg)) {
    attempts.push(cleanReg);
    localStorage.setItem("quiz_attempts", JSON.stringify(attempts));
  }
};