// Exercise 1: Variables and Basic Operations

// Task 1: Declare constants for values that won't change
// TODO: Create a constant called MAX_POINTS with value 100
// TODO: Create a constant called COURSE_NAME with value "JavaScript Fundamentals"
// TODO: Create a constant called IS_ACTIVE with value true


// Task 2: Declare variables for values that will change
// TODO: Create a variable called currentScore with value 85
// TODO: Create a variable called totalAttempts with value 1


// Task 3: Basic arithmetic operations
// TODO: Calculate the percentage: (currentScore / MAX_POINTS) * 100
// Store it in a variable called percentage


// TODO: Increase totalAttempts by 1 using the += operator


// TODO: Calculate a late penalty: subtract 10% of MAX_POINTS from currentScore
// Store the result in a variable called penalizedScore
// (Hint: 10% of MAX_POINTS is MAX_POINTS * 0.1)


// Task 4: Comparison operations
// TODO: Check if currentScore is greater than or equal to 70
// Store the result in a variable called isPassing


// TODO: Check if percentage is exactly equal to 85
// Store the result in a variable called isPerfectScore


// Task 5: Logical operators
// TODO: Check if IS_ACTIVE is true AND isPassing is true
// Store the result in a variable called canProceed


// Task 6: Weighted average calculation (SBA preview!)
// Imagine you have two assignments:
const assignment1Score = 50;
const assignment1Possible = 100;
const assignment2Score = 190;
const assignment2Possible = 200;

// TODO: Calculate the total points earned
// Store it in a variable called totalEarned


// TODO: Calculate the total points possible
// Store it in a variable called totalPossible


// TODO: Calculate the weighted average as a percentage
// Store it in a variable called weightedAverage
// Formula: (totalEarned / totalPossible) * 100


// Display results (don't modify this part)
console.log("=== Exercise 1 Results ===");
console.log("Weighted Average:", weightedAverage ? weightedAverage.toFixed(2) + "%" : "Not calculated");
console.log("Can Proceed:", canProceed);
console.log("Is Passing:", isPassing);
console.log("Penalized Score:", penalizedScore);
