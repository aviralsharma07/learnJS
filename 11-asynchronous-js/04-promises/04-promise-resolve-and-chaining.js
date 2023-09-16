// Promise.resolve
// Promise Chaining

//* Promise.resolve is a shorthand for creating a promise that resolves with a given value. It is equivalent to the following code:
//* new Promise(resolve => resolve(value));

const myPromise = Promise.resolve("Foo");

// myPromise.then((value) => console.log(value));
//! then() method always returns a promise, so we can chain multiple then() calls together.

myPromise
  .then((value) => {
    console.log(value);
    value += "Bar";
    return value;
    //! return value is a Promise.resolve(value).
    //! if we return a promise, the next then() will wait for that promise to resolve.
    //! if we return a value, the next then() will be called immediately.
    //! if we return nothing, the next then() will be called immediately with undefined.
    //! if we throw an error, the next catch() will be called immediately with that error.
    //! if we return a rejected promise, the next catch() will be called immediately with that error.
  })
  .then((value) => {
    console.log(value);
    value += "Baz";
    return value;
  })
  .then((value) => {
    console.log(value);
  });
