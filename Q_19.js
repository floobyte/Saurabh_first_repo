// Read input values
let input = "1 2 3 4 5 6 7"; // Replace this line with the actual input mechanism in your environment

// Parse input values
let [a, b, c, d, e, f, g] = input.split(" ").map(Number);

// Declare variables sum1 and sum2
let sum1 = (a + b) * c;
let sum2 = d + e + f + g;

// Print the result of the operation
console.log(sum1 > sum2);
