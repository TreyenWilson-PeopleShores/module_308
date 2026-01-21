// Exercise 1: Variables and Basic Operations - SOLUTION

// Task 1: Declare constants for values that won't change
const MAX_POINTS = 100;
const COURSE_NAME = "JavaScript Fundamentals";
const IS_ACTIVE = true;

// Task 2: Declare variables for values that will change
let currentScore = 85;
let totalAttempts = 1;

// Task 3: Basic arithmetic operations
const percentage = (currentScore / MAX_POINTS) * 100;

totalAttempts += 1;

const penalizedScore = currentScore - (MAX_POINTS * 0.1);

// Task 4: Comparison operations
const isPassing = currentScore >= 70;

const isPerfectScore = percentage === 85;

// Task 5: Logical operators
const canProceed = IS_ACTIVE && isPassing;

// Task 6: Weighted average calculation (SBA preview!)
const assignment1Score = 50;
const assignment1Possible = 100;
const assignment2Score = 190;
const assignment2Possible = 200;

const totalEarned = assignment1Score + assignment2Score;

const totalPossible = assignment1Possible + assignment2Possible;

const weightedAverage = (totalEarned / totalPossible) * 100;

// Display results
console.log("=== Exercise 1 Results ===");
console.log("Weighted Average:", weightedAverage.toFixed(2) + "%");
console.log("Can Proceed:", canProceed);
console.log("Is Passing:", isPassing);
console.log("Penalized Score:", penalizedScore);
