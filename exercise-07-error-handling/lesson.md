# Lesson 7: Error Handling

## Introduction
Errors are inevitable in programming. Good code doesn't just avoid errors - it handles them gracefully when they occur. Error handling makes your code robust, prevents crashes, and provides helpful feedback when something goes wrong.

## Why Error Handling Matters
- **Robustness**: Program continues despite unexpected input
- **User experience**: Provide helpful error messages instead of crashes
- **Debugging**: Identify problems quickly
- **Data validation**: Ensure data quality before processing
- **SBA requirement**: Must handle invalid data like points_possible = 0, mismatched course IDs, etc.

## try/catch Statements

### Basic Structure
```javascript
try {
    // Code that might throw an error
} catch (error) {
    // Code to handle the error
}
```

### Simple Example
```javascript
try {
    const result = 10 / 0;  // This is valid (Infinity), but let's pretend it errors
    console.log("Result:", result);
} catch (error) {
    console.log("An error occurred!");
}
```

### Catching Real Errors
```javascript
try {
    const obj = null;
    console.log(obj.property);  // Error: Cannot read property of null
} catch (error) {
    console.log("Error caught:", error.message);
}
// Program continues...
console.log("Still running!");
```

### The Error Object
```javascript
try {
    throw new Error("Something went wrong!");
} catch (error) {
    console.log(error.name);     // "Error"
    console.log(error.message);  // "Something went wrong!"
    console.log(error.stack);    // Stack trace
}
```

## Throwing Errors

### The throw Statement
Create and throw your own errors for validation.

```javascript
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

try {
    const result = divide(10, 0);
    console.log(result);
} catch (error) {
    console.log("Error:", error.message);  // "Error: Cannot divide by zero"
}
```

### When to Throw Errors
```javascript
function calculatePercentage(score, maxPoints) {
    // Validate input types
    if (typeof score !== "number") {
        throw new Error("Score must be a number");
    }
    
    if (typeof maxPoints !== "number") {
        throw new Error("Max points must be a number");
    }
    
    // Validate values
    if (maxPoints === 0) {
        throw new Error("Max points cannot be zero");
    }
    
    if (score < 0) {
        throw new Error("Score cannot be negative");
    }
    
    if (score > maxPoints) {
        throw new Error("Score cannot exceed max points");
    }
    
    return (score / maxPoints) * 100;
}
```

## Data Validation

### Type Validation
```javascript
function processScore(score) {
    if (typeof score !== "number") {
        throw new Error(`Invalid type: expected number, got ${typeof score}`);
    }
    return score * 2;
}

try {
    console.log(processScore(85));    // Works
    console.log(processScore("85"));  // Throws error
} catch (error) {
    console.log(error.message);
}
```

### Value Validation
```javascript
function validateAssignment(assignment) {
    // Check if exists
    if (!assignment) {
        throw new Error("Assignment cannot be null or undefined");
    }
    
    // Check required properties
    if (!assignment.points_possible) {
        throw new Error("Assignment must have points_possible");
    }
    
    // Check value range
    if (assignment.points_possible <= 0) {
        throw new Error("points_possible must be greater than zero");
    }
    
    return true;
}
```

### Object Structure Validation
```javascript
function validateSubmission(submission) {
    if (!submission) {
        throw new Error("Submission is required");
    }
    
    if (!submission.learner_id) {
        throw new Error("Submission must have learner_id");
    }
    
    if (!submission.assignment_id) {
        throw new Error("Submission must have assignment_id");
    }
    
    if (!submission.submission) {
        throw new Error("Submission must have submission object");
    }
    
    if (typeof submission.submission.score !== "number") {
        throw new Error("Score must be a number");
    }
    
    return true;
}
```

## SBA Validations

### Validate Course ID Match
```javascript
function validateCourse(course, assignmentGroup) {
    if (!course || !assignmentGroup) {
        throw new Error("Course and assignment group are required");
    }
    
    if (course.id !== assignmentGroup.course_id) {
        throw new Error("Invalid input: assignment group does not belong to this course");
    }
    
    return true;
}

// Usage
try {
    const course = { id: 451 };
    const assignmentGroup = { course_id: 452 };  // Wrong!
    validateCourse(course, assignmentGroup);
} catch (error) {
    console.log("Validation error:", error.message);
}
```

### Handle Division by Zero
```javascript
function calculatePercentage(score, pointsPossible) {
    if (pointsPossible === 0) {
        throw new Error("Cannot calculate percentage: points_possible is zero");
    }
    return score / pointsPossible;
}

// Safe calculation
function safeCalculatePercentage(score, pointsPossible) {
    try {
        return calculatePercentage(score, pointsPossible);
    } catch (error) {
        console.log("Error:", error.message);
        return 0;  // Return default value
    }
}
```

### Validate Score Range
```javascript
function validateScore(score, maxPoints) {
    if (score < 0) {
        throw new Error("Score cannot be negative");
    }
    
    if (score > maxPoints) {
        throw new Error(`Score (${score}) cannot exceed max points (${maxPoints})`);
    }
    
    return true;
}
```

## The finally Block

### Basic finally
```javascript
try {
    console.log("Attempting operation...");
    // Some operation
} catch (error) {
    console.log("Error occurred");
} finally {
    console.log("This always runs");
}
```

### Cleanup with finally
```javascript
function processData(data) {
    console.log("Starting processing...");
    
    try {
        if (!data) {
            throw new Error("No data provided");
        }
        // Process data
        console.log("Processing:", data);
    } catch (error) {
        console.log("Error:", error.message);
    } finally {
        console.log("Processing complete");  // Always runs
    }
}

processData(null);
// Output:
// Starting processing...
// Error: No data provided
// Processing complete
```

## Error Handling Patterns

### Continue on Error
Process multiple items, skipping invalid ones.

```javascript
const submissions = [
    { learner_id: 125, score: 85, points: 100 },
    { learner_id: 132, score: 90, points: 0 },    // Invalid!
    { learner_id: 140, score: 75, points: 100 }
];

const results = [];

for (const submission of submissions) {
    try {
        if (submission.points === 0) {
            throw new Error("Invalid points_possible");
        }
        
        const percentage = submission.score / submission.points;
        results.push({
            learner_id: submission.learner_id,
            percentage: percentage
        });
    } catch (error) {
        console.log(`Skipping learner ${submission.learner_id}:`, error.message);
        continue;
    }
}

console.log("Valid results:", results);
```

### Fail Fast
Stop processing immediately on first error.

```javascript
function getLearnerData(course, assignmentGroup, submissions) {
    try {
        // Validate inputs first
        if (course.id !== assignmentGroup.course_id) {
            throw new Error("Course ID mismatch");
        }
        
        // Process submissions
        for (const submission of submissions) {
            if (submission.score < 0) {
                throw new Error("Invalid score");
            }
            // Process...
        }
        
        return results;
    } catch (error) {
        console.log("Processing failed:", error.message);
        return [];  // Return empty results
    }
}
```

### Nested try/catch
Different error handling at different levels.

```javascript
function processAllLearners(course, assignmentGroup, submissions) {
    try {
        // Validate course - critical error, stop everything
        if (course.id !== assignmentGroup.course_id) {
            throw new Error("Course mismatch");
        }
        
        const results = [];
        
        // Process each submission - non-critical errors, continue
        for (const submission of submissions) {
            try {
                const result = processSubmission(submission);
                results.push(result);
            } catch (error) {
                console.log(`Skipping submission:`, error.message);
                // Continue with next submission
            }
        }
        
        return results;
    } catch (error) {
        console.log("Critical error:", error.message);
        return [];  // Return empty array
    }
}
```

## Defensive Programming

### Check Before Using
```javascript
function processAssignment(assignment) {
    // Check if exists
    if (!assignment) {
        console.log("No assignment provided");
        return null;
    }
    
    // Check if property exists
    if (!assignment.points_possible) {
        console.log("Missing points_possible");
        return null;
    }
    
    // Safe to use now
    return assignment.points_possible * 2;
}
```

### Provide Defaults
```javascript
function calculateAverage(scores) {
    // Handle empty array
    if (!scores || scores.length === 0) {
        return 0;  // Default value
    }
    
    const sum = scores.reduce((acc, score) => acc + score, 0);
    return sum / scores.length;
}
```

### Type Coercion Safety
```javascript
function safeAdd(a, b) {
    // Ensure both are numbers
    const numA = Number(a);
    const numB = Number(b);
    
    if (isNaN(numA) || isNaN(numB)) {
        throw new Error("Both values must be convertible to numbers");
    }
    
    return numA + numB;
}
```

## Best Practices

### 1. Use Specific Error Messages
```javascript
// ❌ Vague
throw new Error("Invalid data");

// ✅ Specific
throw new Error("points_possible must be a positive number, got: " + pointsPossible);
```

### 2. Fail Fast for Critical Errors
```javascript
function getLearnerData(course, ag, submissions) {
    // Validate critical things first
    if (!course || !ag || !submissions) {
        throw new Error("Missing required parameters");
    }
    
    if (course.id !== ag.course_id) {
        throw new Error("Course ID mismatch");
    }
    
    // Now process...
}
```

### 3. Don't Catch Errors You Can't Handle
```javascript
// ❌ Catching but doing nothing
try {
    processData();
} catch (error) {
    // Silent failure - bad!
}

// ✅ Let it propagate or handle properly
try {
    processData();
} catch (error) {
    console.log("Error:", error.message);
    return defaultValue;
}
```

### 4. Validate at Boundaries
```javascript
// Validate when data enters your function
function processSubmission(submission) {
    // Validate immediately
    if (!submission) {
        throw new Error("Submission required");
    }
    
    // Now process with confidence
    return calculateScore(submission);
}
```

### 5. Use try/catch for Expected Errors
```javascript
// Expected error - use try/catch
try {
    const percentage = score / maxPoints;  // Might be division by zero
} catch (error) {
    console.log("Error:", error.message);
}

// Unexpected programming error - let it crash during development
const result = myObject.property;  // If myObject is undefined, let it error
```

## Common Mistakes to Avoid

### 1. Swallowing Errors
```javascript
// ❌ Error disappears
try {
    dangerousOperation();
} catch (error) {
    // Nothing here - error is lost!
}

// ✅ At least log it
try {
    dangerousOperation();
} catch (error) {
    console.log("Error:", error.message);
}
```

### 2. Not Validating Input
```javascript
// ❌ Assumes valid input
function divide(a, b) {
    return a / b;  // What if b is 0? What if they're not numbers?
}

// ✅ Validates input
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

### 3. Over-using try/catch
```javascript
// ❌ Unnecessary try/catch
try {
    const sum = 5 + 3;  // This can't error
    console.log(sum);
} catch (error) {
    // Will never execute
}

// ✅ Only wrap code that might error
const sum = 5 + 3;
console.log(sum);
```

## Practice Tips

1. **Test error cases** - Don't just test the happy path
2. **Use descriptive messages** - Future you will thank you
3. **Validate early** - Check inputs at function start
4. **Log errors** - Always at least console.log them
5. **Test with bad data** - Try null, undefined, 0, negative numbers, wrong types

## Ready to Practice?

Complete the exercises in `index.js` to master error handling. This will make your SBA code robust and professional!
