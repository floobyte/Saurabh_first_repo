let N = prompt("Enter the value of N");
let M = prompt("Enter the value of M");

let resultN = N*40;
resultN += 20;
resultN -=50;

if (resultN > M) {
    console.log("Greater!");
} else if (resultN === M) {
    console.log("Equal!");
} else {
    console.log("Lesser!");
}
