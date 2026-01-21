// Exercise 3: Control Flow - SOLUTION

const course = { id: 101, name: "JavaScript Fundamentals" };
const assignmentGroup = { 
    id: 1, 
    name: "Week 1 Assignments", 
    course_id: 101,
    group_weight: 25 
};

const assignment = {
    id: 1,
    name: "Variables Quiz",
    due_at: "2024-01-15",
    points_possible: 100
};

const submission = {
    learner_id: 1,
    assignment_id: 1,
    submission: {
        submitted_at: "2024-01-16",
        score: 85
    }
};

// Task 1: Validate course_id match
let isValidGroup;
if (assignmentGroup.course_id === course.id) {
    isValidGroup = true;
} else {
    isValidGroup = false;
}

// Task 2: Check if assignment is late
let isLate;
if (submission.submission.submitted_at > assignment.due_at) {
    isLate = true;
} else {
    isLate = false;
}

// Task 3: Apply late penalty
let finalScore;
if (isLate) {
    finalScore = submission.submission.score - (assignment.points_possible * 0.1);
} else {
    finalScore = submission.submission.score;
}

// Task 4: Determine letter grade using if/else
const percentage = (finalScore / assignment.points_possible) * 100;
let letterGrade;
if (percentage >= 90) {
    letterGrade = "A";
} else if (percentage >= 80) {
    letterGrade = "B";
} else if (percentage >= 70) {
    letterGrade = "C";
} else if (percentage >= 60) {
    letterGrade = "D";
} else {
    letterGrade = "F";
}

// Task 5: Use a switch statement to categorize assignment difficulty
let difficulty;
switch (true) {
    case (assignment.points_possible <= 50):
        difficulty = "Easy";
        break;
    case (assignment.points_possible <= 100):
        difficulty = "Medium";
        break;
    case (assignment.points_possible <= 150):
        difficulty = "Hard";
        break;
    default:
        difficulty = "Very Hard";
        break;
}

// Task 6: Nested if/else - Determine if submission should count
let shouldCount;
if (isValidGroup) {
    // Assuming all assignments are past due for this exercise
    shouldCount = true;
} else {
    shouldCount = false;
}

// Task 7: Complex validation
let isValidSubmission;
if (assignment.points_possible > 0 && 
    submission.submission.score >= 0 && 
    submission.submission.score <= assignment.points_possible &&
    submission.learner_id != null) {
    isValidSubmission = true;
} else {
    isValidSubmission = false;
}

// Display results
console.log("=== Exercise 3 Results ===");
console.log("Is Valid Group:", isValidGroup);
console.log("Is Late:", isLate);
console.log("Final Score:", finalScore, "out of", assignment.points_possible);
console.log("Percentage:", percentage.toFixed(2) + "%");
console.log("Letter Grade:", letterGrade);
console.log("Difficulty:", difficulty);
console.log("Should Count:", shouldCount);
console.log("Is Valid Submission:", isValidSubmission);
