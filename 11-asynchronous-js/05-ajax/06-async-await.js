//! Consume Promises using Async/Await
//*  Async/Await is a new way to write asynchronous code.
//* It is built on top of Promises, and is compatible with all existing Promise-based APIs.
//* It is included in ES7 (ECMAScript 2016) and is supported in most modern browsers.
//* Async/Await allows us to write asynchronous code that looks and behaves a little more like synchronous code.
//* Async/Await is syntactic sugar built on top of Promises.
//* It cannot be used with plain callbacks or node callbacks.

const URL = "https://jsonplaceholder.typicode.com/posts";

async function getPosts() {
  const response = await fetch(URL);
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Something went wrong");
  }
}

// const myData = getPosts();
// console.log(myData);

getPosts()
  .then((myData) => console.log(myData))
  .catch((error) => console.log(error));
