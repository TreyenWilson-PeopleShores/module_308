// Exercise 2: Objects and Arrays Basics - SOLUTION

// Task 1: Create objects
const course = {
    id: 101,
    name: "JavaScript Fundamentals"
};

const assignment1 = {
    id: 1,
    name: "Variables Quiz",
    due_at: "2024-01-15",
    points_possible: 50
};

// Task 2: Access object properties
const courseName = course.name;

const maxPoints = assignment1["points_possible"];

// Task 3: Modify object properties
assignment1.points_possible = 100;

assignment1.course_id = 101;

// Task 4: Create and manipulate arrays
const assignments = [
    assignment1,
    {
        id: 2,
        name: "Loops Practice",
        due_at: "2024-01-22",
        points_possible: 75
    }
];

const firstAssignment = assignments[0];

const secondAssignmentName = assignments[1].name;

// Task 5: Add and remove array items
assignments.push({
    id: 3,
    name: "Functions Exercise",
    due_at: "2024-01-29",
    points_possible: 80
});

const removedAssignment = assignments.pop();

// Task 6: Create a learner submission object
const learnerSubmission = {
    learner_id: 1,
    assignment_id: 1,
    submission: {
        submitted_at: "2024-01-14",
        score: 95
    }
};

// Task 7: Create an array of submissions
const submissions = [
    learnerSubmission,
    {
        learner_id: 1,
        assignment_id: 2,
        submission: {
            submitted_at: "2024-01-22",
            score: 70
        }
    }
];

// Display results
console.log("=== Exercise 2 Results ===");
console.log("Course:", course);
console.log("Assignment 1:", assignment1);
console.log("Assignments Array:", assignments);
console.log("Learner Submissions:", submissions);
console.log("First Assignment Name:", firstAssignment?.name);
console.log("Removed Assignment:", removedAssignment);
