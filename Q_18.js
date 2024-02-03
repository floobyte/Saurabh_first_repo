// Read input values
let input = "1 2 3 4 5"; // Replace this line with the actual input mechanism in your environment

// Parse input values
let [one, two, three, four, five] = input.split(" ").map(Number);

// Declare variables sum1 and sum2
let sum1 = one + two + three;
let sum2 = four + five;

// Print the result of the operation
console.log(sum1 > sum2);
