// Exercise 4: Loops Fundamentals

// Sample data
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
// TODO: Loop through the assignments array and console.log each assignment's name
console.log("=== Task 1: Assignment Names ===");
// (your code here)
for (let i = 0; i<assignments.length;i+=1){
    console.log(assignments[i].name);
}


// Task 2: Use a for loop to calculate total possible points
// TODO: Loop through assignments and sum up all points_possible values
console.log("\n=== Task 2: Total Possible Points ===");
let totalPossible = 0;
// (your code here)
for(let i=0;i<assignments.length;i+=1){
    totalPossible+=assignments[i].points_possible;
}
console.log("Total Possible Points:", totalPossible);

// Task 3: Use a for loop to find a specific assignment by id
// TODO: Loop through assignments to find the assignment with id 3
// Store it in a variable called foundAssignment
console.log("\n=== Task 3: Find Assignment ===");
let foundAssignment = null;
const searchId = 3;
// (your code here)
for(let i=0;assignments[i]!=searchId.id;i+=1){
    foundAssignment=i;
}

console.log("Found Assignment:", foundAssignment);

// Task 4: Use a for loop to count submissions for learner_id 1
// TODO: Loop through submissions and count how many belong to learner_id 1
console.log("\n=== Task 4: Count Submissions ===");
let submissionCount = 0;
const targetLearnerId = 1;
// (your code here)
for(let i=0;i<submissions.length;i+=1){
    if(submissions[i].learner_id==targetLearnerId){
        submissionCount+=1;
    }else{};
}
console.log("Learner 1 has", submissionCount, "submissions");

// Task 5: Use a while loop to process submissions until total score reaches 200
// TODO: Loop through submissions array using a while loop
// Add up scores until the total reaches or exceeds 200, then stop
console.log("\n=== Task 5: While Loop - Sum Until 200 ===");
let totalScore = 0;
let index = 0;
// (your code here)
while(totalScore<=200){
    
    totalScore+=submissions[index].score;
    index+=1;
};

console.log("Total score:", totalScore);
console.log("Stopped at index:", index);

// Task 6: Use a for loop to calculate average score for all submissions
// TODO: Sum all scores and divide by the number of submissions
console.log("\n=== Task 6: Average Score ===");
let sumOfScores = 0;
// (your code here)
for(let i=0;i<submissions.length;i++){
    sumOfScores+=submissions[i].score;
}

const averageScore = sumOfScores / submissions.length;
console.log("Average Score:", averageScore.toFixed(2));

// Task 7: Use nested for loops to match submissions with assignments
// TODO: For each submission, find the matching assignment and calculate percentage
// Print: "Assignment X: Y%"
console.log("\n=== Task 7: Submission Percentages ===");
// (your code here)
for(let i = 0; i<submissions.length;i++){

        for(let x = 0; x<assignments.length;x++){
            if(submissions[i].assignment_id===assignments[x].id){
                console.log(["Assingment ", assignments[x].name, ": ",(submissions[i].score/assignments[x].points_possible)*100,"%"].join(""))
            }
        }

}


// Task 8: Use a while loop with a counter
// TODO: Create a while loop that prints numbers from 1 to 5
console.log("\n=== Task 8: While Loop Counter ===");
let counter = 1;
// (your code here)
while(counter<=5){
    console.log(counter);
    counter+=1;
}