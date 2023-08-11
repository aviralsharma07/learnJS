// about and is18 Methods will always be created when a new object is created,
// even though they are common for all objects. This increases redundancy.

const userMethods ={
    about : function(){
        return `${this.firstName} is ${this.age} years old`;
    },
    is18 : function(){
        return this.age >= 18;
    }
};

function createUser (firstName, lastName, email, age,address) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about; // We are copying the refrence of Functions in every new object created. 
    user.is18 = userMethods.is18;
    return user;
}

const user1 = createUser("Nakesh","Sharma","nakesh@yahoomail.com",22,"Gopinath, Vrindavan, 281121, UP");
console.log(user1.about(),user1.is18());



