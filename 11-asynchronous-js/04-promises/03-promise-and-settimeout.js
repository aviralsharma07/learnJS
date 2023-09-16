// Promises AND setTimeout()

function myPromise() {
  return new Promise((resolve, reject) => {
    const value = true;
    setTimeout(() => {
      if (false) {
        resolve("Success");
      } else {
        reject("Failure");
      }
    }, 2000);
  });
}

myPromise()
  .then(() => {
    console.log("Resolved");
  })
  .catch(() => {
    console.log("Rejected");
  });
