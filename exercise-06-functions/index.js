// Exercise 6: Functions

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
// TODO: Create a function called calculatePercentage
// Parameters: score (number), pointsPossible (number)
// Returns: percentage as a number (score / pointsPossible * 100)
// (your code here)


// Test Task 1
console.log("=== Task 1: Calculate Percentage ===");
// TODO: Uncomment the line below after creating the function
// console.log("85/100 =", calculatePercentage(85, 100) + "%");

// Task 2: Create a function to check if a submission is late
// TODO: Create a function called isSubmissionLate
// Parameters: submittedAt (string), dueAt (string)
// Returns: boolean (true if submittedAt > dueAt)
// (your code here)


// Test Task 2
console.log("\n=== Task 2: Check if Late ===");
// TODO: Uncomment the lines below after creating the function
// console.log("2024-01-16 vs 2024-01-15:", isSubmissionLate("2024-01-16", "2024-01-15"));
// console.log("2024-01-14 vs 2024-01-15:", isSubmissionLate("2024-01-14", "2024-01-15"));

// Task 3: Create a function to apply late penalty
// TODO: Create a function called applyLatePenalty
// Parameters: score (number), pointsPossible (number)
// Returns: score with 10% of pointsPossible deducted
// (your code here)


// Test Task 3
console.log("\n=== Task 3: Apply Late Penalty ===");
// TODO: Uncomment the line below after creating the function
// console.log("Score 85 with penalty (100 max):", applyLatePenalty(85, 100));

// Task 4: Create a function that uses other functions
// TODO: Create a function called calculateFinalScore
// Parameters: score, pointsPossible, submittedAt, dueAt
// Logic: If submission is late, apply penalty; otherwise return original score
// Use the isSubmissionLate and applyLatePenalty functions you created above
// (your code here)


// Test Task 4
console.log("\n=== Task 4: Calculate Final Score ===");
// TODO: Uncomment the lines below after creating the function
// console.log("On time (85/100):", calculateFinalScore(85, 100, "2024-01-14", "2024-01-15"));
// console.log("Late (85/100):", calculateFinalScore(85, 100, "2024-01-16", "2024-01-15"));

// Task 5: Create a function to find an assignment by id
// TODO: Create a function called findAssignmentById
// Parameters: assignments (array), assignmentId (number)
// Returns: the assignment object with matching id, or null if not found
// (your code here)


// Test Task 5
const assignments = [
    { id: 1, name: "Quiz 1", points_possible: 100 },
    { id: 2, name: "Quiz 2", points_possible: 75 }
];
console.log("\n=== Task 5: Find Assignment ===");
// TODO: Uncomment the line below after creating the function
// console.log("Assignment 2:", findAssignmentById(assignments, 2));

// Task 6: Create a function to get all submissions for a learner
// TODO: Create a function called getSubmissionsForLearner
// Parameters: submissions (array), learnerId (number)
// Returns: array of submissions that belong to the specified learner
// (your code here)


// Test Task 6
const submissions = [
    { learner_id: 1, assignment_id: 1, score: 95 },
    { learner_id: 1, assignment_id: 2, score: 70 },
    { learner_id: 2, assignment_id: 1, score: 85 }
];
console.log("\n=== Task 6: Get Learner Submissions ===");
// TODO: Uncomment the line below after creating the function
// console.log("Learner 1 submissions:", getSubmissionsForLearner(submissions, 1));

// Task 7: Create a function to calculate weighted average
// TODO: Create a function called calculateWeightedAverage
// Parameters: totalEarned (number), totalPossible (number)
// Returns: weighted average as a decimal (e.g., 0.85 for 85%)
// (your code here)


// Test Task 7
console.log("\n=== Task 7: Weighted Average ===");
// TODO: Uncomment the line below after creating the function
// console.log("240/300 =", calculateWeightedAverage(240, 300));

// Task 8: Create a function to validate course_id match
// TODO: Create a function called validateCourseMatch
// Parameters: courseId (number), assignmentGroupCourseId (number)
// Returns: boolean (true if they match)
// (your code here)


// Test Task 8
console.log("\n=== Task 8: Validate Course Match ===");
// TODO: Uncomment the lines below after creating the function
// console.log("101 vs 101:", validateCourseMatch(101, 101));
// console.log("101 vs 102:", validateCourseMatch(101, 102));

// Task 9: Create a comprehensive processing function
// TODO: Create a function called processLearnerSubmission
// Parameters: submission (object), assignment (object)
// Returns: an object with { assignment_id, percentage }
// Use the helper functions you created above
// (your code here)


// Test Task 9
console.log("\n=== Task 9: Process Submission ===");
const testAssignment = { id: 1, name: "Test", points_possible: 100, due_at: "2024-01-15" };
const testSubmission = { 
    learner_id: 1, 
    assignment_id: 1, 
    submission: { submitted_at: "2024-01-14", score: 85 }
};
// TODO: Uncomment the line below after creating the function
// console.log("Result:", processLearnerSubmission(testSubmission, testAssignment));
