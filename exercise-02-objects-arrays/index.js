// Exercise 2: Objects and Arrays Basics

// Task 1: Create objects
// TODO: Create a course object with properties: id (number), name (string)
// Example: { id: 101, name: "JavaScript Fundamentals" }
const course = {
    // Add properties here
    id: 101,
    name: "Javascript Fundamentals",
};

// TODO: Create an assignment object with properties:
// id, name, due_at (date string), points_possible
// Example: { id: 1, name: "Variables Quiz", due_at: "2024-01-15", points_possible: 50 }
const assignment1 = {
    // Add properties here
    id: 1,
    name: "Variables Quiz",
    due_at: "2024-01-15",
    points_possible: 50,
};

// Task 2: Access object properties
// TODO: Access the course name using dot notation and store it in a variable
const courseName = course.name; // Replace null with the correct access

// TODO: Access the assignment points_possible using bracket notation
const maxPoints = assignment1["points_possible"]; // Replace null with the correct access

// Task 3: Modify object properties
// TODO: Change the assignment's points_possible to 100
assignment1.points_possible = 100;

// TODO: Add a new property 'course_id' to assignment1 with value 101
assignment1.course_id = 101;

// Task 4: Create and manipulate arrays
// TODO: Create an array called assignments containing assignment1 and at least one more assignment object
const assignments = [
    assignment1.assignment = "N/A",
    assignment1.assignment2 = "How to bake deep dish pizza 101" // Is this what we're supposed to do??
];

// TODO: Access the first assignment from the array
const firstAssignment = assignments.assignment; // Replace null

// TODO: Access the name of the second assignment
const secondAssignmentName = assignments.assignment2; // Replace null

// Task 5: Add and remove array items
// TODO: Add a new assignment object to the end of the assignments array using push()
assignments.push("Python 101");

// TODO: Remove the last assignment using pop() and store it in a variable
const removedAssignment = assignments.pop(); // Replace null

// Task 6: Create a learner submission object
// TODO: Create a submission object with structure:
// { learner_id, assignment_id, submission: { submitted_at, score } }
const learnerSubmission = {
    // Add properties here
    learner_id: 1,
    assignment_id: 2,
    submission: {submitted_at: "date", score: 1}
};

// Task 7: Create an array of submissions
// TODO: Create an array with at least 2 learner submission objects
const submissions = [
    // Add submission objects here
    {included: true, time: "date"},
    {included: true, time: "date"},
];

// Display results (don't modify this part)
console.log("=== Exercise 2 Results ===");
console.log("Course:", course);
console.log("Assignment 1:", assignment1);
console.log("Assignments Array:", assignments);
console.log("Learner Submissions:", submissions);
console.log("First Assignment Name:", firstAssignment?.name);
console.log("Removed Assignment:", removedAssignment);
