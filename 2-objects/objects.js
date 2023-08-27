// Objects store key-value pairs, Objects are refrence data types.
// Keys of Objects are also called as Properties,

const person = {
    fName: "Aviral",
    lName: "Sharma",
    gender: "Male",
    college: "MAIT",
    city: "Vrindavan"
};

console.log(`Data Type of Person: ${typeof person}`);

// ------------------------------------------------------------------------------------------------

// Adding New KEY-VALUE Pairs

person.rollNumber = 7;
console.log(Object.keys(person));
//person.rollNumber = person["rollNumber"]

person["email"] = "example23@gmail.com";
console.log(Object.keys(person));

let key = "mobileNumber";
person[key] = "9012082438"; // USING person["key"] and person.key is WRONG
console.log(Object.keys(person));   