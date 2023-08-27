// Classes eliminate the use of Prototype.
// Because Classes have both constructor Function and can hold methods related to newly created objects. No proto refrence is needed.

class createUser {
    constructor(firstName,lastName,email,age,address){
        console.log('Constructor Called');
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.address = address;
    }

    
    about(){
        return `${this.firstName} is ${this.age} Years Old.`
    }

    is18() {
        return this.age >= 18;
    }

    sing(){
        return "Tunuk Tunuk Tun Ta Na Na";
    }

}

const user1 = new createUser("Nakesh","Sharma","nakesh@yahoomail.com",22,"Gopinath, Vrindavan, 281121, UP");
const user2 = new createUser("Aviral","Sharma","aviral@yahoomail.com",17,"Bankhandhi Mahadev, Vrindavan, 281121, UP");

console.log(user1.sing());
console.log(user2.about());
console.log(Object.getPrototypeOf(user1));