const users = [
    {userId:7, fName:"Aviral", lName:"Sharma"},
    {userId:32, fName:"Nakesh", lName:"Sharma"},
    {userId:5, fName:"Aradhna", lName:"Jagiasi"}
];

// Iterating through array of objects using FOR-OF LOOP:

for (const iterator of users) {
    console.log(iterator);
}

// Destructuring Array of Objects

// let [u1, u2, u3] = users;
// console.log(u1, u2, u3);

let [{fName:firstName},,{lName:lastName}] = users;
console.log(firstName,lastName);