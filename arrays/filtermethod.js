// FILTER METHOD: takes callbacl function as an argument
// and returns only boolean values array.

const number = [23,10,15,8,18,16,34];
const evenNumber = number.filter((num)=>{return num%2===0});
console.log(evenNumber);


const student = [
    {fName:"Avi",lName:"Sharma",rollNo:7,school:"KMPS"},
    {fName:"Nakesh",lName:"Sharma",rollNo:33,school:"VPS"},
    {fName:"Anmol",lName:"Goswami",rollNo:3,school:"Dhanuka"},
    {fName:"Pravandhana",lName:"Kumari",rollNo:38,school:"GLA"},
    {fName:"Ishika",lName:"Agrawal",rollNo:20,school:"KMPS"}
];

// const participants = student.filter((obj) => {return obj.rollNo>=25});
console.log(student.filter((obj) => {return obj.rollNo>=25}));
