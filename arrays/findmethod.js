// We can use find() Method when there is array of objects with unique IDs
// And we need to find Object with first occurence of that ID.

const myArray = ["Hello", "Cat", "Dog", "Lion"];
const islength3 = (str) => {return str.length === 3};
// const ans = myArray.find(islength3);
console.log(myArray.find(islength3));