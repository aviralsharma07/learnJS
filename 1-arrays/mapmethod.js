// MAP METHOD: accepts a callback function and
// return a new array of values returned from Function
// Map() does not change the orignal Array

const array = [23,5,6,11,10];

const evenNumbers = array.map((num) => {return num+5});
console.log(evenNumbers);

// -----------------------------------------------------------------------------------

const people = [
    {name:"Aviral", age:"21", course:"btech"},
    {name:"Aradhana",age:"21", course:"dental"},
    {name:"Pravandhana", age:"20", course:"bsc"}
];
const names = people.map((person) => {return person.name});
console.log(names);