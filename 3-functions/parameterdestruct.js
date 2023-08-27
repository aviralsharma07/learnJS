// Parameter Destructuring 

const person = {
    name: "avi",
    age:21
};

printDetails(person);
function printDetails (obj){
    console.log(obj.name);
    console.log(obj.age);
}

// Parameter Destructuring
printDestructDetails(person);
function printDestructDetails ({name,age}){
    console.log(name);
    console.log(age);
}