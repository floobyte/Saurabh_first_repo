// Reading input
const inputValues = prompt("Enter values for one, two, three, four, five, six separated by space:").split(" ").map(Number);

// Extracting values for one, two, three, four, five, six
const [one, two, three, four, five, six] = inputValues;

// Updating values
const updatedTwo = two * 2;
const updatedFive = five * 2;
const updatedSix = six * 2;
const updatedThree = three * 3;
const updatedFour = four * 3;

// Summing up the updated values
const sum = one + updatedTwo + updatedThree + updatedFour + updatedFive + updatedSix;

// Printing the sum
console.log(sum);
