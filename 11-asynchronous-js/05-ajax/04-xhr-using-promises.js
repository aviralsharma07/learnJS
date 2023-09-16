const URL = "https://jsonplaceholder.typicode.com/posts";

function sendRequests(method, URL) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, URL);
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject("Something went wrong");
      }
    };
    xhr.onerror = function () {
      reject(new Error("Something Went Wrong"));
    };
    xhr.send();
  });
}

sendRequests("GET", URL)
  .then((response) => {
    const data = JSON.parse(response);
    return data;
  })
  .then((data) => {
    // console.log(data);
    const id = data[3].id;
    return id;
  })
  .then((id) => {
    const url = `${URL}/${id}`;
    return sendRequests("GET", url);
    // console.log(id);
  })
  .then((newResponse) => {
    const newData = JSON.parse(newResponse);
    console.log(newData);
  })
  .catch((err) => {
    console.log(err);
  });
