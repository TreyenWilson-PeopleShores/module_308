# Lesson 5: Advanced Loops and Loop Control

## Introduction
Modern JavaScript provides more elegant ways to loop through data with `for...of` and `for...in`. Additionally, `break` and `continue` give you precise control over loop execution. These tools make your code cleaner and more expressive.

## Why Advanced Loops Matter
- `for...of` is cleaner and safer than traditional for loops
- `for...in` lets you iterate over object properties
- `break` optimizes loops by exiting early
- `continue` lets you skip invalid data
- More readable and maintainable code

## The for...of Loop

### Basic Structure
```javascript
for (const item of array) {
    // Use item directly
}
```

**Advantages over traditional for loop:**
- No index management
- No `array.length` needed
- No risk of off-by-one errors
- More readable

### Simple Example
```javascript
const scores = [85, 90, 95, 100];

// Traditional for loop
for (let i = 0; i < scores.length; i++) {
    console.log(scores[i]);
}

// for...of loop - cleaner!
for (const score of scores) {
    console.log(score);
}
// Both output: 85, 90, 95, 100
```

### Looping Through Array of Objects
```javascript
const assignments = [
    { id: 1, name: "Quiz 1", points: 100 },
    { id: 2, name: "Quiz 2", points: 75 },
    { id: 3, name: "Quiz 3", points: 150 }
];

for (const assignment of assignments) {
    console.log(`${assignment.name}: ${assignment.points} points`);
}
// Output:
// Quiz 1: 100 points
// Quiz 2: 75 points
// Quiz 3: 150 points
```

**Why this is better:**
- Direct access to each assignment
- No index arithmetic
- Can't accidentally access wrong index
- Intent is clearer

### Calculating with for...of
```javascript
const scores = [85, 90, 95, 100];
let total = 0;

for (const score of scores) {
    total += score;
}

console.log("Total:", total);          // 370
console.log("Average:", total / scores.length);  // 92.5
```

### When You Still Need Index
Sometimes you need both the item AND its index. Use `entries()`:

```javascript
const assignments = ["Quiz 1", "Quiz 2", "Quiz 3"];

for (const [index, assignment] of assignments.entries()) {
    console.log(`${index}: ${assignment}`);
}
// Output:
// 0: Quiz 1
// 1: Quiz 2
// 2: Quiz 3
```

## The for...in Loop

### Basic Structure
```javascript
for (const key in object) {
    // Use key to access object[key]
}
```

**Purpose:** Iterate over object property names (keys).

### Simple Example
```javascript
const learner = {
    id: 125,
    name: "Alice",
    email: "alice@example.com",
    score: 85
};

for (const key in learner) {
    console.log(`${key}: ${learner[key]}`);
}
// Output:
// id: 125
// name: Alice
// email: alice@example.com
// score: 85
```

### Getting Property Names
```javascript
const submission = {
    learner_id: 125,
    assignment_id: 1,
    score: 85
};

for (const property in submission) {
    console.log("Property name:", property);
}
// Output:
// Property name: learner_id
// Property name: assignment_id
// Property name: score
```

### Processing Object Properties
```javascript
const scores = {
    assignment1: 85,
    assignment2: 90,
    assignment3: 95
};

let total = 0;
let count = 0;

for (const key in scores) {
    total += scores[key];
    count++;
}

console.log("Average:", total / count);  // 90
```

### for...in with Arrays (Usually Avoid)
```javascript
const scores = [85, 90, 95];

// ❌ for...in on arrays gives indices (as strings!)
for (const index in scores) {
    console.log(typeof index);  // "string"
    console.log(index);         // "0", "1", "2"
}

// ✅ Use for...of for arrays
for (const score of scores) {
    console.log(score);  // 85, 90, 95
}
```

**Rule of thumb:**
- `for...of` for arrays
- `for...in` for objects

## The break Statement

### Purpose
Exit a loop immediately, regardless of the condition.

### Basic Example
```javascript
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;  // Stop the loop
    }
    console.log(i);
}
// Output: 0, 1, 2, 3, 4 (stops at 5)
```

### Finding an Item
```javascript
const assignments = [
    { id: 1, name: "Quiz 1" },
    { id: 2, name: "Quiz 2" },
    { id: 3, name: "Quiz 3" }
];

const searchId = 2;
let found = null;

for (const assignment of assignments) {
    if (assignment.id === searchId) {
        found = assignment;
        break;  // Found it, stop searching!
    }
}

console.log(found);  // { id: 2, name: "Quiz 2" }
```

**Why use break:**
- Efficiency - don't keep looping after finding what you need
- Optimization - especially important for large arrays
- Clarity - shows you only need one match

### break with Conditions
```javascript
const submissions = [
    { score: 50 },
    { score: 75 },
    { score: 100 },
    { score: 90 }
];

let total = 0;

// Add scores until total reaches 150
for (const submission of submissions) {
    if (total >= 150) {
        break;
    }
    total += submission.score;
}

console.log("Total:", total);  // 175 (50 + 75 + 100, then stops)
```

### break in Nested Loops
**Important:** `break` only exits the innermost loop!

```javascript
// break only exits inner loop
for (let i = 0; i < 3; i++) {
    console.log("Outer:", i);
    for (let j = 0; j < 3; j++) {
        if (j === 1) {
            break;  // Only breaks out of inner loop
        }
        console.log("  Inner:", j);
    }
}
// Output:
// Outer: 0
//   Inner: 0
// Outer: 1
//   Inner: 0
// Outer: 2
//   Inner: 0
```

## The continue Statement

### Purpose
Skip the rest of the current iteration and move to the next one.

### Basic Example
```javascript
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;  // Skip when i is 2
    }
    console.log(i);
}
// Output: 0, 1, 3, 4 (skips 2)
```

### Skipping Invalid Data
```javascript
const assignments = [
    { id: 1, points_possible: 100 },
    { id: 2, points_possible: 0 },    // Invalid!
    { id: 3, points_possible: 150 },
    { id: 4, points_possible: -10 }   // Invalid!
];

for (const assignment of assignments) {
    if (assignment.points_possible <= 0) {
        console.log(`Skipping invalid assignment ${assignment.id}`);
        continue;  // Skip to next assignment
    }
    
    console.log(`Processing assignment ${assignment.id}`);
    // Process valid assignment...
}
// Output:
// Processing assignment 1
// Skipping invalid assignment 2
// Processing assignment 3
// Skipping invalid assignment 4
```

### Filtering While Processing
```javascript
const submissions = [
    { learner_id: 125, score: 85 },
    { learner_id: 132, score: 90 },
    { learner_id: 125, score: 95 },
    { learner_id: 140, score: 88 }
];

let total = 0;
let count = 0;

// Calculate average for learner 125 only
for (const submission of submissions) {
    if (submission.learner_id !== 125) {
        continue;  // Skip submissions from other learners
    }
    
    total += submission.score;
    count++;
}

console.log("Learner 125 average:", total / count);  // 90
```

### continue vs if
```javascript
// Using continue
for (const score of scores) {
    if (score < 0) {
        continue;  // Skip invalid scores
    }
    // Process valid score
    console.log(score);
}

// Using if (equivalent but more nested)
for (const score of scores) {
    if (score >= 0) {
        // Process valid score
        console.log(score);
    }
}
```

**Use continue when:**
- You want to skip invalid data
- Guard clauses at the start of loops
- Multiple skip conditions
- Reduces nesting

## SBA Applications

### Filter and Process Assignments
```javascript
const assignments = [
    { id: 1, due_at: "2024-01-15", points_possible: 100 },
    { id: 2, due_at: "2024-01-22", points_possible: 0 },     // Invalid!
    { id: 3, due_at: "2026-12-01", points_possible: 150 }   // Future!
];

const currentDate = new Date("2026-01-21");

for (const assignment of assignments) {
    // Skip invalid assignments
    if (assignment.points_possible === 0) {
        console.log(`Skipping assignment ${assignment.id}: invalid points`);
        continue;
    }
    
    // Skip future assignments
    const dueDate = new Date(assignment.due_at);
    if (dueDate > currentDate) {
        console.log(`Skipping assignment ${assignment.id}: not due yet`);
        continue;
    }
    
    console.log(`Processing assignment ${assignment.id}`);
    // Process valid, due assignment...
}
```

### Find and Stop
```javascript
const submissions = [
    { learner_id: 125, assignment_id: 1, score: 85 },
    { learner_id: 125, assignment_id: 2, score: 90 },
    { learner_id: 132, assignment_id: 1, score: 95 }
];

const assignments = [
    { id: 1, points_possible: 100 },
    { id: 2, points_possible: 150 }
];

// Find matching assignment for first submission
const submission = submissions[0];
let matchedAssignment = null;

for (const assignment of assignments) {
    if (assignment.id === submission.assignment_id) {
        matchedAssignment = assignment;
        break;  // Found it, stop searching
    }
}

if (matchedAssignment) {
    const percentage = submission.score / matchedAssignment.points_possible;
    console.log("Percentage:", percentage);
}
```

### Build Result Object with for...in
```javascript
const learnerResult = {
    id: 125,
    avg: 0.88,
    1: 0.94,   // Assignment 1 score
    2: 0.90,   // Assignment 2 score
    3: 0.85    // Assignment 3 score
};

console.log("Learner scores:");
for (const key in learnerResult) {
    if (key === "id" || key === "avg") {
        continue;  // Skip these, only show assignment scores
    }
    console.log(`Assignment ${key}: ${(learnerResult[key] * 100).toFixed(1)}%`);
}
// Output:
// Assignment 1: 94.0%
// Assignment 2: 90.0%
// Assignment 3: 85.0%
```

## Best Practices

### 1. Use for...of for Arrays
```javascript
// ✅ Preferred for arrays
for (const item of array) {
    console.log(item);
}

// ❌ Only use traditional for if you need index
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
```

### 2. Use for...in for Objects
```javascript
// ✅ Correct usage
for (const key in object) {
    console.log(key, object[key]);
}
```

### 3. Use continue for Guard Clauses
```javascript
// ✅ Clear - guards at top
for (const item of items) {
    if (!item.isValid) continue;
    if (item.points === 0) continue;
    
    // Process valid item
    processItem(item);
}

// ❌ More nested
for (const item of items) {
    if (item.isValid) {
        if (item.points !== 0) {
            processItem(item);
        }
    }
}
```

### 4. Use break for Early Exit
```javascript
// ✅ Efficient - stops when found
for (const item of items) {
    if (item.id === searchId) {
        found = item;
        break;
    }
}

// ❌ Inefficient - keeps searching
for (const item of items) {
    if (item.id === searchId) {
        found = item;
        // Continues looping unnecessarily
    }
}
```

### 5. Use const in for...of
```javascript
// ✅ Use const - item isn't reassigned
for (const item of items) {
    console.log(item);
}

// ❌ Unnecessary let
for (let item of items) {
    console.log(item);
}
```

## Common Mistakes to Avoid

### 1. Using for...in on Arrays
```javascript
// ❌ Wrong - for...in on array
const scores = [85, 90, 95];
for (const i in scores) {
    console.log(i);  // "0", "1", "2" (strings!)
}

// ✅ Right - for...of on array
for (const score of scores) {
    console.log(score);  // 85, 90, 95
}
```

### 2. Forgetting break Exits Only Inner Loop
```javascript
// ⚠️ This might not work as expected
for (const outer of outerArray) {
    for (const inner of innerArray) {
        if (condition) {
            break;  // Only exits inner loop!
        }
    }
}
```

### 3. Confusing continue with break
```javascript
// continue - skip to next iteration
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;  // Skip 2
    console.log(i);  // 0, 1, 3, 4
}

// break - exit loop entirely
for (let i = 0; i < 5; i++) {
    if (i === 2) break;  // Stop at 2
    console.log(i);  // 0, 1
}
```

### 4. Using break/continue in Wrong Context
```javascript
// ❌ Can't use break outside loop
if (condition) {
    break;  // Error!
}

// ✅ Only use in loops
for (const item of items) {
    if (condition) {
        break;  // OK
    }
}
```

## Practice Tips

1. **Compare syntax** - Write same loop with for, for...of
2. **Practice with objects** - Use for...in to explore properties
3. **Use break for searching** - Practice finding items
4. **Use continue for filtering** - Practice skipping invalid data
5. **Debug with console.log** - Print when breaking or continuing

## Ready to Practice?

Complete the exercises in `index.js` to master advanced loops. These patterns will make your SBA code cleaner and more professional!
