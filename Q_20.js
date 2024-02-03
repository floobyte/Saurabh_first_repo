// Read input values
let input = "1 2 2 3"; // Replace this line with the actual input mechanism in your environment

// Parse input values
let [L1, B1, L2, B2] = input.split(" ").map(Number);

// Calculate area and perimeter for both rectangles
let area1 = L1 * B1;
let area2 = L2 * B2;
let perimeter1 = 2 * (L1 + B1);
let perimeter2 = 2 * (L2 + B2);

// Print the comparison results
console.log(area1 > area2);
console.log(perimeter1 > perimeter2);
