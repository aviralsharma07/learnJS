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

    static human = "static property of person";

    static classInfo(){
        return "this is person class";
    }

    // All the Functions below can only be invoked by an Object.
    set fullName(fullName){
        const [firstname,lastName] = fullName.split(" "); // This will create a List: [firstName,lastName]
        this.firstName = firstname;
        this.lastName = lastName;
    }

    isSuperCute(){
        return this.age<=1;
    }

    isCute(){
        return true;
    }

    eat(){
        return `${this.firstName} is Eating`;
    }

}

const person1 = new Person("Avi","Sharma",17);
console.log(person1.eat());

// Static Method can be called by class directly.
const info = Person.classInfo();
console.log(info);
console.log(Person.human);
