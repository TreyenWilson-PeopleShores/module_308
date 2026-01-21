// Exercise 5: Advanced Loops and Control - SOLUTION

const assignments = [
    { id: 1, name: "Variables Quiz", points_possible: 100 },
    { id: 2, name: "Loops Practice", points_possible: 75 },
    { id: 3, name: "Functions Test", points_possible: 0 }, // Invalid!
    { id: 4, name: "Objects Lab", points_possible: 80 }
];

const submissions = [
    { learner_id: 1, assignment_id: 1, score: 95 },
    { learner_id: 1, assignment_id: 2, score: 70 },
    { learner_id: 1, assignment_id: 3, score: 140 },
    { learner_id: 2, assignment_id: 1, score: 85 }
];

const learnerData = {
    id: 125,
    name: "Alice Johnson",
    email: "alice@example.com",
    assignmentAvg: 0.88
};

// Task 1: Use for...of to iterate through assignments
console.log("=== Task 1: For...of Loop ===");
for (const assignment of assignments) {
    console.log(assignment.name);
}

// Task 2: Use for...of to calculate total points
console.log("\n=== Task 2: Sum with For...of ===");
let totalPoints = 0;
for (const assignment of assignments) {
    totalPoints += assignment.points_possible;
}
console.log("Total Points:", totalPoints);

// Task 3: Use for...in to iterate through object properties
console.log("\n=== Task 3: For...in Loop ===");
for (const key in learnerData) {
    console.log(`${key}: ${learnerData[key]}`);
}

// Task 4: Use break to find and stop
console.log("\n=== Task 4: Using Break ===");
let foundAssignment = null;
for (const assignment of assignments) {
    if (assignment.id === 2) {
        foundAssignment = assignment;
        break;
    }
}
console.log("Found:", foundAssignment);

// Task 5: Use continue to skip invalid assignments
console.log("\n=== Task 5: Using Continue ===");
console.log("Valid Assignments:");
for (const assignment of assignments) {
    if (assignment.points_possible === 0) {
        continue;
    }
    console.log(assignment.name);
}

// Task 6: Use break in a while loop
console.log("\n=== Task 6: Break in While Loop ===");
let i = 0;
while (i < submissions.length) {
    if (submissions[i].learner_id === 2) {
        console.log("Found learner 2, breaking out");
        break;
    }
    console.log(`Processed submission for learner ${submissions[i].learner_id}`);
    i++;
}

// Task 7: Use continue to skip specific learner
console.log("\n=== Task 7: Continue to Skip Learner 2 ===");
for (const submission of submissions) {
    if (submission.learner_id === 2) {
        continue;
    }
    console.log(`Learner ${submission.learner_id} - Assignment ${submission.assignment_id}: ${submission.score}`);
}

// Task 8: Combine for...of with conditional logic
console.log("\n=== Task 8: Check Submission Status ===");
for (const assignment of assignments) {
    let hasSubmission = false;
    for (const submission of submissions) {
        if (submission.assignment_id === assignment.id) {
            hasSubmission = true;
            break;
        }
    }
    if (hasSubmission) {
        console.log(`Assignment ${assignment.id}: Submitted`);
    } else {
        console.log(`Assignment ${assignment.id}: Not Submitted`);
    }
}

// Task 9: Use for...in on an array (see the difference)
console.log("\n=== Task 9: For...in on Array (Demo) ===");
for (const index in assignments) {
    console.log(`Index ${index}:`, assignments[index].name);
}
console.log("Note: for...in gives indices, for...of gives values!");
