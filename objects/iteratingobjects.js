// Iterating through an Object:
//   1. FOR-IN LOOP
//   2. Object KEYS

const person = {
    fName: "Aviral",
    lName: "Sharma",
    gender: "Male",
    college: "MAIT",
    city: "Vrindavan"
};

for (const key in person) {
    console.log(`${key}:  ${person[key]}`);
}

let arrayOfKeys = Object.keys(person);
console.log(arrayOfKeys);