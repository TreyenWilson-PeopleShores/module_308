# Lesson 4: Loops Fundamentals

## Introduction
Loops allow you to repeat code multiple times without writing it over and over. They're essential for processing collections of data like arrays of assignments or submissions. Instead of writing 100 lines to process 100 submissions, you write one loop!

## Why Loops Matter
- Process every item in an array efficiently
- Avoid repetitive code (DRY - Don't Repeat Yourself)
- Handle data collections of any size
- Critical for SBA: loop through assignments, loop through submissions
- Calculate totals and averages across multiple items

## The for Loop

### Basic Structure
```javascript
for (initialization; condition; increment) {
    // Code to repeat
}
```

**Three parts:**
1. **Initialization**: Run once before loop starts (usually `let i = 0`)
2. **Condition**: Checked before each iteration (usually `i < array.length`)
3. **Increment**: Run after each iteration (usually `i++`)

### Simple Example
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// Output: 0, 1, 2, 3, 4
```

**How it works:**
1. `let i = 0` - Start with i = 0
2. `i < 5` - Is 0 < 5? Yes, run loop body
3. Print 0
4. `i++` - Increment to 1
5. `i < 5` - Is 1 < 5? Yes, run loop body
6. Print 1
7. ... continues until i = 5
8. `i < 5` - Is 5 < 5? No, exit loop

### Looping Through Arrays
```javascript
const scores = [85, 90, 95, 100];

for (let i = 0; i < scores.length; i++) {
    console.log("Score:", scores[i]);
}
// Output:
// Score: 85
// Score: 90
// Score: 95
// Score: 100
```

**Why `i < scores.length`?**
- `scores.length` is 4
- Valid indices are 0, 1, 2, 3
- Loop runs while i < 4 (stops at i = 4)
- Prevents accessing `scores[4]` which doesn't exist

### Practical Example: Calculate Sum
```javascript
const scores = [85, 90, 95, 100];
let sum = 0;

for (let i = 0; i < scores.length; i++) {
    sum += scores[i];  // Add each score to sum
}

console.log("Total:", sum);        // 370
console.log("Average:", sum / scores.length);  // 92.5
```

### Looping Through Array of Objects
```javascript
const assignments = [
    { id: 1, name: "Quiz 1", points: 100 },
    { id: 2, name: "Quiz 2", points: 75 },
    { id: 3, name: "Quiz 3", points: 150 }
];

for (let i = 0; i < assignments.length; i++) {
    console.log(assignments[i].name + ":", assignments[i].points);
}
// Output:
// Quiz 1: 100
// Quiz 2: 75
// Quiz 3: 150
```

### for Loop Variations

#### Counting Backwards
```javascript
for (let i = 5; i > 0; i--) {
    console.log(i);
}
// Output: 5, 4, 3, 2, 1
```

#### Skipping Elements
```javascript
for (let i = 0; i < 10; i += 2) {  // Increment by 2
    console.log(i);
}
// Output: 0, 2, 4, 6, 8
```

## The while Loop

### Basic Structure
```javascript
while (condition) {
    // Code to repeat
    // Must eventually make condition false!
}
```

**How it works:**
1. Check condition
2. If true, run loop body
3. Repeat from step 1
4. If false, exit loop

### Simple Example
```javascript
let count = 0;

while (count < 5) {
    console.log(count);
    count++;
}
// Output: 0, 1, 2, 3, 4
```

**⚠️ Warning:** Always modify the variable in the condition, or you'll get an infinite loop!

```javascript
// ❌ INFINITE LOOP - DON'T RUN THIS!
let count = 0;
while (count < 5) {
    console.log(count);
    // Forgot to increment count - loops forever!
}
```

### while Loop with Arrays
```javascript
const scores = [85, 90, 95];
let i = 0;

while (i < scores.length) {
    console.log(scores[i]);
    i++;
}
// Output: 85, 90, 95
```

### When to Use while vs for
**Use for when:**
- You know how many times to loop (usually with arrays)
- You're iterating with a counter

**Use while when:**
- You don't know how many iterations in advance
- You're looping until a condition changes
- More flexible control flow

### Practical Example: Process Until Target
```javascript
const submissions = [
    { score: 50 },
    { score: 75 },
    { score: 100 },
    { score: 90 }
];

let totalScore = 0;
let i = 0;

// Add scores until total reaches 200
while (i < submissions.length && totalScore < 200) {
    totalScore += submissions[i].score;
    i++;
}

console.log("Stopped at index:", i);     // 3
console.log("Total score:", totalScore);  // 225
```

## The do...while Loop

### Basic Structure
```javascript
do {
    // Code to repeat
} while (condition);
```

**Key difference:** Runs loop body FIRST, then checks condition.
- Regular while: Check first, maybe never run
- do...while: Run once, then check

### Example
```javascript
let count = 0;

do {
    console.log(count);
    count++;
} while (count < 3);
// Output: 0, 1, 2
```

### Runs At Least Once
```javascript
let count = 10;

// Regular while - never runs
while (count < 5) {
    console.log("This never prints");
}

// do...while - runs once
do {
    console.log("This prints once:", count);  // Prints 10
} while (count < 5);
```

### Practical Use: Input Validation (Conceptual)
```javascript
let validInput = false;
let attempts = 0;

do {
    // Simulating user input
    attempts++;
    console.log("Attempt:", attempts);
    
    if (attempts === 3) {
        validInput = true;
    }
} while (!validInput);
// Always tries at least once
```

## Nested Loops
Loops inside loops - useful for comparing items or processing 2D data.

### Basic Nested Loop
```javascript
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
        console.log(`i=${i}, j=${j}`);
    }
}
// Output:
// i=0, j=0
// i=0, j=1
// i=1, j=0
// i=1, j=1
// i=2, j=0
// i=2, j=1
```

**How it works:**
- Outer loop runs once, inner loop runs completely
- For each outer iteration, inner loop runs all its iterations

### Practical Example: Match Submissions to Assignments
```javascript
const submissions = [
    { assignment_id: 1, score: 85 },
    { assignment_id: 2, score: 90 }
];

const assignments = [
    { id: 1, points_possible: 100 },
    { id: 2, points_possible: 100 }
];

// For each submission, find its assignment
for (let i = 0; i < submissions.length; i++) {
    for (let j = 0; j < assignments.length; j++) {
        if (submissions[i].assignment_id === assignments[j].id) {
            const percentage = submissions[i].score / assignments[j].points_possible;
            console.log(`Assignment ${assignments[j].id}: ${percentage * 100}%`);
        }
    }
}
// Output:
// Assignment 1: 85%
// Assignment 2: 90%
```

## SBA Applications

### Calculate Total Points
```javascript
const assignments = [
    { id: 1, points_possible: 100 },
    { id: 2, points_possible: 75 },
    { id: 3, points_possible: 150 }
];

let totalPossible = 0;
for (let i = 0; i < assignments.length; i++) {
    totalPossible += assignments[i].points_possible;
}

console.log("Total possible points:", totalPossible);  // 325
```

### Find Specific Assignment
```javascript
const assignments = [
    { id: 1, name: "Quiz 1" },
    { id: 2, name: "Quiz 2" },
    { id: 3, name: "Quiz 3" }
];

const searchId = 2;
let found = null;

for (let i = 0; i < assignments.length; i++) {
    if (assignments[i].id === searchId) {
        found = assignments[i];
        break;  // Stop searching once found
    }
}

console.log("Found:", found);  // { id: 2, name: "Quiz 2" }
```

### Count Submissions for a Learner
```javascript
const submissions = [
    { learner_id: 125, score: 85 },
    { learner_id: 132, score: 90 },
    { learner_id: 125, score: 95 },
    { learner_id: 125, score: 88 }
];

let count = 0;
const targetLearner = 125;

for (let i = 0; i < submissions.length; i++) {
    if (submissions[i].learner_id === targetLearner) {
        count++;
    }
}

console.log("Learner 125 has", count, "submissions");  // 3
```

### Calculate Weighted Average
```javascript
const submissions = [
    { score: 85, points_possible: 100 },
    { score: 140, points_possible: 150 },
    { score: 45, points_possible: 50 }
];

let totalEarned = 0;
let totalPossible = 0;

for (let i = 0; i < submissions.length; i++) {
    totalEarned += submissions[i].score;
    totalPossible += submissions[i].points_possible;
}

const weightedAverage = totalEarned / totalPossible;
console.log("Weighted average:", weightedAverage);  // 0.9 or 90%
```

## Best Practices

### 1. Use Meaningful Variable Names
```javascript
// ❌ Unclear
for (let x = 0; x < y.length; x++) { }

// ✅ Clear
for (let i = 0; i < assignments.length; i++) { }
// or even better for readability:
for (let assignmentIndex = 0; assignmentIndex < assignments.length; assignmentIndex++) { }
```

### 2. Cache Array Length (Optional Optimization)
```javascript
// Good for very large arrays
const len = assignments.length;
for (let i = 0; i < len; i++) {
    // Process assignment
}
```

### 3. Use const in for Loop When Possible
```javascript
// i doesn't need to be reassigned, only declared each iteration
for (const assignment of assignments) {  // Modern approach (next lesson)
    console.log(assignment);
}
```

### 4. Initialize Accumulators Before Loop
```javascript
// ✅ Right
let sum = 0;
for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
}

// ❌ Wrong
for (let i = 0; i < scores.length; i++) {
    let sum = 0;  // Resets to 0 each iteration!
    sum += scores[i];
}
```

### 5. Avoid Modifying Loop Counter Inside Loop
```javascript
// ❌ Confusing and error-prone
for (let i = 0; i < 10; i++) {
    if (someCondition) {
        i += 2;  // Skips iterations unpredictably
    }
}

// ✅ Better to use while or different logic
```

## Common Mistakes to Avoid

### 1. Off-by-One Errors
```javascript
// ❌ Wrong - goes one too far
for (let i = 0; i <= scores.length; i++) {  // <= instead of <
    console.log(scores[i]);  // undefined on last iteration
}

// ✅ Right
for (let i = 0; i < scores.length; i++) {
    console.log(scores[i]);
}
```

### 2. Infinite Loops
```javascript
// ❌ Infinite loop - i never changes
let i = 0;
while (i < 5) {
    console.log(i);
    // Forgot i++
}

// ✅ Fixed
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
```

### 3. Wrong Initialization
```javascript
// ❌ Wrong - starts at 1, misses first element
for (let i = 1; i < scores.length; i++) {
    console.log(scores[i]);  // Skips scores[0]
}

// ✅ Right - starts at 0
for (let i = 0; i < scores.length; i++) {
    console.log(scores[i]);
}
```

### 4. Modifying Array While Looping
```javascript
// ❌ Dangerous - array length changes during loop
for (let i = 0; i < scores.length; i++) {
    scores.push(100);  // Adds element, length increases!
    // Can cause infinite loop or unexpected behavior
}

// ✅ Safe - use separate array or cache length
const originalLength = scores.length;
for (let i = 0; i < originalLength; i++) {
    newScores.push(scores[i] + 10);
}
```

## Loop Efficiency

### Use the Right Loop
```javascript
// Fast - when you know the count
for (let i = 0; i < array.length; i++) { }

// Flexible - when condition might change
while (condition) { }

// Readable - for modern code (next lesson)
for (const item of array) { }
```

### Break Early When Possible
```javascript
// ✅ Stop searching once found
for (let i = 0; i < assignments.length; i++) {
    if (assignments[i].id === searchId) {
        found = assignments[i];
        break;  // Don't keep searching!
    }
}
```

## Practice Tips

1. **Start simple** - Loop through small arrays first
2. **Add console.log** - Print loop counter and current item
3. **Test edge cases** - Empty arrays, single item, large arrays
4. **Draw diagrams** - Visualize loop iterations
5. **Count iterations** - Verify loop runs expected number of times

## Ready to Practice?

Complete the exercises in `index.js` to master loops. You'll use these constantly in the SBA to process assignments and submissions!
