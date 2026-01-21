// Exercise 8: Working with Dates

// Task 1: Create Date objects from strings
// TODO: Create Date objects from the following date strings
console.log("=== Task 1: Creating Date Objects ===");
const dueDateString = "2024-01-15";
const submittedDateString = "2024-01-16";

// TODO: Create Date objects
const dueDate = null; // Replace with: new Date(dueDateString)
const submittedDate = null; // Replace with: new Date(submittedDateString)

console.log("Due Date:", dueDate);
console.log("Submitted Date:", submittedDate);

// Task 2: Compare dates
// TODO: Compare two dates to see which is later
console.log("\n=== Task 2: Comparing Dates ===");
const date1 = new Date("2024-01-15");
const date2 = new Date("2024-01-16");

// TODO: Check if date2 is after date1
const isLate = null; // Replace with comparison

console.log("Is date2 after date1?", isLate);

// Task 3: Create a function to check if submission is late
// TODO: Create a function called isSubmissionLate
// Parameters: submittedAt (string), dueAt (string)
// Returns: boolean
console.log("\n=== Task 3: Check if Late ===");

function isSubmissionLate(submittedAt, dueAt) {
    // TODO: Convert strings to Date objects and compare
}

// Test the function
// TODO: Uncomment after creating function
// console.log("Submitted 2024-01-16, Due 2024-01-15:", isSubmissionLate("2024-01-16", "2024-01-15"));
// console.log("Submitted 2024-01-14, Due 2024-01-15:", isSubmissionLate("2024-01-14", "2024-01-15"));
// console.log("Submitted 2024-01-15, Due 2024-01-15:", isSubmissionLate("2024-01-15", "2024-01-15"));

// Task 4: Check if assignment is due yet
// TODO: Create a function called isAssignmentDue
// Parameters: dueAt (string), currentDate (string or Date)
// Returns: boolean (true if current date is >= due date)
console.log("\n=== Task 4: Check if Assignment Due ===");

function isAssignmentDue(dueAt, currentDate) {
    // TODO: Convert to Date objects and compare
}

// Test with current date
const today = "2026-01-21"; // Current date from context
// TODO: Uncomment after creating function
// console.log("Assignment due 2024-01-15, Today 2026-01-21:", isAssignmentDue("2024-01-15", today));
// console.log("Assignment due 2026-01-25, Today 2026-01-21:", isAssignmentDue("2026-01-25", today));

// Task 5: Filter assignments by due date
// TODO: Given an array of assignments and a current date,
// filter out assignments that are not yet due
console.log("\n=== Task 5: Filter By Due Date ===");

const assignments = [
    { id: 1, name: "Past Assignment", due_at: "2024-01-15", points_possible: 100 },
    { id: 2, name: "Another Past", due_at: "2025-12-20", points_possible: 75 },
    { id: 3, name: "Future Assignment", due_at: "2026-02-01", points_possible: 80 }
];

function filterDueAssignments(assignments, currentDate) {
    // TODO: Filter and return only assignments where due_at <= currentDate
}

// TODO: Uncomment after creating function
// const dueAssignments = filterDueAssignments(assignments, today);
// console.log("Assignments due by", today + ":");
// console.log(dueAssignments);

// Task 6: Calculate days late
// TODO: Create a function that calculates how many days late a submission is
// Parameters: submittedAt (string), dueAt (string)
// Returns: number of days (0 if on time or early)
console.log("\n=== Task 6: Calculate Days Late ===");

function calculateDaysLate(submittedAt, dueAt) {
    // TODO: Calculate difference in days
    // Hint: 1 day = 24 * 60 * 60 * 1000 milliseconds
}

// TODO: Uncomment after creating function
// console.log("Submitted 2024-01-16, Due 2024-01-15:", calculateDaysLate("2024-01-16", "2024-01-15"), "days late");
// console.log("Submitted 2024-01-18, Due 2024-01-15:", calculateDaysLate("2024-01-18", "2024-01-15"), "days late");
// console.log("Submitted 2024-01-14, Due 2024-01-15:", calculateDaysLate("2024-01-14", "2024-01-15"), "days late");

// Task 7: Comprehensive date validation
// TODO: Create a function that validates submission dates
// Check: 1) submitted_at is not in the future (after current date)
//        2) submitted_at is not before the course start date
console.log("\n=== Task 7: Validate Submission Date ===");

function validateSubmissionDate(submittedAt, currentDate, courseStartDate) {
    // TODO: Add validation logic
    // Return an object: { valid: boolean, error: string or null }
}

// TODO: Uncomment after creating function
// console.log("Valid submission:", validateSubmissionDate("2024-01-16", "2026-01-21", "2024-01-01"));
// console.log("Future submission:", validateSubmissionDate("2026-12-01", "2026-01-21", "2024-01-01"));
// console.log("Before course start:", validateSubmissionDate("2023-12-15", "2026-01-21", "2024-01-01"));

// Task 8: SBA-specific logic
// TODO: Create a function that determines if an assignment should be included in calculations
// An assignment should be included if it's due on or before the current date
console.log("\n=== Task 8: Should Include Assignment ===");

function shouldIncludeAssignment(assignment, currentDate) {
    // TODO: Return true if assignment.due_at <= currentDate
}

// TODO: Test with various assignments
// TODO: Uncomment after creating function
// for (const assignment of assignments) {
//     const include = shouldIncludeAssignment(assignment, today);
//     console.log(`${assignment.name} (${assignment.due_at}): ${include ? "INCLUDE" : "EXCLUDE"}`);
// }
