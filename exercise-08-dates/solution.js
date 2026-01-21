// Exercise 8: Working with Dates - SOLUTION

// Task 1: Create Date objects from strings
console.log("=== Task 1: Creating Date Objects ===");
const dueDateString = "2024-01-15";
const submittedDateString = "2024-01-16";

const dueDate = new Date(dueDateString);
const submittedDate = new Date(submittedDateString);

console.log("Due Date:", dueDate);
console.log("Submitted Date:", submittedDate);

// Task 2: Compare dates
console.log("\n=== Task 2: Comparing Dates ===");
const date1 = new Date("2024-01-15");
const date2 = new Date("2024-01-16");

const isLate = date2 > date1;

console.log("Is date2 after date1?", isLate);

// Task 3: Create a function to check if submission is late
console.log("\n=== Task 3: Check if Late ===");

function isSubmissionLate(submittedAt, dueAt) {
    const submitted = new Date(submittedAt);
    const due = new Date(dueAt);
    return submitted > due;
}

console.log("Submitted 2024-01-16, Due 2024-01-15:", isSubmissionLate("2024-01-16", "2024-01-15"));
console.log("Submitted 2024-01-14, Due 2024-01-15:", isSubmissionLate("2024-01-14", "2024-01-15"));
console.log("Submitted 2024-01-15, Due 2024-01-15:", isSubmissionLate("2024-01-15", "2024-01-15"));

// Task 4: Check if assignment is due yet
console.log("\n=== Task 4: Check if Assignment Due ===");

function isAssignmentDue(dueAt, currentDate) {
    const due = new Date(dueAt);
    const current = new Date(currentDate);
    return current >= due;
}

const today = "2026-01-21";
console.log("Assignment due 2024-01-15, Today 2026-01-21:", isAssignmentDue("2024-01-15", today));
console.log("Assignment due 2026-01-25, Today 2026-01-21:", isAssignmentDue("2026-01-25", today));

// Task 5: Filter assignments by due date
console.log("\n=== Task 5: Filter By Due Date ===");

const assignments = [
    { id: 1, name: "Past Assignment", due_at: "2024-01-15", points_possible: 100 },
    { id: 2, name: "Another Past", due_at: "2025-12-20", points_possible: 75 },
    { id: 3, name: "Future Assignment", due_at: "2026-02-01", points_possible: 80 }
];

function filterDueAssignments(assignments, currentDate) {
    const current = new Date(currentDate);
    const dueAssignments = [];
    
    for (const assignment of assignments) {
        const due = new Date(assignment.due_at);
        if (due <= current) {
            dueAssignments.push(assignment);
        }
    }
    
    return dueAssignments;
}

const dueAssignments = filterDueAssignments(assignments, today);
console.log("Assignments due by", today + ":");
console.log(dueAssignments);

// Task 6: Calculate days late
console.log("\n=== Task 6: Calculate Days Late ===");

function calculateDaysLate(submittedAt, dueAt) {
    const submitted = new Date(submittedAt);
    const due = new Date(dueAt);
    
    const diffTime = submitted - due;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays > 0 ? diffDays : 0;
}

console.log("Submitted 2024-01-16, Due 2024-01-15:", calculateDaysLate("2024-01-16", "2024-01-15"), "days late");
console.log("Submitted 2024-01-18, Due 2024-01-15:", calculateDaysLate("2024-01-18", "2024-01-15"), "days late");
console.log("Submitted 2024-01-14, Due 2024-01-15:", calculateDaysLate("2024-01-14", "2024-01-15"), "days late");

// Task 7: Comprehensive date validation
console.log("\n=== Task 7: Validate Submission Date ===");

function validateSubmissionDate(submittedAt, currentDate, courseStartDate) {
    const submitted = new Date(submittedAt);
    const current = new Date(currentDate);
    const courseStart = new Date(courseStartDate);
    
    if (submitted > current) {
        return { valid: false, error: "Submission date cannot be in the future" };
    }
    
    if (submitted < courseStart) {
        return { valid: false, error: "Submission date cannot be before course start" };
    }
    
    return { valid: true, error: null };
}

console.log("Valid submission:", validateSubmissionDate("2024-01-16", "2026-01-21", "2024-01-01"));
console.log("Future submission:", validateSubmissionDate("2026-12-01", "2026-01-21", "2024-01-01"));
console.log("Before course start:", validateSubmissionDate("2023-12-15", "2026-01-21", "2024-01-01"));

// Task 8: SBA-specific logic
console.log("\n=== Task 8: Should Include Assignment ===");

function shouldIncludeAssignment(assignment, currentDate) {
    const due = new Date(assignment.due_at);
    const current = new Date(currentDate);
    return due <= current;
}

for (const assignment of assignments) {
    const include = shouldIncludeAssignment(assignment, today);
    console.log(`${assignment.name} (${assignment.due_at}): ${include ? "INCLUDE" : "EXCLUDE"}`);
}
