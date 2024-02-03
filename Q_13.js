// Reading input
const inputNumbers = prompt("Enter 7 numbers separated by space:").split(" ").map(Number);

// Extracting values for A, B, C, D, E, F, G
const [A, B, C, D, E, F, G] = inputNumbers;

// Calculating the sums
const sumABC = A + B + C;
const sumDEFG = D + E + F + G;

// Calculating and printing the product
const product = sumABC * sumDEFG;
console.log(product);
