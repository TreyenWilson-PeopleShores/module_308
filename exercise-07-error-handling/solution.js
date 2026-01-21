// Exercise 7: Error Handling - SOLUTION

// Task 1: Basic try/catch
console.log("=== Task 1: Basic Try/Catch ===");
try {
    const obj = undefined;
    console.log(obj.name);
} catch (error) {
    console.log("Error caught:", error.message);
}

// Task 2: Divide by zero check
console.log("\n=== Task 2: Safe Divide ===");

function safeDivide(numerator, denominator) {
    if (denominator === 0) {
        throw new Error("Cannot divide by zero");
    }
    return numerator / denominator;
}

try {
    console.log("10 / 2 =", safeDivide(10, 2));
} catch (error) {
    console.log("Error:", error.message);
}

try {
    console.log("10 / 0 =", safeDivide(10, 0));
} catch (error) {
    console.log("Error:", error.message);
}

// Task 3: Validate course_id match
console.log("\n=== Task 3: Validate Course ===");

function validateCourse(course, assignmentGroup) {
    if (course.id !== assignmentGroup.course_id) {
        throw new Error("Invalid input: assignment group does not belong to this course");
    }
}

const course1 = { id: 101, name: "JavaScript" };
const assignmentGroup1 = { id: 1, course_id: 101 };
const assignmentGroup2 = { id: 2, course_id: 102 };

try {
    validateCourse(course1, assignmentGroup1);
    console.log("Validation passed for assignmentGroup1");
} catch (error) {
    console.log("Error:", error.message);
}

try {
    validateCourse(course1, assignmentGroup2);
    console.log("Validation passed for assignmentGroup2");
} catch (error) {
    console.log("Error:", error.message);
}

// Task 4: Type validation
console.log("\n=== Task 4: Type Validation ===");

function calculatePercentage(score, pointsPossible) {
    if (typeof score !== "number") {
        throw new Error("Score must be a number");
    }
    if (typeof pointsPossible !== "number") {
        throw new Error("Points possible must be a number");
    }
    return (score / pointsPossible) * 100;
}

try {
    console.log("85/100 =", calculatePercentage(85, 100) + "%");
} catch (error) {
    console.log("Error:", error.message);
}

try {
    console.log("'85'/100 =", calculatePercentage("85", 100) + "%");
} catch (error) {
    console.log("Error:", error.message);
}

try {
    console.log("85/'100' =", calculatePercentage(85, "100") + "%");
} catch (error) {
    console.log("Error:", error.message);
}

// Task 5: Multiple validations
console.log("\n=== Task 5: Multiple Validations ===");

function processAssignment(assignment) {
    if (!assignment) {
        throw new Error("Assignment cannot be null or undefined");
    }
    if (!assignment.points_possible) {
        throw new Error("Assignment must have points_possible property");
    }
    if (typeof assignment.points_possible !== "number") {
        throw new Error("points_possible must be a number");
    }
    if (assignment.points_possible <= 0) {
        throw new Error("points_possible must be greater than zero");
    }
    return "Assignment is valid";
}

const testCases = [
    null,
    {},
    { points_possible: "100" },
    { points_possible: 0 },
    { points_possible: 100 }
];

for (const testCase of testCases) {
    try {
        console.log(processAssignment(testCase));
    } catch (error) {
        console.log("Error:", error.message);
    }
}

// Task 6: Nested try/catch
console.log("\n=== Task 6: Continue on Error ===");

const submissions = [
    { learner_id: 1, score: 85, points: 100 },
    { learner_id: 2, score: 90, points: 0 },
    { learner_id: 3, score: 75, points: 100 }
];

function processSubmissions(submissions) {
    const results = [];
    for (const submission of submissions) {
        try {
            if (submission.points === 0) {
                throw new Error("Cannot calculate percentage with 0 points");
            }
            const percentage = (submission.score / submission.points) * 100;
            results.push({
                learner_id: submission.learner_id,
                percentage: percentage
            });
        } catch (error) {
            console.log(`Error processing learner ${submission.learner_id}:`, error.message);
        }
    }
    return results;
}

const results = processSubmissions(submissions);
console.log("Successful results:", results);

// Task 7: Custom error messages
console.log("\n=== Task 7: Custom Error Messages ===");

function validateSubmission(submission, assignment) {
    if (assignment.points_possible === 0) {
        throw new Error("Invalid assignment: points possible cannot be zero");
    }
    if (submission.score < 0) {
        throw new Error("Invalid score: cannot be negative");
    }
    if (submission.score > assignment.points_possible) {
        throw new Error("Invalid score: exceeds maximum points");
    }
    return "Submission is valid";
}

const testSubmissions = [
    { submission: { score: 85 }, assignment: { points_possible: 0 } },
    { submission: { score: -10 }, assignment: { points_possible: 100 } },
    { submission: { score: 110 }, assignment: { points_possible: 100 } },
    { submission: { score: 85 }, assignment: { points_possible: 100 } }
];

for (const test of testSubmissions) {
    try {
        console.log(validateSubmission(test.submission, test.assignment));
    } catch (error) {
        console.log("Error:", error.message);
    }
}

// Task 8: Using finally
console.log("\n=== Task 8: Finally Block ===");

function demonstrateFinally() {
    try {
        console.log("Attempting operation...");
        throw new Error("Something went wrong!");
    } catch (error) {
        console.log("Error caught:", error.message);
    } finally {
        console.log("Finally block: cleanup complete");
    }
}

demonstrateFinally();
