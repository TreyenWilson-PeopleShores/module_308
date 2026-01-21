# Lesson 2: Objects and Arrays Basics

## Introduction
Objects and arrays are JavaScript's main data structures. They allow you to organize and group related data together, which is essential for working with real-world information like course data, assignments, and student submissions.

## Why Objects and Arrays Matter
- **Objects** group related properties together (like a student's name, ID, and score)
- **Arrays** store ordered lists of items (like multiple assignments or submissions)
- Together, they let you model complex real-world data
- Essential for the SBA where you'll work with courses, assignments, and submissions

## Objects

### Creating Objects
An object is a collection of key-value pairs (properties).

```javascript
// Object literal syntax (most common)
const student = {
    id: 125,
    name: "Alice Johnson",
    email: "alice@example.com",
    grade: 85
};
```

**Why use objects?**
- Keep related data together
- Make code more organized and readable
- Model real-world entities

### Accessing Properties
Two ways to access object properties:

#### Dot Notation (Preferred)
```javascript
const student = {
    id: 125,
    name: "Alice"
};

console.log(student.id);    // 125
console.log(student.name);  // "Alice"
```

**Use dot notation when:**
- You know the property name ahead of time
- The property name is a valid identifier (no spaces, special characters)

#### Bracket Notation
```javascript
const student = {
    id: 125,
    "full name": "Alice Johnson"  // Property with space
};

console.log(student["id"]);         // 125
console.log(student["full name"]);  // "Alice Johnson"

// Dynamic access
const propertyName = "id";
console.log(student[propertyName]); // 125
```

**Use bracket notation when:**
- Property name has spaces or special characters
- Property name is stored in a variable
- Property name is computed dynamically

### Modifying Objects
```javascript
const assignment = {
    id: 1,
    name: "Variables Quiz",
    points: 50
};

// Add a new property
assignment.dueDate = "2024-01-15";
assignment["maxAttempts"] = 3;

// Modify existing property
assignment.points = 100;

// Delete a property
delete assignment.maxAttempts;

console.log(assignment);
// { id: 1, name: "Variables Quiz", points: 100, dueDate: "2024-01-15" }
```

### Nested Objects
Objects can contain other objects.

```javascript
const submission = {
    learner_id: 125,
    assignment_id: 1,
    submission: {
        submitted_at: "2024-01-15",
        score: 85
    }
};

// Access nested properties
console.log(submission.learner_id);              // 125
console.log(submission.submission.score);         // 85
console.log(submission.submission.submitted_at);  // "2024-01-15"
```

**Why nested objects?**
- Organize complex data hierarchically
- Match the structure of real-world data
- This is exactly how SBA data is structured!

## Arrays

### Creating Arrays
An array is an ordered list of items.

```javascript
// Array literal syntax (most common)
const scores = [85, 90, 95, 100];
const names = ["Alice", "Bob", "Carol"];
const mixed = [1, "two", true, null]; // Can hold different types

// Empty array
const submissions = [];
```

### Accessing Array Elements
Arrays use zero-based indexing (first element is at index 0).

```javascript
const scores = [85, 90, 95, 100];

console.log(scores[0]);  // 85 (first element)
console.log(scores[1]);  // 90 (second element)
console.log(scores[3]);  // 100 (fourth element)
console.log(scores[4]);  // undefined (doesn't exist)

// Get array length
console.log(scores.length);  // 4

// Access last element
console.log(scores[scores.length - 1]);  // 100
```

### Modifying Arrays

#### Adding Elements
```javascript
const fruits = ["apple", "banana"];

// Add to end
fruits.push("orange");
console.log(fruits);  // ["apple", "banana", "orange"]

// Add to beginning
fruits.unshift("grape");
console.log(fruits);  // ["grape", "apple", "banana", "orange"]

// Add at specific index
fruits[5] = "mango";
console.log(fruits);  // ["grape", "apple", "banana", "orange", undefined, "mango"]
```

#### Removing Elements
```javascript
const fruits = ["apple", "banana", "orange"];

// Remove from end
const last = fruits.pop();
console.log(last);    // "orange"
console.log(fruits);  // ["apple", "banana"]

// Remove from beginning
const first = fruits.shift();
console.log(first);   // "apple"
console.log(fruits);  // ["banana"]
```

#### Modifying Elements
```javascript
const scores = [85, 90, 95];

// Change specific element
scores[1] = 92;
console.log(scores);  // [85, 92, 95]

// Multiple changes
scores[0] = 88;
scores[2] = 100;
console.log(scores);  // [88, 92, 100]
```

### Arrays of Objects
Most powerful pattern - combining arrays and objects.

```javascript
const assignments = [
    {
        id: 1,
        name: "Variables Quiz",
        points_possible: 100
    },
    {
        id: 2,
        name: "Loops Practice",
        points_possible: 75
    },
    {
        id: 3,
        name: "Functions Test",
        points_possible: 150
    }
];

// Access first assignment
console.log(assignments[0]);           // Whole object
console.log(assignments[0].name);      // "Variables Quiz"
console.log(assignments[0].points_possible);  // 100

// Access second assignment's id
console.log(assignments[1].id);        // 2

// Modify an assignment
assignments[0].points_possible = 120;
```

**Why arrays of objects?**
- Store multiple similar items (all assignments, all submissions)
- Each item has detailed properties
- Essential SBA pattern!

## SBA Data Structures

### CourseInfo Object
```javascript
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
};

// Accessing
console.log(CourseInfo.id);    // 451
console.log(CourseInfo.name);  // "Introduction to JavaScript"
```

### AssignmentGroup Object
```javascript
const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals",
    course_id: 451,
    group_weight: 25,
    assignments: [  // Array of assignment objects!
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
        }
    ]
};

// Accessing nested data
console.log(AssignmentGroup.course_id);           // 451
console.log(AssignmentGroup.assignments[0].name); // "Declare a Variable"
console.log(AssignmentGroup.assignments[1].points_possible); // 150
```

### LearnerSubmission Array
```javascript
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
    }
];

// Access first submission's score
console.log(LearnerSubmissions[0].submission.score);  // 47

// Access second submission's learner_id
console.log(LearnerSubmissions[1].learner_id);  // 125
```

## Common Patterns

### Finding an Item by Property
```javascript
const assignments = [
    { id: 1, name: "Quiz 1" },
    { id: 2, name: "Quiz 2" },
    { id: 3, name: "Quiz 3" }
];

// Find assignment with id 2
let found = null;
for (let i = 0; i < assignments.length; i++) {
    if (assignments[i].id === 2) {
        found = assignments[i];
        break;
    }
}
console.log(found);  // { id: 2, name: "Quiz 2" }
```

### Filtering by Property
```javascript
const submissions = [
    { learner_id: 125, score: 85 },
    { learner_id: 132, score: 90 },
    { learner_id: 125, score: 78 }
];

// Get all submissions for learner 125
const learner125 = [];
for (let i = 0; i < submissions.length; i++) {
    if (submissions[i].learner_id === 125) {
        learner125.push(submissions[i]);
    }
}
console.log(learner125);
// [{ learner_id: 125, score: 85 }, { learner_id: 125, score: 78 }]
```

### Calculating from Array Data
```javascript
const submissions = [
    { score: 85, points_possible: 100 },
    { score: 140, points_possible: 150 },
    { score: 45, points_possible: 50 }
];

// Calculate total earned and total possible
let totalEarned = 0;
let totalPossible = 0;

for (let i = 0; i < submissions.length; i++) {
    totalEarned += submissions[i].score;
    totalPossible += submissions[i].points_possible;
}

const average = totalEarned / totalPossible;  // 0.9 or 90%
```

## Best Practices

### 1. Use Descriptive Property Names
```javascript
// ❌ Bad
const s = { i: 1, n: "Quiz", p: 100 };

// ✅ Good
const assignment = {
    id: 1,
    name: "Quiz",
    points_possible: 100
};
```

### 2. Be Consistent with Naming
```javascript
// ✅ Good - consistent naming
const assignment = {
    id: 1,
    assignment_id: 1,  // Use same style for IDs
    course_id: 451
};
```

### 3. Use const for Arrays/Objects
```javascript
// ✅ Good - const prevents reassignment
const scores = [85, 90, 95];
scores.push(100);  // OK - modifying contents
scores[0] = 88;    // OK - changing elements

// scores = [1, 2, 3];  // ❌ Error - can't reassign
```

### 4. Check Before Accessing
```javascript
const assignment = {
    id: 1,
    name: "Quiz"
};

// ❌ Risky
console.log(assignment.points_possible.toFixed(2));  // Error if undefined

// ✅ Safe
if (assignment.points_possible) {
    console.log(assignment.points_possible.toFixed(2));
}
```

## Common Mistakes to Avoid

### 1. Confusing Arrays and Objects
```javascript
// ❌ Wrong - trying to use array like object
const scores = [85, 90, 95];
console.log(scores.first);  // undefined

// ✅ Right - use index
console.log(scores[0]);  // 85
```

### 2. Off-by-One Errors
```javascript
const scores = [85, 90, 95];

// ❌ Wrong
console.log(scores[3]);  // undefined (only indices 0, 1, 2 exist)

// ✅ Right
console.log(scores[2]);  // 95 (last element)
console.log(scores[scores.length - 1]);  // 95 (always last)
```

### 3. Forgetting Array is Zero-Indexed
```javascript
const assignments = [
    { id: 1, name: "First" },
    { id: 2, name: "Second" }
];

// ❌ Common confusion
// "First assignment" is NOT at index 1, it's at index 0!
console.log(assignments[1]);  // { id: 2, name: "Second" }

// ✅ Right
console.log(assignments[0]);  // { id: 1, name: "First" }
```

### 4. Mutating When You Don't Mean To
```javascript
const original = { score: 85 };
const copy = original;  // ⚠️ NOT a copy! Same object!

copy.score = 90;
console.log(original.score);  // 90 - original changed too!

// ✅ To actually copy, use spread or Object.assign
const realCopy = { ...original };
```

## Practice Tips

1. **Draw the structure** - Sketch objects and arrays on paper
2. **Use console.log liberally** - Check what data looks like
3. **Practice accessing nested data** - This is crucial for the SBA
4. **Build incrementally** - Start simple, add complexity
5. **Use meaningful names** - Make your data self-documenting

## Ready to Practice?

Complete the exercises in `index.js` to master objects and arrays. These are the foundation for handling all the SBA data!
