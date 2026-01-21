# Lesson 9: Data Transformation

## Introduction
Data transformation is about converting data from one structure to another. In the SBA, you receive arrays of submissions but need to return an array of learner statistics with calculated averages. This requires grouping, aggregating, and restructuring data.

## Why Data Transformation Matters
- **Different views**: Raw data vs. summary statistics
- **User needs**: Data in a useful, readable format
- **Analysis**: Transform before calculating insights
- **Reporting**: Present data clearly
- **SBA requirement**: Transform submissions array into learner results with averages

## Understanding the SBA Transformation

### Input Data Structure
```javascript
const submissions = [
    {
        learner_id: 125,
        assignment_id: 1,
        submission: { submitted_at: "2024-01-10", score: 47 }
    },
    {
        learner_id: 125,
        assignment_id: 2,
        submission: { submitted_at: "2024-01-15", score: 150 }
    },
    {
        learner_id: 132,
        assignment_id: 1,
        submission: { submitted_at: "2024-01-10", score: 39 }
    }
];
```

### Desired Output Structure
```javascript
[
    {
        id: 125,
        avg: 0.485,  // Overall average
        1: 0.94,     // Assignment 1 score
        2: 0.75      // Assignment 2 score
    },
    {
        id: 132,
        avg: 0.78,
        1: 0.78
    }
]
```

### The Transformation Process
1. **Group** - Organize by learner_id
2. **Calculate** - Compute scores for each assignment
3. **Aggregate** - Calculate average across all assignments
4. **Format** - Structure as required objects

## Grouping Data

### Basic Grouping by Property
```javascript
const submissions = [
    { learner_id: 125, score: 90 },
    { learner_id: 132, score: 85 },
    { learner_id: 125, score: 95 }
];

// Group by learner_id
const grouped = {};

for (const submission of submissions) {
    const id = submission.learner_id;
    
    if (!grouped[id]) {
        grouped[id] = [];  // Create array if doesn't exist
    }
    
    grouped[id].push(submission);
}

console.log(grouped);
// Output:
// {
//     125: [{ learner_id: 125, score: 90 }, { learner_id: 125, score: 95 }],
//     132: [{ learner_id: 132, score: 85 }]
// }
```

### Grouping Pattern Explained
```javascript
// Start with empty object to hold groups
const groups = {};

// Process each item
for (const item of items) {
    const key = item.someProperty;  // What to group by
    
    // Initialize group if first time seeing this key
    if (!groups[key]) {
        groups[key] = [];
    }
    
    // Add item to its group
    groups[key].push(item);
}
```

### Real SBA Grouping
```javascript
function groupByLearner(submissions) {
    const learners = {};
    
    for (const submission of submissions) {
        const learnerId = submission.learner_id;
        
        // First submission for this learner?
        if (!learners[learnerId]) {
            learners[learnerId] = [];
        }
        
        // Add this submission to learner's array
        learners[learnerId].push(submission);
    }
    
    return learners;
}

// Usage
const submissions = [
    { learner_id: 125, assignment_id: 1, score: 90 },
    { learner_id: 132, assignment_id: 1, score: 85 },
    { learner_id: 125, assignment_id: 2, score: 95 }
];

const grouped = groupByLearner(submissions);
console.log(grouped);
// {
//     125: [
//         { learner_id: 125, assignment_id: 1, score: 90 },
//         { learner_id: 125, assignment_id: 2, score: 95 }
//     ],
//     132: [
//         { learner_id: 132, assignment_id: 1, score: 85 }
//     ]
// }
```

## Building Result Objects

### Creating Dynamic Properties
```javascript
// Build object with dynamic property names
const result = {
    id: 125,
    avg: 0.85
};

// Add assignment scores dynamically
const assignmentId = 1;
const score = 0.94;

result[assignmentId] = score;  // Square bracket notation for dynamic keys

console.log(result);
// { id: 125, avg: 0.85, 1: 0.94 }
```

### Building Complete Learner Result
```javascript
function buildLearnerResult(learnerId, submissions, assignments) {
    const result = {
        id: learnerId,
        avg: 0  // Will calculate later
    };
    
    const scores = [];
    
    // Process each submission for this learner
    for (const submission of submissions) {
        const assignment = assignments.find(a => 
            a.id === submission.assignment_id
        );
        
        const percentage = submission.score / assignment.points_possible;
        
        // Add assignment score with dynamic key
        result[submission.assignment_id] = percentage;
        
        // Track for average calculation
        scores.push(percentage);
    }
    
    // Calculate average
    const sum = scores.reduce((acc, score) => acc + score, 0);
    result.avg = sum / scores.length;
    
    return result;
}

// Usage
const learnerSubmissions = [
    { assignment_id: 1, score: 47 },
    { assignment_id: 2, score: 150 }
];

const assignments = [
    { id: 1, points_possible: 50 },
    { id: 2, points_possible: 200 }
];

const result = buildLearnerResult(125, learnerSubmissions, assignments);
console.log(result);
// { id: 125, avg: 0.845, 1: 0.94, 2: 0.75 }
```

## Calculating Aggregates

### Sum
```javascript
const scores = [85, 90, 92, 88];

let sum = 0;
for (const score of scores) {
    sum = sum + score;
}
console.log(sum);  // 355

// Or with reduce
const sum2 = scores.reduce((acc, score) => acc + score, 0);
console.log(sum2);  // 355
```

### Average
```javascript
const scores = [85, 90, 92, 88];

const sum = scores.reduce((acc, score) => acc + score, 0);
const average = sum / scores.length;
console.log(average);  // 88.75
```

### Weighted Average
```javascript
const assignments = [
    { score: 47, pointsPossible: 50 },   // 94%
    { score: 150, pointsPossible: 200 }  // 75%
];

// Calculate total points earned and total points possible
let totalEarned = 0;
let totalPossible = 0;

for (const assignment of assignments) {
    totalEarned += assignment.score;
    totalPossible += assignment.pointsPossible;
}

const weightedAverage = totalEarned / totalPossible;
console.log(weightedAverage);  // 0.845 or 84.5%
```

### SBA Average Calculation
```javascript
function calculateAverage(submissions, assignments) {
    let totalEarned = 0;
    let totalPossible = 0;
    
    for (const submission of submissions) {
        const assignment = assignments.find(a => 
            a.id === submission.assignment_id
        );
        
        totalEarned += submission.score;
        totalPossible += assignment.points_possible;
    }
    
    return totalEarned / totalPossible;
}
```

## Array to Object Transformation

### Array of Objects to Object
```javascript
const users = [
    { id: 125, name: "Alice" },
    { id: 132, name: "Bob" }
];

// Transform to object with id as key
const usersById = {};

for (const user of users) {
    usersById[user.id] = user;
}

console.log(usersById);
// {
//     125: { id: 125, name: "Alice" },
//     132: { id: 132, name: "Bob" }
// }
```

### Object to Array
```javascript
const usersById = {
    125: { id: 125, name: "Alice" },
    132: { id: 132, name: "Bob" }
};

// Transform to array
const usersArray = [];

for (const id in usersById) {
    usersArray.push(usersById[id]);
}

console.log(usersArray);
// [
//     { id: 125, name: "Alice" },
//     { id: 132, name: "Bob" }
// ]

// Or with Object.values()
const usersArray2 = Object.values(usersById);
```

## Complete SBA Transformation

### Step-by-Step Process
```javascript
function getLearnerData(course, ag, submissions) {
    // Step 1: Group submissions by learner
    const learnerSubmissions = {};
    
    for (const submission of submissions) {
        const id = submission.learner_id;
        
        if (!learnerSubmissions[id]) {
            learnerSubmissions[id] = [];
        }
        
        learnerSubmissions[id].push(submission);
    }
    
    // Step 2: Build result for each learner
    const results = [];
    
    for (const learnerId in learnerSubmissions) {
        const submissions = learnerSubmissions[learnerId];
        
        // Create result object
        const result = {
            id: Number(learnerId),  // Convert string key to number
            avg: 0
        };
        
        let totalScore = 0;
        let totalPossible = 0;
        
        // Step 3: Process each submission
        for (const submission of submissions) {
            const assignment = ag.assignments.find(a => 
                a.id === submission.assignment_id
            );
            
            const score = submission.submission.score;
            const possible = assignment.points_possible;
            
            // Calculate percentage for this assignment
            const percentage = score / possible;
            
            // Add to result with assignment ID as key
            result[assignment.id] = percentage;
            
            // Track for average
            totalScore += score;
            totalPossible += possible;
        }
        
        // Step 4: Calculate weighted average
        result.avg = totalScore / totalPossible;
        
        // Add to results array
        results.push(result);
    }
    
    return results;
}
```

## Data Mapping

### Transform Each Item
```javascript
const submissions = [
    { learner_id: 125, score: 47, possible: 50 },
    { learner_id: 132, score: 39, possible: 50 }
];

// Transform to percentages
const percentages = [];

for (const submission of submissions) {
    percentages.push({
        learner_id: submission.learner_id,
        percentage: submission.score / submission.possible
    });
}

console.log(percentages);
// [
//     { learner_id: 125, percentage: 0.94 },
//     { learner_id: 132, percentage: 0.78 }
// ]

// Or with map
const percentages2 = submissions.map(s => ({
    learner_id: s.learner_id,
    percentage: s.score / s.possible
}));
```

### Extract Specific Fields
```javascript
const submissions = [
    { learner_id: 125, score: 47, name: "Alice" },
    { learner_id: 132, score: 39, name: "Bob" }
];

// Extract just IDs
const ids = [];
for (const submission of submissions) {
    ids.push(submission.learner_id);
}
console.log(ids);  // [125, 132]

// Or with map
const ids2 = submissions.map(s => s.learner_id);
```

## Filtering Data

### Filter Before Transforming
```javascript
const submissions = [
    { learner_id: 125, score: 47, submitted: true },
    { learner_id: 132, score: 0, submitted: false },
    { learner_id: 140, score: 39, submitted: true }
];

// Only process submitted assignments
const submitted = [];

for (const submission of submissions) {
    if (submission.submitted) {
        submitted.push(submission);
    }
}

// Now transform
const results = [];
for (const submission of submitted) {
    results.push({
        id: submission.learner_id,
        score: submission.score
    });
}
```

### Filter While Transforming
```javascript
const submissions = [
    { learner_id: 125, score: 47, points_possible: 50 },
    { learner_id: 132, score: 39, points_possible: 0 },  // Invalid!
    { learner_id: 140, score: 39, points_possible: 50 }
];

const results = [];

for (const submission of submissions) {
    // Skip invalid data
    if (submission.points_possible === 0) {
        continue;
    }
    
    // Transform valid data
    results.push({
        id: submission.learner_id,
        percentage: submission.score / submission.points_possible
    });
}
```

## Working with Object Keys

### Get All Keys
```javascript
const learners = {
    125: [/* submissions */],
    132: [/* submissions */]
};

const ids = Object.keys(learners);
console.log(ids);  // ["125", "132"] (strings!)

// Convert to numbers
const numericIds = ids.map(id => Number(id));
console.log(numericIds);  // [125, 132]
```

### Get All Values
```javascript
const learners = {
    125: { name: "Alice" },
    132: { name: "Bob" }
};

const learnerObjects = Object.values(learners);
console.log(learnerObjects);
// [{ name: "Alice" }, { name: "Bob" }]
```

### Get Key-Value Pairs
```javascript
const learners = {
    125: { name: "Alice" },
    132: { name: "Bob" }
};

const entries = Object.entries(learners);
console.log(entries);
// [
//     ["125", { name: "Alice" }],
//     ["132", { name: "Bob" }]
// ]

// Process entries
for (const [id, learner] of entries) {
    console.log(`Learner ${id}: ${learner.name}`);
}
```

## Combining Transformations

### Multi-Step Transformation
```javascript
function processSubmissions(submissions, assignments) {
    // Step 1: Filter out invalid submissions
    const valid = submissions.filter(s => {
        const assignment = assignments.find(a => a.id === s.assignment_id);
        return assignment && assignment.points_possible > 0;
    });
    
    // Step 2: Transform to percentages
    const withPercentages = valid.map(submission => {
        const assignment = assignments.find(a => a.id === submission.assignment_id);
        return {
            ...submission,
            percentage: submission.score / assignment.points_possible
        };
    });
    
    // Step 3: Group by learner
    const grouped = {};
    for (const item of withPercentages) {
        if (!grouped[item.learner_id]) {
            grouped[item.learner_id] = [];
        }
        grouped[item.learner_id].push(item);
    }
    
    // Step 4: Calculate averages
    const results = [];
    for (const learnerId in grouped) {
        const items = grouped[learnerId];
        const avg = items.reduce((sum, item) => sum + item.percentage, 0) / items.length;
        
        results.push({
            id: Number(learnerId),
            avg: avg,
            count: items.length
        });
    }
    
    return results;
}
```

## Best Practices

### 1. Transform in Stages
```javascript
// ✅ Clear stages
const grouped = groupByLearner(submissions);
const withScores = calculateScores(grouped, assignments);
const results = buildResults(withScores);

// ❌ Everything at once - hard to debug
const results = buildResults(calculateScores(groupByLearner(submissions), assignments));
```

### 2. Use Meaningful Variable Names
```javascript
// ❌ Unclear
const x = {};
for (const s of arr) {
    if (!x[s.id]) x[s.id] = [];
    x[s.id].push(s);
}

// ✅ Clear
const learnerSubmissions = {};
for (const submission of submissions) {
    if (!learnerSubmissions[submission.learner_id]) {
        learnerSubmissions[submission.learner_id] = [];
    }
    learnerSubmissions[submission.learner_id].push(submission);
}
```

### 3. Initialize Data Structures
```javascript
// ✅ Clear initialization
const results = [];
const grouped = {};
let totalScore = 0;

// Process data...
```

### 4. Validate as You Transform
```javascript
for (const submission of submissions) {
    // Validate before using
    if (!submission.learner_id || !submission.assignment_id) {
        console.log("Invalid submission, skipping");
        continue;
    }
    
    // Transform
    // ...
}
```

## Common Patterns

### Pattern 1: Group and Aggregate
```javascript
// 1. Group by key
const groups = {};
for (const item of items) {
    const key = item.category;
    if (!groups[key]) groups[key] = [];
    groups[key].push(item);
}

// 2. Aggregate each group
for (const key in groups) {
    const sum = groups[key].reduce((acc, item) => acc + item.value, 0);
    console.log(`${key}: ${sum}`);
}
```

### Pattern 2: Filter and Map
```javascript
// 1. Filter
const valid = items.filter(item => item.score > 0);

// 2. Transform
const results = valid.map(item => ({
    id: item.id,
    percentage: item.score / 100
}));
```

### Pattern 3: Accumulate into Object
```javascript
const result = {
    id: 125
};

for (const item of items) {
    result[item.key] = item.value;
}
```

## Common Mistakes

### 1. Forgetting to Initialize
```javascript
// ❌ Error: Cannot read property 'push' of undefined
const groups = {};
groups[125].push(item);

// ✅ Initialize first
const groups = {};
if (!groups[125]) groups[125] = [];
groups[125].push(item);
```

### 2. String vs Number Keys
```javascript
const obj = {};
obj[125] = "value";

for (const key in obj) {
    console.log(typeof key);  // "string"!
    const numKey = Number(key);  // Convert if needed
}
```

### 3. Not Handling Empty Data
```javascript
// ❌ Error if array is empty
const avg = scores.reduce((a, b) => a + b) / scores.length;

// ✅ Check first
const avg = scores.length > 0
    ? scores.reduce((a, b) => a + b) / scores.length
    : 0;
```

## Practice Tips

1. **Break it down** - Group first, then transform
2. **Log intermediate results** - See what you have at each step
3. **Test with small data** - Easier to verify
4. **Draw it out** - Sketch input and output structures
5. **One transformation at a time** - Don't try to do everything at once

## Ready to Practice?

Complete the exercises in `index.js` to master data transformation. This is the core of the SBA!
