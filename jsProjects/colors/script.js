const button = document.querySelector(".btn");
const hexColor = document.querySelector(".hexColor");
const body = document.body;

function getRandomColor() {
  const red = Math.floor(Math.random() * 256),
    blue = Math.floor(Math.random() * 256),
    green = Math.floor(Math.random() * 256);

  const randomColor = `rgb(${red}, ${green}, ${blue})`;
  return randomColor;
}

function getHexColor(rgb) {
  const rgbArray = rgb.match(/\d+/g);
  let hexColor = "#";
  for (let i = 0; i < rgbArray.length; i++) {
    const hex = Number(rgbArray[i]).toString(16);
    hexColor += hex.length === 1 ? "0" + hex : hex;
  }
  return hexColor;
}

function changeBackgroundColor() {
  const color = getRandomColor();
  body.style.backgroundColor = color;
  hexColor.textContent = `The Hex Number of this color is ${getHexColor(color)}`;
}

button.addEventListener("click", changeBackgroundColor);
