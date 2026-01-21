# Lesson 8: Working with Dates

## Introduction
Dates are fundamental to many programming tasks. In the SBA, you need to compare dates to determine if assignments are due yet and if submissions are late. JavaScript's Date object provides everything you need for date operations.

## Why Dates Matter
- **Time-sensitive logic**: Check if assignments are available yet
- **Late penalties**: Apply deductions for late submissions
- **Filtering**: Only process assignments that are currently due
- **Business rules**: Implement deadline-based logic
- **SBA requirement**: Compare submission dates to due dates

## Creating Date Objects

### Current Date and Time
```javascript
const now = new Date();
console.log(now);  // Current date and time
// Output: 2024-01-15T14:30:00.000Z (example)
```

### From a String
```javascript
const dueDate = new Date("2024-01-15");
console.log(dueDate);
// Output: 2024-01-15T00:00:00.000Z

const exactTime = new Date("2024-01-15T14:30:00");
console.log(exactTime);
// Output: 2024-01-15T14:30:00.000Z
```

### From Components
```javascript
// new Date(year, month, day, hours, minutes, seconds)
// Note: Month is 0-indexed (0 = January, 11 = December)
const newYear = new Date(2024, 0, 1);  // January 1, 2024
console.log(newYear);

const meeting = new Date(2024, 0, 15, 14, 30);  // Jan 15, 2024, 2:30 PM
console.log(meeting);
```

### From Timestamp
```javascript
const timestamp = 1705334400000;  // Milliseconds since Jan 1, 1970
const date = new Date(timestamp);
console.log(date);
```

## Getting Date Information

### Get Components
```javascript
const date = new Date("2024-01-15T14:30:45");

console.log(date.getFullYear());   // 2024
console.log(date.getMonth());      // 0 (January, 0-indexed!)
console.log(date.getDate());       // 15 (day of month)
console.log(date.getDay());        // 1 (Monday, 0 = Sunday)
console.log(date.getHours());      // 14
console.log(date.getMinutes());    // 30
console.log(date.getSeconds());    // 45
console.log(date.getTime());       // Milliseconds since epoch
```

### Month Indexing Warning
```javascript
// ⚠️ Common mistake: months are 0-indexed
const wrong = new Date(2024, 1, 15);   // February 15!
const right = new Date(2024, 0, 15);   // January 15

console.log(wrong.getMonth());  // 1
console.log(right.getMonth());  // 0

// Better: Use string dates to avoid confusion
const safer = new Date("2024-01-15");  // January 15
```

## Comparing Dates

### Direct Comparison
Dates can be compared using comparison operators.

```javascript
const date1 = new Date("2024-01-15");
const date2 = new Date("2024-01-20");

console.log(date1 < date2);   // true (date1 is earlier)
console.log(date1 > date2);   // false
console.log(date1 <= date2);  // true
console.log(date1 >= date2);  // false
```

### Check if Before or After
```javascript
const today = new Date("2024-01-15");
const tomorrow = new Date("2024-01-16");
const yesterday = new Date("2024-01-14");

// Is today before tomorrow?
console.log(today < tomorrow);  // true

// Is today after yesterday?
console.log(today > yesterday);  // true
```

### Check if Same Date
```javascript
const date1 = new Date("2024-01-15");
const date2 = new Date("2024-01-15");

// ❌ Don't use == or ===
console.log(date1 === date2);  // false (different objects!)

// ✅ Compare timestamps
console.log(date1.getTime() === date2.getTime());  // true
```

### Practical Comparisons
```javascript
const dueDate = new Date("2024-01-15");
const submittedDate = new Date("2024-01-17");

// Is submission late?
const isLate = submittedDate > dueDate;
console.log("Is late?", isLate);  // true

// How many days late?
const diffMs = submittedDate - dueDate;
const diffDays = diffMs / (1000 * 60 * 60 * 24);
console.log("Days late:", diffDays);  // 2
```

## SBA Date Operations

### Check if Assignment is Due Yet
```javascript
const assignment = {
    id: 1,
    due_at: "2024-01-15"
};

const today = new Date("2024-01-10");
const dueDate = new Date(assignment.due_at);

// Is this assignment available to work on?
if (today < dueDate) {
    console.log("Assignment not due yet, skip it");
} else {
    console.log("Assignment is due, include in calculations");
}
```

### Filter Out Future Assignments
```javascript
const assignments = [
    { id: 1, due_at: "2024-01-10" },  // Past
    { id: 2, due_at: "2024-01-15" },  // Today
    { id: 3, due_at: "2024-01-20" }   // Future
];

const today = new Date("2024-01-15");

const currentAssignments = assignments.filter(assignment => {
    const dueDate = new Date(assignment.due_at);
    return dueDate <= today;  // Only assignments due today or earlier
});

console.log(currentAssignments);
// Output: [{ id: 1, ... }, { id: 2, ... }]
```

### Check if Submission is Late
```javascript
const assignment = {
    id: 1,
    due_at: "2024-01-15"
};

const submission = {
    assignment_id: 1,
    submitted_at: "2024-01-17"
};

const dueDate = new Date(assignment.due_at);
const submittedDate = new Date(submission.submitted_at);

const isLate = submittedDate > dueDate;
console.log("Submitted late?", isLate);  // true
```

### Apply Late Penalty
```javascript
function calculateScore(submission, assignment) {
    const score = submission.score;
    const dueDate = new Date(assignment.due_at);
    const submittedDate = new Date(submission.submitted_at);
    
    // Check if late
    if (submittedDate > dueDate) {
        // Deduct 10% of possible points
        const penalty = assignment.points_possible * 0.1;
        const adjustedScore = score - penalty;
        return Math.max(0, adjustedScore);  // Don't go below 0
    }
    
    return score;
}

// Example
const assignment = {
    id: 1,
    due_at: "2024-01-15",
    points_possible: 100
};

const submission = {
    assignment_id: 1,
    score: 90,
    submitted_at: "2024-01-17"  // Late!
};

const finalScore = calculateScore(submission, assignment);
console.log("Final score:", finalScore);  // 80 (90 - 10)
```

### Complete Late Submission Logic
```javascript
function processSubmission(submission, assignment) {
    const dueDate = new Date(assignment.due_at);
    const submittedDate = new Date(submission.submitted_at);
    
    let score = submission.score;
    
    // Apply late penalty if submitted after due date
    if (submittedDate > dueDate) {
        const penalty = assignment.points_possible * 0.1;
        score = score - penalty;
        console.log(`Late submission! Applied penalty of ${penalty} points`);
    }
    
    // Calculate percentage
    const percentage = score / assignment.points_possible;
    
    return {
        assignment_id: assignment.id,
        score: score,
        percentage: percentage,
        wasLate: submittedDate > dueDate
    };
}
```

## Date Arithmetic

### Add Days
```javascript
const today = new Date("2024-01-15");
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

console.log(today);      // 2024-01-15
console.log(tomorrow);   // 2024-01-16
```

### Subtract Days
```javascript
const today = new Date("2024-01-15");
const yesterday = new Date(today);
yesterday.setDate(yesterday.getDate() - 1);

console.log(yesterday);  // 2024-01-14
```

### Difference Between Dates
```javascript
const start = new Date("2024-01-10");
const end = new Date("2024-01-15");

// Difference in milliseconds
const diffMs = end - start;
console.log("Difference (ms):", diffMs);

// Convert to days
const diffDays = diffMs / (1000 * 60 * 60 * 24);
console.log("Difference (days):", diffDays);  // 5

// Convert to hours
const diffHours = diffMs / (1000 * 60 * 60);
console.log("Difference (hours):", diffHours);  // 120
```

## Common Date Patterns

### Get Start of Day
```javascript
const date = new Date("2024-01-15T14:30:45");
const startOfDay = new Date(date);
startOfDay.setHours(0, 0, 0, 0);

console.log(date);        // 2024-01-15T14:30:45.000Z
console.log(startOfDay);  // 2024-01-15T00:00:00.000Z
```

### Get End of Day
```javascript
const date = new Date("2024-01-15");
const endOfDay = new Date(date);
endOfDay.setHours(23, 59, 59, 999);

console.log(endOfDay);  // 2024-01-15T23:59:59.999Z
```

### Check if Same Day
```javascript
function isSameDay(date1, date2) {
    return date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate();
}

const d1 = new Date("2024-01-15T10:30:00");
const d2 = new Date("2024-01-15T18:45:00");
console.log(isSameDay(d1, d2));  // true
```

### Check if Today
```javascript
function isToday(date) {
    const today = new Date();
    return isSameDay(date, today);
}

const someDate = new Date("2024-01-15");
console.log(isToday(someDate));  // true or false depending on actual date
```

## Formatting Dates

### toISOString()
```javascript
const date = new Date("2024-01-15T14:30:00");
console.log(date.toISOString());
// Output: "2024-01-15T14:30:00.000Z"
```

### toLocaleDateString()
```javascript
const date = new Date("2024-01-15");
console.log(date.toLocaleDateString());
// Output: "1/15/2024" (varies by locale)

console.log(date.toLocaleDateString("en-US"));
// Output: "1/15/2024"

console.log(date.toLocaleDateString("en-GB"));
// Output: "15/01/2024"
```

### Custom Formatting
```javascript
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

const date = new Date("2024-01-15");
console.log(formatDate(date));  // "2024-01-15"
```

## Edge Cases and Gotchas

### Invalid Dates
```javascript
const invalid = new Date("not a date");
console.log(invalid);           // Invalid Date
console.log(isNaN(invalid));    // true

// Check for invalid dates
if (isNaN(date)) {
    console.log("Invalid date!");
}
```

### Month Rollover
```javascript
const date = new Date(2024, 0, 32);  // January 32nd
console.log(date);  // February 1st (rolled over)

const date2 = new Date(2024, 13, 1);  // Month 13
console.log(date2);  // February 1st, 2025 (rolled over)
```

### Time Zones
```javascript
// Dates in JavaScript are in UTC by default when parsing ISO strings
const date = new Date("2024-01-15T00:00:00");
console.log(date.toISOString());  // Always UTC

// But getHours() returns local time
console.log(date.getHours());  // Depends on your timezone!

// Use UTC methods for consistency
console.log(date.getUTCHours());  // Always UTC
```

## Best Practices

### 1. Use ISO Date Strings
```javascript
// ✅ Recommended
const date = new Date("2024-01-15");

// ❌ Avoid - ambiguous
const date2 = new Date("1/15/2024");
```

### 2. Always Validate Dates
```javascript
function parseDate(dateString) {
    const date = new Date(dateString);
    
    if (isNaN(date)) {
        throw new Error("Invalid date: " + dateString);
    }
    
    return date;
}
```

### 3. Compare Dates, Not Strings
```javascript
// ❌ Wrong - string comparison
if (submission.submitted_at > assignment.due_at) {
    // This might work but is unreliable
}

// ✅ Correct - date comparison
const submitted = new Date(submission.submitted_at);
const due = new Date(assignment.due_at);
if (submitted > due) {
    // Reliable
}
```

### 4. Don't Mutate Original Dates
```javascript
// ❌ Mutates original
function addDay(date) {
    date.setDate(date.getDate() + 1);
    return date;
}

// ✅ Creates new date
function addDay(date) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + 1);
    return newDate;
}
```

## Complete SBA Example

```javascript
function getLearnerData(course, ag, submissions) {
    const results = [];
    const now = new Date();
    
    // Filter assignments that are due
    const dueAssignments = ag.assignments.filter(assignment => {
        const dueDate = new Date(assignment.due_at);
        return dueDate <= now;  // Only include if due already
    });
    
    // Process each submission
    for (const submission of submissions) {
        const assignment = dueAssignments.find(a => 
            a.id === submission.assignment_id
        );
        
        if (!assignment) {
            continue;  // Skip if assignment not due yet
        }
        
        let score = submission.submission.score;
        const dueDate = new Date(assignment.due_at);
        const submittedDate = new Date(submission.submission.submitted_at);
        
        // Apply late penalty
        if (submittedDate > dueDate) {
            const penalty = assignment.points_possible * 0.1;
            score = score - penalty;
        }
        
        // Calculate percentage
        const percentage = score / assignment.points_possible;
        
        results.push({
            learner_id: submission.learner_id,
            assignment_id: assignment.id,
            score: score,
            percentage: percentage
        });
    }
    
    return results;
}
```

## Common Mistakes

### 1. Forgetting Month is 0-Indexed
```javascript
// ❌ Wrong
const date = new Date(2024, 1, 15);  // This is February!

// ✅ Correct
const date = new Date("2024-01-15");  // January 15
```

### 2. Using == or === for Date Equality
```javascript
const date1 = new Date("2024-01-15");
const date2 = new Date("2024-01-15");

// ❌ Wrong
if (date1 === date2) {  // Always false!

// ✅ Correct
if (date1.getTime() === date2.getTime()) {
```

### 3. Not Handling Invalid Dates
```javascript
// ❌ No validation
const date = new Date(userInput);

// ✅ Validate
const date = new Date(userInput);
if (isNaN(date)) {
    throw new Error("Invalid date");
}
```

### 4. String Comparison Instead of Date Comparison
```javascript
// ❌ Unreliable
if ("2024-01-15" > "2024-01-20") {

// ✅ Reliable
if (new Date("2024-01-15") > new Date("2024-01-20")) {
```

## Practice Tips

1. **Test with different dates** - Past, present, future
2. **Test late submissions** - Before and after due date
3. **Test edge cases** - Same day, exactly at deadline
4. **Log dates** - Use console.log to see actual values
5. **Use ISO strings** - They're unambiguous

## Ready to Practice?

Complete the exercises in `index.js` to master working with dates. This is crucial for the SBA's late submission logic!
