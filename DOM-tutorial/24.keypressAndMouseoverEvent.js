// index.html

// Keypress Event 

const body = document.body;
body.addEventListener("keypress",(e) => {console.log(e.key);});

// ----------------------------------------------------------------

const mainButton = document.querySelector(".btn-headline");
mainButton.addEventListener("mouseover", ()=>{console.log("Mouse Over Event Occured !!!!")});

mainButton.addEventListener("mouseleave", ()=>{console.log("Mouse Leave Event Occured !!!!")});

