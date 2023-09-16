//* Set Interval Function

// console.log("Script start");

// setInterval(() => {
//   console.log(Math.random());
// }, 1000);

// console.log("Script End");

const body = document.body;

const intervalId = setInterval(() => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const rgb = `rgb(${red}, ${green}, ${blue})`;
  body.style.backgroundColor = rgb;
}, 1000);

const stopButton = document.querySelector("button");

stopButton.addEventListener("click", () => {
  clearInterval(intervalId);
  stopButton.textContent = body.style.backgroundColor;
});
