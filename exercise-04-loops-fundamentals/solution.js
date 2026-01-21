// Exercise 4: Loops Fundamentals - SOLUTION

const assignments = [
    { id: 1, name: "Variables Quiz", points_possible: 100 },
    { id: 2, name: "Loops Practice", points_possible: 75 },
    { id: 3, name: "Functions Test", points_possible: 150 },
    { id: 4, name: "Objects Lab", points_possible: 80 }
];

const submissions = [
    { learner_id: 1, assignment_id: 1, score: 95 },
    { learner_id: 1, assignment_id: 2, score: 70 },
    { learner_id: 1, assignment_id: 3, score: 140 },
    { learner_id: 2, assignment_id: 1, score: 85 },
    { learner_id: 2, assignment_id: 2, score: 65 }
];

// Task 1: Use a for loop to print all assignment names
console.log("=== Task 1: Assignment Names ===");
for (let i = 0; i < assignments.length; i++) {
    console.log(assignments[i].name);
}

// Task 2: Use a for loop to calculate total possible points
console.log("\n=== Task 2: Total Possible Points ===");
let totalPossible = 0;
for (let i = 0; i < assignments.length; i++) {
    totalPossible += assignments[i].points_possible;
}
console.log("Total Possible Points:", totalPossible);

// Task 3: Use a for loop to find a specific assignment by id
console.log("\n=== Task 3: Find Assignment ===");
let foundAssignment = null;
const searchId = 3;
for (let i = 0; i < assignments.length; i++) {
    if (assignments[i].id === searchId) {
        foundAssignment = assignments[i];
    }
}
console.log("Found Assignment:", foundAssignment);

// Task 4: Use a for loop to count submissions for learner_id 1
console.log("\n=== Task 4: Count Submissions ===");
let submissionCount = 0;
const targetLearnerId = 1;
for (let i = 0; i < submissions.length; i++) {
    if (submissions[i].learner_id === targetLearnerId) {
        submissionCount++;
    }
}
console.log("Learner 1 has", submissionCount, "submissions");

// Task 5: Use a while loop to process submissions until total score reaches 200
console.log("\n=== Task 5: While Loop - Sum Until 200 ===");
let totalScore = 0;
let index = 0;
while (index < submissions.length && totalScore < 200) {
    totalScore += submissions[index].score;
    index++;
}
console.log("Total score:", totalScore);
console.log("Stopped at index:", index);

// Task 6: Use a for loop to calculate average score for all submissions
console.log("\n=== Task 6: Average Score ===");
let sumOfScores = 0;
for (let i = 0; i < submissions.length; i++) {
    sumOfScores += submissions[i].score;
}
const averageScore = sumOfScores / submissions.length;
console.log("Average Score:", averageScore.toFixed(2));

// Task 7: Use nested for loops to match submissions with assignments
console.log("\n=== Task 7: Submission Percentages ===");
for (let i = 0; i < submissions.length; i++) {
    for (let j = 0; j < assignments.length; j++) {
        if (submissions[i].assignment_id === assignments[j].id) {
            const percentage = (submissions[i].score / assignments[j].points_possible) * 100;
            console.log(`Learner ${submissions[i].learner_id} - Assignment ${assignments[j].id}: ${percentage.toFixed(2)}%`);
        }
    }
}

// Task 8: Use a while loop with a counter
console.log("\n=== Task 8: While Loop Counter ===");
let counter = 1;
while (counter <= 5) {
    console.log(counter);
    counter++;
}
