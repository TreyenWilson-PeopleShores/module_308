// Exercise 9: Data Transformation and Aggregation - SOLUTION

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
console.log("=== Task 1: Unique Learner IDs ===");

function getUniqueLearnerIds(submissions) {
    const learnerIds = [];
    for (const submission of submissions) {
        if (!learnerIds.includes(submission.learner_id)) {
            learnerIds.push(submission.learner_id);
        }
    }
    return learnerIds;
}

const learnerIds = getUniqueLearnerIds(submissions);
console.log("Unique Learner IDs:", learnerIds);

// Task 2: Get submissions for a specific learner
console.log("\n=== Task 2: Filter by Learner ===");

function getSubmissionsForLearner(submissions, learnerId) {
    const learnerSubmissions = [];
    for (const submission of submissions) {
        if (submission.learner_id === learnerId) {
            learnerSubmissions.push(submission);
        }
    }
    return learnerSubmissions;
}

const learner125Submissions = getSubmissionsForLearner(submissions, 125);
console.log("Learner 125 submissions:", learner125Submissions);

// Task 3: Calculate percentage for each submission
console.log("\n=== Task 3: Calculate Percentages ===");

function calculateSubmissionPercentages(submissions, assignments) {
    const percentages = [];
    for (const submission of submissions) {
        for (const assignment of assignments) {
            if (submission.assignment_id === assignment.id) {
                const percentage = submission.submission.score / assignment.points_possible;
                percentages.push({
                    learner_id: submission.learner_id,
                    assignment_id: submission.assignment_id,
                    percentage: percentage
                });
                break;
            }
        }
    }
    return percentages;
}

const percentages = calculateSubmissionPercentages(submissions, assignments);
console.log("Percentages:", percentages);

// Task 4: Calculate weighted average for a learner
console.log("\n=== Task 4: Weighted Average ===");

function calculateWeightedAverage(learnerSubmissions, assignments) {
    let totalScore = 0;
    let totalPossible = 0;
    
    for (const submission of learnerSubmissions) {
        for (const assignment of assignments) {
            if (submission.assignment_id === assignment.id) {
                totalScore += submission.submission.score;
                totalPossible += assignment.points_possible;
                break;
            }
        }
    }
    
    return totalScore / totalPossible;
}

const avg = calculateWeightedAverage(learner125Submissions, assignments);
console.log("Learner 125 weighted average:", avg);

// Task 5: Build a result object for one learner
console.log("\n=== Task 5: Build Result Object ===");

function buildLearnerResult(learnerId, learnerSubmissions, assignments) {
    const result = {
        id: learnerId,
        avg: calculateWeightedAverage(learnerSubmissions, assignments)
    };
    
    for (const submission of learnerSubmissions) {
        for (const assignment of assignments) {
            if (submission.assignment_id === assignment.id) {
                const percentage = submission.submission.score / assignment.points_possible;
                result[assignment.id] = percentage;
                break;
            }
        }
    }
    
    return result;
}

const learner125Result = buildLearnerResult(125, learner125Submissions, assignments);
console.log("Learner 125 result:", learner125Result);

// Task 6: Process all learners
console.log("\n=== Task 6: Process All Learners ===");

function processAllLearners(submissions, assignments) {
    const results = [];
    const learnerIds = getUniqueLearnerIds(submissions);
    
    for (const learnerId of learnerIds) {
        const learnerSubmissions = getSubmissionsForLearner(submissions, learnerId);
        const learnerResult = buildLearnerResult(learnerId, learnerSubmissions, assignments);
        results.push(learnerResult);
    }
    
    return results;
}

const results = processAllLearners(submissions, assignments);
console.log("All Results:");
console.log(JSON.stringify(results, null, 2));

// Task 7: Handle late submissions
console.log("\n=== Task 7: Handle Late Submissions ===");

function calculateScoreWithPenalty(submission, assignment) {
    let score = submission.submission.score;
    const submittedDate = new Date(submission.submission.submitted_at);
    const dueDate = new Date(assignment.due_at);
    
    if (submittedDate > dueDate) {
        score = score - (assignment.points_possible * 0.1);
    }
    
    return score;
}

const lateSubmission = { submission: { submitted_at: "2024-01-23", score: 140 } };
const assignment2 = { due_at: "2024-01-22", points_possible: 150 };
console.log("Score with penalty:", calculateScoreWithPenalty(lateSubmission, assignment2));

// Task 8: Advanced - Build complete getLearnerData structure
console.log("\n=== Task 8: Complete Data Transformation ===");

function getLearnerData(course, assignmentGroup, submissions) {
    // Validate course_id
    if (assignmentGroup.course_id !== course.id) {
        throw new Error("Invalid input: assignment group does not belong to this course");
    }
    
    const results = [];
    const learnerIds = getUniqueLearnerIds(submissions);
    
    for (const learnerId of learnerIds) {
        const learnerSubmissions = getSubmissionsForLearner(submissions, learnerId);
        
        const result = {
            id: learnerId,
            avg: 0
        };
        
        let totalScore = 0;
        let totalPossible = 0;
        
        for (const submission of learnerSubmissions) {
            for (const assignment of assignmentGroup.assignments) {
                if (submission.assignment_id === assignment.id) {
                    const adjustedScore = calculateScoreWithPenalty(submission, assignment);
                    const percentage = adjustedScore / assignment.points_possible;
                    
                    result[assignment.id] = percentage;
                    totalScore += adjustedScore;
                    totalPossible += assignment.points_possible;
                    break;
                }
            }
        }
        
        result.avg = totalScore / totalPossible;
        results.push(result);
    }
    
    return results;
}

const course = { id: 451, name: "JavaScript Fundamentals" };
const assignmentGroup = {
    id: 1,
    name: "Fundamentals",
    course_id: 451,
    assignments: assignments
};

const finalResults = getLearnerData(course, assignmentGroup, submissions);
console.log("Final Results:");
console.log(JSON.stringify(finalResults, null, 2));
