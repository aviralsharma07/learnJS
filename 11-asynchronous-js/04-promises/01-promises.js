// Promise: a special JavaScript object that represents a future value

console.log("Script start");

const bucket = ["coffee", "Chips", "vegetables", "Salt", "Rice"];

//* I promised to make Fried Rice
//* This Promise will have a Status and a Value
//* Status: Pending, Fulfilled, Rejected
//* Value: undefined, "Fried Rice", "I don't have Rice"

//! Creating a Promise
const friedRicePromise = new Promise((resolve, reject) => {
  if (bucket.includes("Rice") && bucket.includes("vegetables") && bucket.includes("Salt")) {
    resolve("Fried Rice");
  } else {
    reject("I don't have Rice");
  }
});

//! Consuming a Promise
// friedRicePromise.then(
//   (value) => {
//     console.log("Let's eat", value);
//   },
//   (error) => {
//     console.log(error);
//   }
// );

friedRicePromise
  .then((value) => {
    console.log("Let's eat", value);
  })
  .catch((error) => {
    console.log(error);
  });

for (let i = 0; i < 10; i++) {
  console.log(Math.random(), i);
}

//! Promises are added to the Microtask Queue.
//! Promises will be exwcuted before the setTimeout because Microtask Queue is executed before the Callback Queue

setTimeout(() => {
  console.log("setTimeout");
}, 1000);

console.log("Script End");
