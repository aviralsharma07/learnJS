const myArray = ["value1", "value2"];

// let var1 = myArray[0];
// let var2 = myArray[1];
// console.log(var1, var2);

let [myvar1, myvar2] = myArray;
console.log(myvar1, myvar2);

let numbers = [0,1,2,3,4,5,6,7,8,9];
let [zero,one,two,,,five,...newNumberArray] = numbers;
console.log(zero,one,two,five,newNumberArray);