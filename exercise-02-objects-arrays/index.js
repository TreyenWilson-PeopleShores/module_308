// Exercise 2: Objects and Arrays Basics

// Task 1: Create objects
// TODO: Create a course object with properties: id (number), name (string)
// Example: { id: 101, name: "JavaScript Fundamentals" }
const course = {
    // Add properties here
};

// TODO: Create an assignment object with properties:
// id, name, due_at (date string), points_possible
// Example: { id: 1, name: "Variables Quiz", due_at: "2024-01-15", points_possible: 50 }
const assignment1 = {
    // Add properties here
};

// Task 2: Access object properties
// TODO: Access the course name using dot notation and store it in a variable
const courseName = null; // Replace null with the correct access

// TODO: Access the assignment points_possible using bracket notation
const maxPoints = null; // Replace null with the correct access

// Task 3: Modify object properties
// TODO: Change the assignment's points_possible to 100
// (your code here)

// TODO: Add a new property 'course_id' to assignment1 with value 101
// (your code here)

// Task 4: Create and manipulate arrays
// TODO: Create an array called assignments containing assignment1 and at least one more assignment object
const assignments = [
    // Add assignment objects here
];

// TODO: Access the first assignment from the array
const firstAssignment = null; // Replace null

// TODO: Access the name of the second assignment
const secondAssignmentName = null; // Replace null

// Task 5: Add and remove array items
// TODO: Add a new assignment object to the end of the assignments array using push()
// (your code here)

// TODO: Remove the last assignment using pop() and store it in a variable
const removedAssignment = null; // Replace null

// Task 6: Create a learner submission object
// TODO: Create a submission object with structure:
// { learner_id, assignment_id, submission: { submitted_at, score } }
const learnerSubmission = {
    // Add properties here
};

// Task 7: Create an array of submissions
// TODO: Create an array with at least 2 learner submission objects
const submissions = [
    // Add submission objects here
];

// Display results (don't modify this part)
console.log("=== Exercise 2 Results ===");
console.log("Course:", course);
console.log("Assignment 1:", assignment1);
console.log("Assignments Array:", assignments);
console.log("Learner Submissions:", submissions);
console.log("First Assignment Name:", firstAssignment?.name);
console.log("Removed Assignment:", removedAssignment);
