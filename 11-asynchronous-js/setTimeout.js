// Synchronous Programming vs Asynchronous Programming

//* Javascript is: Synchronous Programming (Single Threaded) //

console.log("Script start");

for (let i = 0; i < 10; i++) {
  console.log("Inside For Loop");
}

//! This will take some time to execute.
//! So, the next line will be executed after this loop is finished.
//! This is called Synchronous Programming.
//! The code is executed line by line.
//! The next line is executed after the previous line is finished.
//! So This Loop becomes blocking Code for the next line. Since it takes some time to execute.
//! Example: We want User Data from Backend.
//! So, we have to wait for the response from the server before other things can load in the webpage.
//! So, the webpage will be blocked until the response is received from the server. This is a blocking Event.

console.log("Script End");

//* Javascript is: Asynchronous Programming (Single Threaded) //

console.log("Script start");

const id = setTimeout(() => {
  console.log("Inside Timeout Function");
}, 1000);

//! Set Timeout Function
//! This function takes two arguments: 1. Callback Function, 2. Time in milliseconds
//! This function will execute the callback function after the given time.
//! This function is a non-blocking function.
//! This function will not block the execution of the next line.
//! This function will execute the callback function after the given time and then move to the next line.
//! This function is an example of Asynchronous Programming.
//! setTimeout() is a Web API. It is not a part of Javascript. It is provided by the browser.
//! The Time is not guaranteed. It is just a minimum time.
//! It will execute the callback function only when the call stack is empty. i.e., Js below is executed.
//! setTimeout() returns an id. This id can be used to cancel the setTimeout() function.

console.log("id: ", id);

console.log("Clearing Timeout");
clearTimeout(id);

console.log("Script End");
