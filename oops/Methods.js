// Methods: Functions inside Objects

const person = {
    firstName: "Aves",
    age:21,
    about: function(){
        console.log(`Person name is ${this.firstName} and age is ${this.age}`);
    }
};

person?.about();


