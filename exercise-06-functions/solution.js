// Exercise 6: Functions - SOLUTION

// Sample data for testing
const sampleAssignment = {
    id: 1,
    name: "Variables Quiz",
    points_possible: 100
};

const sampleSubmission = {
    learner_id: 1,
    assignment_id: 1,
    score: 85
};

// Task 1: Create a function to calculate percentage
function calculatePercentage(score, pointsPossible) {
    return (score / pointsPossible) * 100;
}

// Test Task 1
console.log("=== Task 1: Calculate Percentage ===");
console.log("85/100 =", calculatePercentage(85, 100) + "%");

// Task 2: Create a function to check if a submission is late
function isSubmissionLate(submittedAt, dueAt) {
    return submittedAt > dueAt;
}

// Test Task 2
console.log("\n=== Task 2: Check if Late ===");
console.log("2024-01-16 vs 2024-01-15:", isSubmissionLate("2024-01-16", "2024-01-15"));
console.log("2024-01-14 vs 2024-01-15:", isSubmissionLate("2024-01-14", "2024-01-15"));

// Task 3: Create a function to apply late penalty
function applyLatePenalty(score, pointsPossible) {
    return score - (pointsPossible * 0.1);
}

// Test Task 3
console.log("\n=== Task 3: Apply Late Penalty ===");
console.log("Score 85 with penalty (100 max):", applyLatePenalty(85, 100));

// Task 4: Create a function that uses other functions
function calculateFinalScore(score, pointsPossible, submittedAt, dueAt) {
    if (isSubmissionLate(submittedAt, dueAt)) {
        return applyLatePenalty(score, pointsPossible);
    }
    return score;
}

// Test Task 4
console.log("\n=== Task 4: Calculate Final Score ===");
console.log("On time (85/100):", calculateFinalScore(85, 100, "2024-01-14", "2024-01-15"));
console.log("Late (85/100):", calculateFinalScore(85, 100, "2024-01-16", "2024-01-15"));

// Task 5: Create a function to find an assignment by id
function findAssignmentById(assignments, assignmentId) {
    for (const assignment of assignments) {
        if (assignment.id === assignmentId) {
            return assignment;
        }
    }
    return null;
}

// Test Task 5
const assignments = [
    { id: 1, name: "Quiz 1", points_possible: 100 },
    { id: 2, name: "Quiz 2", points_possible: 75 }
];
console.log("\n=== Task 5: Find Assignment ===");
console.log("Assignment 2:", findAssignmentById(assignments, 2));

// Task 6: Create a function to get all submissions for a learner
function getSubmissionsForLearner(submissions, learnerId) {
    const learnerSubmissions = [];
    for (const submission of submissions) {
        if (submission.learner_id === learnerId) {
            learnerSubmissions.push(submission);
        }
    }
    return learnerSubmissions;
}

// Test Task 6
const submissions = [
    { learner_id: 1, assignment_id: 1, score: 95 },
    { learner_id: 1, assignment_id: 2, score: 70 },
    { learner_id: 2, assignment_id: 1, score: 85 }
];
console.log("\n=== Task 6: Get Learner Submissions ===");
console.log("Learner 1 submissions:", getSubmissionsForLearner(submissions, 1));

// Task 7: Create a function to calculate weighted average
function calculateWeightedAverage(totalEarned, totalPossible) {
    return totalEarned / totalPossible;
}

// Test Task 7
console.log("\n=== Task 7: Weighted Average ===");
console.log("240/300 =", calculateWeightedAverage(240, 300));

// Task 8: Create a function to validate course_id match
function validateCourseMatch(courseId, assignmentGroupCourseId) {
    return courseId === assignmentGroupCourseId;
}

// Test Task 8
console.log("\n=== Task 8: Validate Course Match ===");
console.log("101 vs 101:", validateCourseMatch(101, 101));
console.log("101 vs 102:", validateCourseMatch(101, 102));

// Task 9: Create a comprehensive processing function
function processLearnerSubmission(submission, assignment) {
    const finalScore = calculateFinalScore(
        submission.submission.score,
        assignment.points_possible,
        submission.submission.submitted_at,
        assignment.due_at
    );
    const percentage = finalScore / assignment.points_possible;
    
    return {
        assignment_id: assignment.id,
        percentage: percentage
    };
}

// Test Task 9
console.log("\n=== Task 9: Process Submission ===");
const testAssignment = { id: 1, name: "Test", points_possible: 100, due_at: "2024-01-15" };
const testSubmission = { 
    learner_id: 1, 
    assignment_id: 1, 
    submission: { submitted_at: "2024-01-14", score: 85 }
};
console.log("Result:", processLearnerSubmission(testSubmission, testAssignment));
