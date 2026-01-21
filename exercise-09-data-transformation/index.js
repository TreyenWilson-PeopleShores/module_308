// Exercise 9: Data Transformation and Aggregation

// Sample data
const assignments = [
    { id: 1, name: "Variables Quiz", due_at: "2024-01-15", points_possible: 100 },
    { id: 2, name: "Loops Practice", due_at: "2024-01-22", points_possible: 150 },
    { id: 3, name: "Functions Test", due_at: "2024-01-29", points_possible: 50 }
];

const submissions = [
    { learner_id: 125, assignment_id: 1, submission: { submitted_at: "2024-01-15", score: 95 } },
    { learner_id: 125, assignment_id: 2, submission: { submitted_at: "2024-01-22", score: 135 } },
    { learner_id: 125, assignment_id: 3, submission: { submitted_at: "2024-01-29", score: 45 } },
    { learner_id: 132, assignment_id: 1, submission: { submitted_at: "2024-01-15", score: 80 } },
    { learner_id: 132, assignment_id: 2, submission: { submitted_at: "2024-01-23", score: 140 } }
];

// Task 1: Get unique learner IDs
// TODO: Extract all unique learner_id values from submissions
console.log("=== Task 1: Unique Learner IDs ===");

function getUniqueLearnerIds(submissions) {
    // TODO: Loop through submissions and collect unique learner_id values
    // Hint: Use an array and check if ID already exists before adding
}

// TODO: Uncomment after creating function
// const learnerIds = getUniqueLearnerIds(submissions);
// console.log("Unique Learner IDs:", learnerIds);

// Task 2: Get submissions for a specific learner
// TODO: Filter submissions to get only those for a specific learner
console.log("\n=== Task 2: Filter by Learner ===");

function getSubmissionsForLearner(submissions, learnerId) {
    // TODO: Return array of submissions where learner_id matches
}

// TODO: Uncomment after creating function
// const learner125Submissions = getSubmissionsForLearner(submissions, 125);
// console.log("Learner 125 submissions:", learner125Submissions);

// Task 3: Calculate percentage for each submission
// TODO: For each submission, calculate the percentage score
console.log("\n=== Task 3: Calculate Percentages ===");

function calculateSubmissionPercentages(submissions, assignments) {
    // TODO: For each submission, find matching assignment and calculate percentage
    // Return array of objects: { learner_id, assignment_id, percentage }
}

// TODO: Uncomment after creating function
// const percentages = calculateSubmissionPercentages(submissions, assignments);
// console.log("Percentages:", percentages);

// Task 4: Calculate weighted average for a learner
// TODO: Calculate weighted average across all assignments for one learner
console.log("\n=== Task 4: Weighted Average ===");

function calculateWeightedAverage(learnerSubmissions, assignments) {
    // TODO: 
    // 1. For each submission, find the matching assignment
    // 2. Sum up all scores
    // 3. Sum up all points_possible
    // 4. Return totalScore / totalPossible
}

// TODO: Uncomment after creating function
// const avg = calculateWeightedAverage(learner125Submissions, assignments);
// console.log("Learner 125 weighted average:", avg);

// Task 5: Build a result object for one learner
// TODO: Create an object in the SBA format for one learner
console.log("\n=== Task 5: Build Result Object ===");

function buildLearnerResult(learnerId, learnerSubmissions, assignments) {
    // TODO: Create object with structure:
    // {
    //   id: learnerId,
    //   avg: weighted average,
    //   1: percentage for assignment 1,
    //   2: percentage for assignment 2,
    //   etc.
    // }
    
    const result = {
        id: learnerId,
        avg: 0
    };
    
    // TODO: Calculate average
    
    // TODO: For each submission, add assignment_id: percentage to result
    
    return result;
}

// TODO: Uncomment after creating function
// const learner125Result = buildLearnerResult(125, learner125Submissions, assignments);
// console.log("Learner 125 result:", learner125Result);

// Task 6: Process all learners
// TODO: Create result objects for ALL learners
console.log("\n=== Task 6: Process All Learners ===");

function processAllLearners(submissions, assignments) {
    // TODO:
    // 1. Get unique learner IDs
    // 2. For each learner, get their submissions
    // 3. Build result object for each learner
    // 4. Return array of result objects
}

// TODO: Uncomment after creating function
// const results = processAllLearners(submissions, assignments);
// console.log("All Results:");
// console.log(JSON.stringify(results, null, 2));

// Task 7: Handle late submissions
// TODO: Modify the calculation to apply late penalty
console.log("\n=== Task 7: Handle Late Submissions ===");

function calculateScoreWithPenalty(submission, assignment) {
    // TODO:
    // 1. Check if submission is late (submitted_at > due_at)
    // 2. If late, deduct 10% of points_possible from score
    // 3. Return adjusted score
}

// TODO: Test with a late submission
// const lateSubmission = { submission: { submitted_at: "2024-01-23", score: 140 } };
// const assignment2 = { due_at: "2024-01-22", points_possible: 150 };
// console.log("Score with penalty:", calculateScoreWithPenalty(lateSubmission, assignment2));

// Task 8: Advanced - Build complete getLearnerData structure
// TODO: Combine everything into one function that mimics the SBA
console.log("\n=== Task 8: Complete Data Transformation ===");

function getLearnerData(course, assignmentGroup, submissions) {
    // TODO:
    // 1. Validate course_id matches
    // 2. Get unique learner IDs
    // 3. For each learner:
    //    a. Get their submissions
    //    b. For each submission:
    //       - Find matching assignment
    //       - Apply late penalty if needed
    //       - Calculate percentage
    //       - Add to result object
    //    c. Calculate weighted average
    // 4. Return array of learner result objects
    
    const results = [];
    
    // TODO: Implement the logic
    
    return results;
}

// TODO: Test with sample data
const course = { id: 451, name: "JavaScript Fundamentals" };
const assignmentGroup = {
    id: 1,
    name: "Fundamentals",
    course_id: 451,
    assignments: assignments
};

// TODO: Uncomment after creating function
// const finalResults = getLearnerData(course, assignmentGroup, submissions);
// console.log("Final Results:");
// console.log(JSON.stringify(finalResults, null, 2));
