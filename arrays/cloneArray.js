// Cloning: Compy elements of one Array to another new Array.

let array = ["Sun", "Mon", "Tue", "Wed", "Thu", "fri", "Sat"];
console.log(`Orignal Array: [${array}]`)

// ------------------------------------------------------------------------------------

// 1. Slice Method

// let array1 = array.slice(0);
// array1.push("Slice Method");
let array1 = array.slice(0).concat(["Slice Method"]);
console.log(`Cloned Array 1: [${array1}]`);

// ------------------------------------------------------------------------------------

// 2. Concat Method with an empty Array

// let array2 = [].concat(array);
// array2.push("Concat Method");
let array2 = [].concat(array,["Concat Method"]);
console.log(`Cloned Array 2: [${array2}]`);

// ------------------------------------------------------------------------------------

// 3. Spread Operator

// let array3 = [...array];
// array3.push("Spread operator");
let array3 = [...array,"Spread Operator"];

console.log(`Cloned Array 3: [${array3}]`);