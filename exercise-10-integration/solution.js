// Exercise 10: SBA Integration - SOLUTION

const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
};

const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
        {
            id: 1,
            name: "Declare a Variable",
            due_at: "2023-01-25",
            points_possible: 50
        },
        {
            id: 2,
            name: "Write a Function",
            due_at: "2023-02-27",
            points_possible: 150
        },
        {
            id: 3,
            name: "Code the World",
            due_at: "3156-11-15",
            points_possible: 500
        }
    ]
};

const LearnerSubmissions = [
    {
        learner_id: 125,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-25",
            score: 47
        }
    },
    {
        learner_id: 125,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-02-12",
            score: 150
        }
    },
    {
        learner_id: 125,
        assignment_id: 3,
        submission: {
            submitted_at: "2023-01-25",
            score: 400
        }
    },
    {
        learner_id: 132,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-24",
            score: 39
        }
    },
    {
        learner_id: 132,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-03-07",
            score: 140
        }
    }
];

function getLearnerData(course, ag, submissions) {
    // Step 1 - Validate course_id
    try {
        if (ag.course_id !== course.id) {
            throw new Error("Invalid input: assignment group does not belong to this course");
        }
    } catch (error) {
        console.log("Error:", error.message);
        return [];
    }

    // Step 2 - Get current date
    const currentDate = new Date();

    // Step 3 - Helper: Check if assignment is due
    function isAssignmentDue(assignment) {
        const dueDate = new Date(assignment.due_at);
        return dueDate <= currentDate;
    }

    // Step 4 - Helper: Check if submission is late
    function isSubmissionLate(submission, assignment) {
        const submittedDate = new Date(submission.submission.submitted_at);
        const dueDate = new Date(assignment.due_at);
        return submittedDate > dueDate;
    }

    // Step 5 - Helper: Calculate final score with penalty
    function calculateFinalScore(submission, assignment) {
        let score = submission.submission.score;
        if (isSubmissionLate(submission, assignment)) {
            score = score - (assignment.points_possible * 0.1);
        }
        return score;
    }

    // Step 6 - Helper: Find assignment by id
    function findAssignment(assignmentId) {
        for (const assignment of ag.assignments) {
            if (assignment.id === assignmentId) {
                return assignment;
            }
        }
        return null;
    }

    // Step 7 - Get unique learner IDs
    function getUniqueLearnerIds() {
        const learnerIds = [];
        for (const submission of submissions) {
            if (!learnerIds.includes(submission.learner_id)) {
                learnerIds.push(submission.learner_id);
            }
        }
        return learnerIds;
    }

    // Step 8 - Main processing
    const results = [];
    const learnerIds = getUniqueLearnerIds();

    for (const learnerId of learnerIds) {
        const result = {
            id: learnerId,
            avg: 0
        };

        let totalScore = 0;
        let totalPossible = 0;

        for (const submission of submissions) {
            if (submission.learner_id === learnerId) {
                const assignment = findAssignment(submission.assignment_id);

                if (!assignment || !isAssignmentDue(assignment)) {
                    continue;
                }

                // Validate points_possible
                try {
                    if (assignment.points_possible === 0) {
                        throw new Error("Cannot divide by zero: points_possible is 0");
                    }
                } catch (error) {
                    console.log(`Warning: ${error.message} for assignment ${assignment.id}`);
                    continue;
                }

                const finalScore = calculateFinalScore(submission, assignment);
                const percentage = finalScore / assignment.points_possible;

                result[assignment.id] = percentage;
                totalScore += finalScore;
                totalPossible += assignment.points_possible;
            }
        }

        if (totalPossible > 0) {
            result.avg = totalScore / totalPossible;
        }

        results.push(result);
    }

    return results;
}

// Test the function
console.log("=== Exercise 10: Integration Test ===\n");

try {
    const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
    console.log("Results:");
    console.log(JSON.stringify(result, null, 2));
    
    console.log("\n=== Expected Output (approximately) ===");
    console.log(`[
  {
    "id": 125,
    "avg": 0.985,
    "1": 0.94,
    "2": 1.0
  },
  {
    "id": 132,
    "avg": 0.82,
    "1": 0.78,
    "2": 0.833...
  }
]`);
    
    console.log("\n✓ If your output is close to this, you're ready for the SBA!");
} catch (error) {
    console.log("Error:", error.message);
}

// Edge case testing
console.log("\n=== Testing Edge Cases ===\n");

// Test with mismatched course_id
const badAssignmentGroup = { ...AssignmentGroup, course_id: 999 };
console.log("Test 1: Mismatched course_id");
getLearnerData(CourseInfo, badAssignmentGroup, LearnerSubmissions);

console.log("\nCongratulations! You've completed the integration exercise!");
console.log("You now have all the skills needed for the SBA. Good luck!");
