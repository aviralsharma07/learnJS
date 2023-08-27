const room = {
    color: "cream",
    cubord: "small",
    table: "wooden",
    ac: "window"
};

// let {color, cubord, ...newRoom} = room;
// console.log(color, cubord, newRoom);

let {color: newColor, cubord: newCubord, ...newRoom} = room;
console.log(newColor, newCubord, newRoom);