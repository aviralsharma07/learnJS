class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    isSuperCute(){
        return this.age<=1;
    }

    isCute(){
        return true;
    }

    eat(){
        return `${this.name} is Eating`;
    }
}

const animal1 = new Animal("Tom",1);
const animal2 = new Animal("Jerry",3);

console.log(animal1.eat());
console.log(animal2.isSuperCute());

class Dog extends Animal{

}

const dog1 = new Dog("Paku",7);
console.log(dog1.eat());

class Cat extends Animal{
    constructor(name,age,speed){
        super(name,age);
        this.speed = speed;
    }

    catSpeed(){
        return `${this.name}'s speed is ${this.speed}km/h`;
    }
}

const cat1 = new Cat("Henry",1,0.75);
console.log(cat1.isSuperCute());
console.log(cat1.catSpeed());