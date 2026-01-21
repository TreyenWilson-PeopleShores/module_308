# Lesson 1: Variables and Basic Operations

## Introduction
Variables are containers for storing data values. JavaScript provides three keywords for declaring variables: `var`, `let`, and `const`. Understanding which to use and when is fundamental to writing good JavaScript code.

## Why Variables Matter
Variables allow you to:
- Store data that can be used throughout your program
- Make your code more readable by giving meaningful names to values
- Reuse values without repeating them
- Update values as your program runs

## Variable Declaration Keywords

### `const` - For Constants
Use `const` when the variable's value should **never change**.

```javascript
const PI = 3.14159;
const MAX_SCORE = 100;
const COURSE_NAME = "JavaScript Fundamentals";
```

**Why use const?**
- Prevents accidental reassignment
- Makes your code's intent clear
- Helps avoid bugs
- Modern best practice

**What you CAN'T do:**
```javascript
const score = 100;
score = 95; // ❌ Error! Cannot reassign
```

**What you CAN do:**
```javascript
const scores = [85, 90, 95];
scores.push(100); // ✅ OK! Modifying array contents
scores[0] = 88;   // ✅ OK! Changing array elements
```

### `let` - For Variables That Change
Use `let` when the variable's value **will change**.

```javascript
let currentScore = 0;
let isComplete = false;
let attempts = 0;

currentScore = 85;  // ✅ OK! Value can be updated
attempts++;         // ✅ OK! Can increment
```

**Why use let?**
- Clearly signals that the value will change
- Block-scoped (safer than `var`)
- Modern best practice

### `var` - Avoid in Modern Code
`var` is the old way of declaring variables. **Avoid using it** in new code.

**Problems with var:**
- Function-scoped (can cause bugs)
- Can be redeclared accidentally
- Hoisting behavior is confusing

```javascript
// ❌ DON'T use var
var score = 100;

// ✅ DO use let or const
let score = 100;
```

## Operators

### Arithmetic Operators
Perform mathematical calculations.

```javascript
const a = 10;
const b = 3;

console.log(a + b);  // 13 - Addition
console.log(a - b);  // 7  - Subtraction
console.log(a * b);  // 30 - Multiplication
console.log(a / b);  // 3.333... - Division
console.log(a % b);  // 1  - Remainder (modulo)
console.log(a ** b); // 1000 - Exponentiation (10³)
```

**Why these matter for the SBA:**
```javascript
// Calculate percentage
const score = 85;
const maxPoints = 100;
const percentage = (score / maxPoints) * 100; // 85%

// Calculate late penalty (10% deduction)
const penalty = maxPoints * 0.1; // 10 points
const penalizedScore = score - penalty; // 75
```

### Assignment Operators
Assign and update values.

```javascript
let score = 100;

score = score + 10;  // Long form
score += 10;         // Shorthand - same result
score -= 5;          // Subtract 5
score *= 2;          // Multiply by 2
score /= 4;          // Divide by 4

let counter = 0;
counter++;           // Increment by 1
counter--;           // Decrement by 1
```

### Comparison Operators
Compare values and return true/false.

```javascript
const score = 85;
const passingScore = 70;

// Equality (checks value AND type)
console.log(5 === 5);      // true
console.log(5 === "5");    // false (different types)

// Inequality
console.log(5 !== 3);      // true
console.log(5 !== "5");    // true (different types)

// Greater/Less than
console.log(score > passingScore);   // true
console.log(score >= 85);            // true
console.log(score < 100);            // true
console.log(score <= 85);            // true
```

**⚠️ Common Mistake:**
```javascript
// ❌ DON'T use == (loose equality)
console.log(5 == "5");  // true (type coercion - confusing!)

// ✅ DO use === (strict equality)
console.log(5 === "5"); // false (clearer!)
```

### Logical Operators
Combine conditions.

```javascript
const score = 85;
const submitted = true;
const onTime = true;

// AND - Both must be true
if (submitted && onTime) {
    console.log("Full credit!");
}

// OR - At least one must be true
if (score >= 90 || extraCredit) {
    console.log("Excellent!");
}

// NOT - Inverts boolean
if (!submitted) {
    console.log("Missing assignment");
}
```

## Data Types

### Primitive Types
These are the basic building blocks:

```javascript
// Number - for numeric values
const score = 85;
const percentage = 0.85;
const negative = -10;

// String - for text
const name = "Alice";
const message = 'Hello';
const template = `Score: ${score}`; // Template literal

// Boolean - for true/false
const isPassing = true;
const isLate = false;

// Undefined - variable declared but not assigned
let result;
console.log(result); // undefined

// Null - intentional absence of value
const noData = null;
```

### Checking Types
```javascript
const score = 85;
const name = "Alice";

console.log(typeof score);  // "number"
console.log(typeof name);   // "string"
console.log(typeof true);   // "boolean"
console.log(typeof null);   // "object" (this is a JavaScript quirk!)
```

## Type Coercion
JavaScript sometimes converts types automatically - be careful!

```javascript
// String + Number = String (concatenation)
console.log("10" + 5);      // "105" (string)
console.log("Score: " + 85); // "Score: 85"

// String * Number = Number (multiplication)
console.log("10" * 5);      // 50 (number)
console.log("5" - 3);       // 2 (number)

// ⚠️ This can cause bugs!
const userInput = "100";  // From a form
const bonus = 10;
console.log(userInput + bonus); // "10010" - oops!

// ✅ Fix with explicit conversion
console.log(Number(userInput) + bonus); // 110
```

## Best Practices

### 1. Use Descriptive Names
```javascript
// ❌ Bad
const x = 100;
const y = 85;
const z = y / x;

// ✅ Good
const maxPoints = 100;
const earnedPoints = 85;
const percentage = earnedPoints / maxPoints;
```

### 2. Use const by Default
```javascript
// Start with const
const MAX_ATTEMPTS = 3;
const username = "alice";

// Only use let if you need to reassign
let currentAttempt = 0;
let isComplete = false;

currentAttempt++; // This needs let
```

### 3. Initialize Variables
```javascript
// ❌ Bad
let score;
// ... many lines later ...
console.log(score); // undefined - might cause bugs

// ✅ Good
let score = 0;
// ... many lines later ...
console.log(score); // 0 - predictable
```

### 4. Group Related Variables
```javascript
// Assignment data
const assignmentId = 1;
const assignmentName = "Variables Quiz";
const pointsPossible = 100;

// Submission data
const learnerId = 125;
const submittedScore = 85;
const isLate = false;
```

## SBA Connection

### Calculating Weighted Averages
```javascript
// Two assignments with different point values
const assignment1Score = 50;
const assignment1Possible = 100;

const assignment2Score = 190;
const assignment2Possible = 200;

// Calculate total earned and possible
const totalEarned = assignment1Score + assignment2Score;     // 240
const totalPossible = assignment1Possible + assignment2Possible; // 300

// Calculate weighted average
const weightedAverage = totalEarned / totalPossible; // 0.8 or 80%
```

### Applying Late Penalties
```javascript
const submittedScore = 85;
const pointsPossible = 100;

// 10% late penalty
const penalty = pointsPossible * 0.1;  // 10 points
const finalScore = submittedScore - penalty; // 75 points

// Calculate percentage
const percentage = finalScore / pointsPossible; // 0.75 or 75%
```

### Validating Data
```javascript
const courseId = 451;
const assignmentGroupCourseId = 451;

// Check if they match
const isValidGroup = courseId === assignmentGroupCourseId; // true

if (!isValidGroup) {
    console.log("Error: Mismatched course IDs");
}
```

## Common Mistakes to Avoid

### 1. Forgetting const vs let
```javascript
// ❌ Wrong
const score = 0;
score = 85; // Error!

// ✅ Right
let score = 0;
score = 85; // OK
```

### 2. Type Confusion
```javascript
// ❌ Wrong
const result = "100" / "2"; // 50 (works but inconsistent)
const total = "100" + 50;   // "10050" (concatenation!)

// ✅ Right - be explicit with types
const result = 100 / 2;     // 50
const total = 100 + 50;     // 150
```

### 3. Using == Instead of ===
```javascript
// ❌ Confusing
console.log(5 == "5");   // true (type coercion)
console.log(null == undefined); // true (weird!)

// ✅ Clear
console.log(5 === "5");  // false (as expected)
console.log(5 === 5);    // true
```

## Practice Tips

1. **Always declare before use** - JavaScript requires variables to be declared
2. **Use meaningful names** - Code is read more than written
3. **Comment your calculations** - Explain what percentages mean
4. **Test with console.log** - Verify your calculations are correct
5. **Practice type awareness** - Know when you're working with strings vs numbers

## Ready to Practice?

Now that you understand variables and operators, complete the exercises in `index.js`. These skills form the foundation for everything else in the SBA!
