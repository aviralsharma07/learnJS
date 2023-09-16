// Function Returning Promises

function ricePromise() {
  const bucket = ["coffee", "Chips", "vegetables", "Salt", "Rice"];
  return new Promise((resolve, reject) => {
    if (bucket.includes("Rice") && bucket.includes("vegetables") && bucket.includes("Salt")) {
      resolve("Fried Rice");
    } else {
      reject("I don't have Rice");
    }
  });
}

ricePromise()
  .then((value) => {
    console.log("Let's eat", value);
  })
  .catch((error) => {
    console.log(error);
  });
