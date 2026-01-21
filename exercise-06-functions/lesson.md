# Lesson 6: Functions

## Introduction
Functions are reusable blocks of code that perform specific tasks. They're the building blocks of organized, maintainable programs. Instead of writing the same code multiple times, you write it once in a function and call it whenever needed.

## Why Functions Matter
- **Reusability**: Write once, use many times
- **Organization**: Break complex problems into smaller pieces
- **Maintainability**: Fix bugs in one place
- **Readability**: Named functions document what code does
- **Testing**: Easier to test small functions
- Critical for SBA: You need helper functions for calculations, validation, and data processing

## Function Basics

### Function Declaration
```javascript
function greet(name) {
    console.log("Hello, " + name);
}

greet("Alice");  // Hello, Alice
greet("Bob");    // Hello, Bob
```

**Structure:**
```javascript
function functionName(parameter1, parameter2) {
    // Function body
    // Code to execute
}
```

### Calling Functions
```javascript
function sayHello() {
    console.log("Hello!");
}

sayHello();  // Call the function
sayHello();  // Can call multiple times
```

### Parameters and Arguments
- **Parameters**: Variables in function definition
- **Arguments**: Actual values passed when calling

```javascript
function add(a, b) {  // a and b are parameters
    console.log(a + b);
}

add(5, 3);  // 5 and 3 are arguments
add(10, 20); // 10 and 20 are arguments
```

## Return Values

### The return Statement
Functions can produce values using `return`.

```javascript
function add(a, b) {
    return a + b;  // Return the sum
}

const result = add(5, 3);
console.log(result);  // 8

const total = add(10, 20) + add(5, 15);
console.log(total);  // 50
```

**Key points:**
- `return` sends a value back to the caller
- `return` immediately exits the function
- Functions without `return` return `undefined`

### Return vs Console.log
```javascript
// ❌ This just prints, doesn't return
function addWrong(a, b) {
    console.log(a + b);
}

const x = addWrong(5, 3);  // Prints 8
console.log(x);  // undefined

// ✅ This returns the value
function addRight(a, b) {
    return a + b;
}

const y = addRight(5, 3);
console.log(y);  // 8
```

### Early Return
```javascript
function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";  // Exit early
    }
    return a / b;
}

console.log(divide(10, 2));  // 5
console.log(divide(10, 0));  // "Cannot divide by zero"
```

## Function Expressions

### Assigning Functions to Variables
```javascript
const greet = function(name) {
    return "Hello, " + name;
};

console.log(greet("Alice"));  // Hello, Alice
```

**Difference from declaration:**
- Function declarations are hoisted (can be called before definition)
- Function expressions are not hoisted

```javascript
// ✅ Works - declaration is hoisted
sayHi();
function sayHi() {
    console.log("Hi!");
}

// ❌ Error - expression not hoisted
sayHello();  // Error: Cannot access before initialization
const sayHello = function() {
    console.log("Hello!");
};
```

## Arrow Functions (ES6)

### Basic Syntax
```javascript
// Traditional function
const add = function(a, b) {
    return a + b;
};

// Arrow function - more concise
const add = (a, b) => {
    return a + b;
};

// Arrow function - implicit return (one-liner)
const add = (a, b) => a + b;
```

### Arrow Function Variations
```javascript
// No parameters
const greet = () => console.log("Hello!");

// One parameter - parentheses optional
const double = x => x * 2;
const triple = (x) => x * 3;  // Parentheses still OK

// Multiple parameters - need parentheses
const add = (a, b) => a + b;

// Multiple lines - need braces and return
const calculate = (a, b) => {
    const sum = a + b;
    const product = a * b;
    return sum + product;
};
```

### When to Use Arrow Functions
```javascript
// ✅ Good for short, simple functions
const square = x => x * x;
const isEven = n => n % 2 === 0;

// ✅ Good for array methods (later lessons)
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);

// ❌ Sometimes traditional is clearer
function calculateWeightedAverage(totalEarned, totalPossible) {
    if (totalPossible === 0) {
        return 0;
    }
    return totalEarned / totalPossible;
}
```

## Helper Functions

### Building Blocks
Break complex tasks into smaller, focused functions.

```javascript
// Helper function 1
function calculatePercentage(score, maxPoints) {
    return (score / maxPoints) * 100;
}

// Helper function 2
function isLate(submittedDate, dueDate) {
    return submittedDate > dueDate;
}

// Helper function 3
function applyLatePenalty(score, maxPoints) {
    const penalty = maxPoints * 0.1;
    return score - penalty;
}

// Main function uses helpers
function calculateFinalScore(score, maxPoints, submittedDate, dueDate) {
    if (isLate(submittedDate, dueDate)) {
        return applyLatePenalty(score, maxPoints);
    }
    return score;
}
```

**Benefits:**
- Each function has one clear purpose
- Easy to test individually
- Easy to reuse
- Easy to understand

### Real SBA Example
```javascript
// Helper: Find assignment by ID
function findAssignment(assignments, assignmentId) {
    for (const assignment of assignments) {
        if (assignment.id === assignmentId) {
            return assignment;
        }
    }
    return null;
}

// Helper: Check if submission is late
function isSubmissionLate(submission, assignment) {
    const submitted = new Date(submission.submission.submitted_at);
    const due = new Date(assignment.due_at);
    return submitted > due;
}

// Helper: Calculate score with penalty
function calculateFinalScore(submission, assignment) {
    let score = submission.submission.score;
    if (isSubmissionLate(submission, assignment)) {
        score -= assignment.points_possible * 0.1;
    }
    return score;
}

// Main function uses all helpers
function processSubmission(submission, assignments) {
    const assignment = findAssignment(assignments, submission.assignment_id);
    
    if (!assignment) {
        return null;
    }
    
    const finalScore = calculateFinalScore(submission, assignment);
    const percentage = finalScore / assignment.points_possible;
    
    return {
        assignment_id: assignment.id,
        percentage: percentage
    };
}
```

## Function Parameters

### Default Parameters
```javascript
function greet(name = "Guest") {
    console.log("Hello, " + name);
}

greet("Alice");  // Hello, Alice
greet();         // Hello, Guest
```

```javascript
function calculatePercentage(score, maxPoints = 100) {
    return (score / maxPoints) * 100;
}

console.log(calculatePercentage(85));      // 85%
console.log(calculatePercentage(85, 200)); // 42.5%
```

### Multiple Parameters
```javascript
function calculateGrade(score, maxPoints, latePenalty, bonusPoints) {
    let finalScore = score + bonusPoints - latePenalty;
    return (finalScore / maxPoints) * 100;
}

const percentage = calculateGrade(85, 100, 10, 5);
console.log(percentage);  // 80%
```

### Parameter Order Matters
```javascript
function divide(numerator, denominator) {
    return numerator / denominator;
}

console.log(divide(10, 2));  // 5
console.log(divide(2, 10));  // 0.2 (different!)
```

## Scope

### Function Scope
Variables defined in a function are local to that function.

```javascript
function calculate() {
    const result = 10 + 5;  // Local variable
    console.log(result);     // 15
}

calculate();
console.log(result);  // Error: result is not defined
```

### Global vs Local Scope
```javascript
const globalVar = "I'm global";

function myFunction() {
    const localVar = "I'm local";
    console.log(globalVar);  // ✅ Can access global
    console.log(localVar);   // ✅ Can access local
}

myFunction();
console.log(globalVar);  // ✅ Can access global
console.log(localVar);   // ❌ Error: not defined
```

### Parameters are Local
```javascript
function greet(name) {  // name is local to this function
    console.log("Hello, " + name);
}

greet("Alice");
console.log(name);  // Error: name is not defined
```

## Best Practices

### 1. One Purpose Per Function
```javascript
// ❌ Function does too much
function processEverything(data) {
    // Validates
    // Calculates
    // Formats
    // Saves
}

// ✅ Separate functions
function validateData(data) { /* ... */ }
function calculateResult(data) { /* ... */ }
function formatOutput(result) { /* ... */ }
function saveResult(result) { /* ... */ }
```

### 2. Use Descriptive Names
```javascript
// ❌ Unclear
function calc(x, y) { return x / y * 100; }

// ✅ Clear
function calculatePercentage(score, maxPoints) {
    return (score / maxPoints) * 100;
}
```

### 3. Keep Functions Short
```javascript
// ✅ Short and focused
function isValid(score, maxPoints) {
    return score >= 0 && score <= maxPoints;
}

// If function is too long, break it into smaller functions
```

### 4. Use Return, Not console.log
```javascript
// ❌ Hard to use elsewhere
function calculate(a, b) {
    console.log(a + b);
}

// ✅ Returns value for flexibility
function calculate(a, b) {
    return a + b;
}

const result = calculate(5, 3);
console.log(result);  // Can use result anywhere
```

### 5. Validate Inputs
```javascript
function divide(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Both arguments must be numbers");
    }
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}
```

## SBA Function Examples

### Calculate Weighted Average
```javascript
function calculateWeightedAverage(submissions, assignments) {
    let totalEarned = 0;
    let totalPossible = 0;
    
    for (const submission of submissions) {
        const assignment = findAssignment(assignments, submission.assignment_id);
        if (assignment) {
            totalEarned += submission.score;
            totalPossible += assignment.points_possible;
        }
    }
    
    return totalPossible > 0 ? totalEarned / totalPossible : 0;
}
```

### Get Unique Learner IDs
```javascript
function getUniqueLearnerIds(submissions) {
    const learnerIds = [];
    
    for (const submission of submissions) {
        if (!learnerIds.includes(submission.learner_id)) {
            learnerIds.push(submission.learner_id);
        }
    }
    
    return learnerIds;
}
```

### Filter Submissions by Learner
```javascript
function getSubmissionsForLearner(submissions, learnerId) {
    const learnerSubmissions = [];
    
    for (const submission of submissions) {
        if (submission.learner_id === learnerId) {
            learnerSubmissions.push(submission);
        }
    }
    
    return learnerSubmissions;
}
```

### Validate Course Match
```javascript
function validateCourseMatch(course, assignmentGroup) {
    if (course.id !== assignmentGroup.course_id) {
        throw new Error("Invalid input: assignment group does not belong to this course");
    }
    return true;
}
```

## Common Mistakes to Avoid

### 1. Forgetting to Return
```javascript
// ❌ No return
function add(a, b) {
    a + b;  // Doesn't return anything
}
const result = add(5, 3);
console.log(result);  // undefined

// ✅ Returns value
function add(a, b) {
    return a + b;
}
```

### 2. Code After Return
```javascript
// ❌ Code after return never runs
function calculate(x) {
    return x * 2;
    console.log("This never prints");  // Dead code
}
```

### 3. Not Calling the Function
```javascript
function greet() {
    console.log("Hello!");
}

greet;    // ❌ Just references function, doesn't call it
greet();  // ✅ Calls the function
```

### 4. Wrong Number of Arguments
```javascript
function add(a, b) {
    return a + b;
}

console.log(add(5));      // NaN (b is undefined)
console.log(add(5, 3, 7)); // 8 (extra argument ignored)
```

## Practice Tips

1. **Start small** - Write simple functions first
2. **Test immediately** - Call your function with different inputs
3. **Use console.log** - Print parameters and return values
4. **Build incrementally** - Add one feature at a time
5. **Reuse functions** - Call functions from other functions

## Ready to Practice?

Complete the exercises in `index.js` to master functions. You'll build the helper functions you'll use throughout the SBA!
