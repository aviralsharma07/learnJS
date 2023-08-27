// Intro to Events
// Events -> Kuch Kaam Hona
//        -> Click
//        -> Button Press
//        -> Hover  

const btn = document.querySelector(".btn-headline");

// console.dir(btn);
// btn.onclick = () => {console.log("You clicked Me !!!")};

// method -- addEventListener -> Takes Event name as String and a function as arguments.
btn.addEventListener("click", (e) => {console.log("I was clicked hard")});




