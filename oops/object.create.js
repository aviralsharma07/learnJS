const obj1 = {
    key1: "val1",
    key2: "val2"
};
const obj2 = Object.create(obj1);
obj2.key3 = "val3";
console.log(obj2);
console.log(obj2.__proto__);
console.log(obj2.key1);
// __proto__ == [[prototype]] Js automatically look for keys in Obj1 if not found in Obj2


// If we have many many functions for a object and there are many objects
// then we have to pass refrences to methods in each new object created. This is a Hassle.


const userMethods ={
    about : function(){
        return `${this.firstName} is ${this.age} years old`;
    },
    is18 : function(){
        return this.age >= 18;
    },
    sing: function(){
        return "tunuk tunuk tun ta ta ta";
    }
};

function createUser (firstName, lastName, email, age,address) {
    const user = Object.create(userMethods);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}

const user1 = createUser("Nakesh","Sharma","nakesh@yahoomail.com",22,"Gopinath, Vrindavan, 281121, UP");
console.log(user1.sing());