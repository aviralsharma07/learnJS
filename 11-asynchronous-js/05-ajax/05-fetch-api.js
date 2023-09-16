// Fetch

const URL = "https://jsonplaceholder.typicode.com/posts";

fetch(URL)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("BAD HTTP stuff");
    }
  })
  .then((data) => {
    console.log(data[4].body);
  })
  .catch((error) => {
    console.log(error);
  });
//* This returns a promise. We can use the then method to get the response.
//* fetch will automatically reject the promise if the request fails.
//* fetch will automatically use GET as the method.
