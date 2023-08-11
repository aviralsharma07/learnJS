const user = {
    firstName: "Aviral",
    lastName: "Sharma",
    email: "kuchbhi@gmail.com",
    age:21,
    address:"House Number, olony, Pincode, State",
    about(){
        return `${this.firstName} is ${this.age} years old`;
    },
    is18(){
        return this.age >= 18;
    }
}

const about = user.about();
console.log(about);

// But what if we want million of users i.e A mil user Objects?

// 1. We will create a Function that creates Object
// 2. Fn will add key value pairs to this newly created Object.
// 3. return this created object.

function createUser (firstName, lastName, email, age,address) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.firstName} is ${this.age} years old`;
    };
    user.is18 = function(){
        return this.age >= 18;
    };
    return user;
}

const user1 = createUser("Nakesh","Sharma","nakesh@yahoomail.com",22,"Gopinath, Vrindavan, 281121, UP");
console.log(user1);
console.log(user1.about(),user1.is18());