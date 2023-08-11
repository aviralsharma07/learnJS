// CALL

const user1 = {
    firstName: "AVS",
    age: 20,
    about: function (){
        console.log(this.firstName, this.age);
    }
};

const user2 = {
    firstName: "Divya",
    age: 21
};

user1.about.call(user2); // call method takes object that the function should take as this.

function extraInfo(city,country){
    console.log(`${this.firstName} is from ${city},${country}`);
}

extraInfo.call(user2,"Delhi","India");
extraInfo.apply(user1, ["Kanpur","India"]); // Apply is same as call, we just provide arguments as Array.
const func = extraInfo.bind(user2,"Delhi","India");
func();


const user3 = {
    firstName: "Muskan",
    age: 21,
    about: function(){
        console.log(this.firstName,this.age);
    }
};

// const func2 = user3.about();
// func2(); // THIS WILL GIVE UNDEFINED BECAUSE ABOUT FUNCTION'S REFRENCE WILL PASS TO FUNC2 NOT ITS SCOPE. SO THIS OBJECT FOR IT WILL BE WINDOW OBJECT

const func2 = user3.about.bind(user3);
func2();

// ARROW Fn and THIS

const user4 = {
    firstName: "Avi",
    age: 21,
    about: () => {
        console.log(this.firstName,this.age);
    }
};

// user4.about(); This will give undefined, because ARROW Fn ka THIS is one level above its scope. Which is window obj in this case.
// user4.about.bind(user4); Even now the output won't change. 