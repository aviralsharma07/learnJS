// this keyword with eventListener

const btn = document.querySelector(".btn-headline");

// btn.addEventListener("click",function(){
//     console.log("clicked");
//     console.log("value of this: ");
//     console.log(this);
// }); // HERE THE VALUE OF THIS WILL BE BTN OBJECT

btn.addEventListener("click",() => {
    console.log("clicked");
    console.log("value of this: ");
    console.log(this);
}); // HERE THE VALUE OF THIS WILL BE WINDOW OBJECT

