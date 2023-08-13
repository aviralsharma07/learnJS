// getter and setters

class Person{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
       
        this.age = age;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    // setName(firstName,lastName){
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    // }

    set fullName(fullName){
        const [firstname,lastName] = fullName.split(" "); // This will create a List: [firstName,lastName]
        this.firstName = firstname;
        this.lastName = lastName;
    }
}

const person1 = new Person("Aradhna","Jagiasi");
// console.log(person1.fullName());
console.log(person1.fullName);
// fullName Function now have become a property.

console.log("First Name is: ",person1.firstName);
console.log("Last Name is: ",person1.lastName);

// person1.setName("avi","sharma");
// person1.firstName = "avi";
// person1.lastName = "sharma";
// console.log(person1.fullName);

// I WANT THAT IF I WRITE:
// person1.fullName = "Aviral Sharma"; -> yahi se apne aap first and last name change hojaaye.
 
person1.fullName = "Ishika Agrawal";
console.log(person1); 