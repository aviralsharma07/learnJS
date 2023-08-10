// Map: - it is an iterable


// In Objects, Keys can only be string or symbols.
// In Map, Keys can be of any data type. 
const person = new Map();
person.set("firstName","Aviral");
person.set("age",7);
person.set(1,"one");
console.log(person.get("age"));

console.log();

// console.log(person.keys());
for (const key of person.keys()){
    console.log(key,"is of type",typeof key);
}

console.log();

// Key Value Pairs in Map are stored in form of Array.
for (let [key,value] of person){ // Destructuring
    console.log(key,value);
}

console.log();

const person1 = {
    id: 1,
    firstName: "Aradhna"
};

const extraInfo = new Map();
extraInfo.set(person1,{age:19,gender:"female"});
console.log(person1["id"]);
console.log(extraInfo.get(person1).gender);
