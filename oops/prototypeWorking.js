// const userMethods ={
//     about : function(){
//         return `${this.firstName} is ${this.age} years old`;
//     },
//     is18 : function(){
//         return this.age >= 18;
//     },
//     sing: function(){
//         return "Tunuk Tunuk Tun Ta Na Na";
//     }
// };

function createUser (firstName, lastName, email, age,address) {
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}

// createUser Function has a Prototype to store its key-value pairs,
// so instead of creating seperate userMethods Object, we can just store those functions in the function Prototype.

createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old`
};
createUser.prototype.is18 = function(){
    return this.age >= 18;
};
createUser.prototype.sing = () => {return "Tunuk Tunuk Tun Ta Ra Ra"};



const user1 = createUser("Nakesh","Sharma","nakesh@yahoomail.com",22,"Gopinath, Vrindavan, 281121, UP");
const user2 = createUser("Aviral","Sharma","aviral@yahoomail.com",17,"Bankhandhi Mahadev, Vrindavan, 281121, UP");

console.log(user2.about());
console.log(user1.is18());
console.log(user1.sing());

// Prototype: Object
// Proto: Refrence of the Chain that we create to link one object to another. 

