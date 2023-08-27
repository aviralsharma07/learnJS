function personalInfo (){
    console.log(`Name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
    firstName:"Aviral",
    age:21,
    about: personalInfo
};

const person2 = {
    firstName:"Nakesh",
    age:22,
    about: personalInfo
};

const person3 = {
    firstName:"PK",
    age:20,
    about: personalInfo
};

person1.about()
person2.about()
person3.about()

console.log(this);


// In the browser window, This keyword means window object
// as if window object is calling the function using this. 
// We use "use strict" to avoid calling of window object. 