// new keyword

// function createUser(firstName, age){
//     this.firstName = firstName;
//     this.age = age;
// }

// createUser.prototype.about = function (){
//     console.log(this.firstName, this.age);
// }

// const user1 = new createUser("aviral",21);

// new Keyword: 1. Creates an Empty Object when a function is called.
//              2. Return the Object
//              ## Object.create(createUser.prototype) -> Ye Kaam aabnew keyword kardega chaining ka of prototype to newly created object.

// ----------------------------------------------------------------------------------------------------------------

// Since this function is used to create Objects, it is constructor Function.
// By convention contructor functions starts with Capital Letters. 
function CreateUser (firstName, lastName, email, age,address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}


CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old`
};
CreateUser.prototype.is18 = function(){
    return this.age >= 18;
};
CreateUser.prototype.sing = () => {return "Tunuk Tunuk Tun Ta Ra Ra"};



const user1 = new CreateUser("Nakesh","Sharma","nakesh@yahoomail.com",22,"Gopinath, Vrindavan, 281121, UP");
const user2 = new CreateUser("Aviral","Sharma","aviral@yahoomail.com",17,"Bankhandhi Mahadev, Vrindavan, 281121, UP");

console.log(user2.about());
console.log(user1.is18());
console.log(user1.sing());

// ---------------------------------------------------------------------------------------------------------------------

// hasOwnPrperty()
for (let key in user1){
    if (user1.hasOwnProperty(key)){
        console.log(key);
    }
}// Now the chainsed properties of function prototype are not visible. 