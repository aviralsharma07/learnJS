// Arrays: Refrence Data Types in JavaScript, Objects in JavaScript
// We can store any data type in an array in Javascript

let arr = ["Aviral", "Nakesh", "Aradhana", 'a', 'e', 'i', 1, 2, 3];
console.log(`Array: [${arr}]`);

// --------------------------------------------------------------------------------------------------

// isArray(): Method to find if an Object is an Array or not.

console.log(Array.isArray(arr));

// --------------------------------------------------------------------------------------------------

// push(): adds new element to the back of an Array
// unshift(): adds new element to the beginning of an Array

arr.push("elementAtBack");
arr.unshift("elementAtStart");
console.log(`Array after using Push and Unshift Methods: [${arr}]`);

// --------------------------------------------------------------------------------------------------

// pop(): removes an element from the back of an Array
// shift(): removes new element from the beginning of an Array

arr.pop();
arr.shift();
console.log(`Array after using Pop and Shift Methods: [${arr}]`);