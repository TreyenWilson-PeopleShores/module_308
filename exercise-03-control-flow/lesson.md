# Lesson 3: Control Flow with Conditionals

## Introduction
Control flow statements allow your program to make decisions and execute different code based on conditions. This is essential for handling different scenarios, like checking if a submission is late, validating data, or determining grades.

## Why Control Flow Matters
- Makes your program dynamic and responsive
- Handles different scenarios (late vs on-time, pass vs fail)
- Validates data before processing
- Critical for SBA logic (checking due dates, course IDs, score ranges)

## if/else Statements

### Basic if Statement
Execute code only when a condition is true.

```javascript
const score = 85;

if (score >= 70) {
    console.log("Passing!");
}
// Output: "Passing!"
```

**Structure:**
```javascript
if (condition) {
    // Code runs only if condition is true
}
```

### if/else Statement
Execute different code for true vs false.

```javascript
const score = 65;

if (score >= 70) {
    console.log("Passing!");
} else {
    console.log("Not passing");
}
// Output: "Not passing"
```

### if/else if/else Chain
Handle multiple conditions.

```javascript
const percentage = 85;

if (percentage >= 90) {
    console.log("Grade: A");
} else if (percentage >= 80) {
    console.log("Grade: B");
} else if (percentage >= 70) {
    console.log("Grade: C");
} else if (percentage >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}
// Output: "Grade: B"
```

**How it works:**
1. Checks first condition
2. If false, checks next condition
3. Continues until finding true condition
4. Executes that block and skips the rest
5. If all false, executes else block (if present)

### Nested if Statements
Conditions within conditions.

```javascript
const submitted = true;
const score = 85;
const onTime = true;

if (submitted) {
    if (onTime) {
        console.log("Score:", score);
    } else {
        const penalty = 10;
        console.log("Late! Score:", score - penalty);
    }
} else {
    console.log("Assignment not submitted");
}
```

**When to nest:**
- Second condition only matters if first is true
- Makes logic hierarchy clear
- Be careful not to nest too deep (hard to read)

## Comparison Operators (Review)

```javascript
// Equality
5 === 5          // true (equal)
5 !== 3          // true (not equal)

// Greater/Less than
score > 70       // true if score is greater than 70
score >= 70      // true if score is greater than or equal to 70
score < 100      // true if score is less than 100
score <= 100     // true if score is less than or equal to 100
```

## Logical Operators

### AND Operator (&&)
Both conditions must be true.

```javascript
const score = 85;
const submitted = true;

if (score >= 70 && submitted) {
    console.log("Pass!");  // Only runs if BOTH are true
}

// Truth table for &&
true && true    // true
true && false   // false
false && true   // false
false && false  // false
```

**Use cases:**
```javascript
// Check multiple requirements
if (isValidGroup && assignment.points_possible > 0) {
    // Process assignment
}

// Range checking
if (score >= 0 && score <= 100) {
    console.log("Valid score");
}
```

### OR Operator (||)
At least one condition must be true.

```javascript
const score = 95;
const hasExtraCredit = true;

if (score >= 90 || hasExtraCredit) {
    console.log("Excellent work!");  // Runs if EITHER is true
}

// Truth table for ||
true || true    // true
true || false   // true
false || true   // true
false || false  // false
```

**Use cases:**
```javascript
// Check if assignment is exempt
if (assignment.is_extra_credit || assignment.is_bonus) {
    // Handle specially
}

// Provide fallback
const name = user.name || "Guest";  // Use "Guest" if name is falsy
```

### NOT Operator (!)
Inverts a boolean value.

```javascript
const submitted = false;

if (!submitted) {
    console.log("Missing assignment");  // Runs because !false = true
}

// Examples
!true     // false
!false    // true
!0        // true (0 is falsy)
!""       // true (empty string is falsy)
!null     // true (null is falsy)
```

### Combining Logical Operators
```javascript
const score = 85;
const submitted = true;
const onTime = false;

// Complex condition
if (submitted && (onTime || score >= 90)) {
    console.log("Full credit");
}
// Runs if: submitted AND (on time OR score is 90+)

// Use parentheses for clarity!
if ((score >= 90 && submitted) || hasExtraCredit) {
    console.log("A grade");
}
```

## switch Statements
Alternative to multiple if/else if statements.

### Basic switch
```javascript
const grade = "B";

switch (grade) {
    case "A":
        console.log("Excellent!");
        break;
    case "B":
        console.log("Good job!");
        break;
    case "C":
        console.log("Satisfactory");
        break;
    default:
        console.log("Needs improvement");
        break;
}
// Output: "Good job!"
```

**Structure:**
- `switch (expression)` - value to check
- `case value:` - specific value to match
- `break;` - stops execution, exits switch
- `default:` - runs if no case matches (optional)

### switch with Fall-Through
Omitting `break` lets execution continue to next case.

```javascript
const day = "Saturday";

switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("Weekday");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend");
        break;
}
// Output: "Weekend"
```

### switch with Ranges (Advanced)
Use `true` as the switch expression and conditions in cases.

```javascript
const score = 85;

switch (true) {
    case (score >= 90):
        console.log("Grade: A");
        break;
    case (score >= 80):
        console.log("Grade: B");
        break;
    case (score >= 70):
        console.log("Grade: C");
        break;
    default:
        console.log("Grade: F");
        break;
}
// Output: "Grade: B"
```

## SBA Applications

### Validating Course ID Match
```javascript
const course = { id: 451 };
const assignmentGroup = { course_id: 451 };

if (assignmentGroup.course_id !== course.id) {
    console.log("Error: Mismatched course IDs!");
} else {
    console.log("Valid assignment group");
}
```

### Checking if Submission is Late
```javascript
const dueDate = "2024-01-15";
const submittedDate = "2024-01-16";

if (submittedDate > dueDate) {
    console.log("Submission is late");
    // Apply 10% penalty
} else {
    console.log("Submission is on time");
    // No penalty
}
```

### Applying Late Penalty
```javascript
const score = 85;
const pointsPossible = 100;
const isLate = true;

let finalScore;

if (isLate) {
    const penalty = pointsPossible * 0.1;  // 10% penalty
    finalScore = score - penalty;
} else {
    finalScore = score;
}

console.log("Final score:", finalScore);  // 75 if late, 85 if on time
```

### Validating Data
```javascript
const assignment = { points_possible: 100 };

if (assignment.points_possible === 0) {
    console.log("Error: Cannot divide by zero!");
} else if (assignment.points_possible < 0) {
    console.log("Error: Points cannot be negative!");
} else {
    console.log("Valid assignment");
    // Process normally
}
```

### Complex Validation
```javascript
const submission = { score: 85 };
const assignment = { points_possible: 100 };

// Multiple validations
if (!assignment) {
    console.log("Error: Assignment not found");
} else if (assignment.points_possible === 0) {
    console.log("Error: Invalid points_possible");
} else if (submission.score < 0) {
    console.log("Error: Score cannot be negative");
} else if (submission.score > assignment.points_possible) {
    console.log("Error: Score exceeds maximum");
} else {
    console.log("Valid submission");
    // Calculate percentage
    const percentage = submission.score / assignment.points_possible;
}
```

## Truthy and Falsy Values
JavaScript treats certain values as true or false in conditions.

### Falsy Values (treated as false)
```javascript
if (false)        // false
if (0)           // false
if ("")          // false (empty string)
if (null)        // false
if (undefined)   // false
if (NaN)         // false
```

### Truthy Values (everything else is true)
```javascript
if (true)        // true
if (1)           // true
if ("hello")     // true (any non-empty string)
if ([])          // true (even empty array!)
if ({})          // true (even empty object!)
```

### Practical Use
```javascript
// Check if variable exists and has value
const name = "Alice";

if (name) {  // Truthy if name exists and isn't empty
    console.log("Hello,", name);
}

// Provide default value
const score = submission.score || 0;  // Use 0 if score is falsy
```

## Best Practices

### 1. Use Clear Conditions
```javascript
// ❌ Unclear
if (x) { }

// ✅ Clear
if (submitted === true) { }
if (score > 0) { }
```

### 2. Put Most Likely Case First
```javascript
// ✅ Most submissions are on time
if (!isLate) {
    // Handle normal case (most common)
    finalScore = score;
} else {
    // Handle late case (less common)
    finalScore = score - penalty;
}
```

### 3. Keep Conditions Simple
```javascript
// ❌ Too complex
if (score >= 70 && submitted && (onTime || hasExtraCredit) && !isDisqualified) { }

// ✅ Break it down
const isPassing = score >= 70;
const isEligible = submitted && !isDisqualified;
const getsFullCredit = onTime || hasExtraCredit;

if (isPassing && isEligible && getsFullCredit) { }
```

### 4. Use switch for Multiple Exact Matches
```javascript
// ❌ Multiple if/else for exact values
if (status === "pending") { }
else if (status === "submitted") { }
else if (status === "graded") { }

// ✅ Use switch
switch (status) {
    case "pending":
        // ...
        break;
    case "submitted":
        // ...
        break;
    case "graded":
        // ...
        break;
}
```

## Common Mistakes to Avoid

### 1. Assignment vs Comparison
```javascript
// ❌ Wrong - assigns value, always true!
if (score = 100) { }

// ✅ Right - compares values
if (score === 100) { }
```

### 2. Forgetting break in switch
```javascript
// ❌ Forgot break - falls through!
switch (grade) {
    case "A":
        console.log("Excellent");
        // Missing break!
    case "B":
        console.log("Good");  // Prints even for "A"!
        break;
}

// ✅ Include break
switch (grade) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Good");
        break;
}
```

### 3. Incorrect Logic Operators
```javascript
// ❌ Wrong - always false!
if (score > 90 && score < 80) { }

// ✅ Right
if (score > 80 && score < 90) { }
// or
if (score > 90 || score < 80) { }
```

## Practice Tips

1. **Test both branches** - Try conditions that are true AND false
2. **Use console.log** - Print values to verify conditions
3. **Start simple** - Build complex conditions incrementally
4. **Draw truth tables** - For complex logical operators
5. **Read aloud** - "If score is greater than 70 AND submitted is true..."

## Ready to Practice?

Complete the exercises in `index.js` to master control flow. These skills are essential for validating data and handling different scenarios in the SBA!
