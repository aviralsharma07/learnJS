const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
// console.log(xhr);

// console.log(xhr.readyState);
xhr.open("GET", URL);
// console.log(xhr.readyState);
// xhr.onreadystatechange = function () {
//   console.log(xhr.readyState);
//   if (xhr.readyState === 4) {
//     const response = xhr.response;
//     const data = JSON.parse(response);
//     console.log(typeof data);
//     console.log(data);
//   }
// };

//! onload() only works when the readyState is 4
xhr.onload = function () {
  const response = xhr.response;
  const data = JSON.parse(response);
  console.log(typeof data);
  console.log(data);
};

xhr.send();
