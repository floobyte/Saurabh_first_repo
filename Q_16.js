// Read input values
let input = "4 8 5"; // Replace this line with the actual input mechanism in your environment

// Parse input values
let [num1, num2, num3] = input.split(" ").map(Number);

// Check and print the result of the first operation
let result1 = num1 > num2;
console.log(result1);

// Add num3 to num1
num1 += num3;

// Check and print the result of the second operation
let result2 = num1 > num2;
console.log(result2);





