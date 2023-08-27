// const firstButton = document.querySelector(".my-buttons button");
// firstButton.addEventListener("click", function(){console.log(this)});

// ---------------------------------------------------------------------------------

// jab bhi mai kisi bhi element pe eventListener Add hoga 
// Js Engine code ko line by line execute karta hai
// browser -> Js Engine + WebApi

// Jab browser ko pata chala ki user ne event perform kia 
// Jo hum listen kar rahe hai 
// Browser 2 kaam Karega
// 1) Callback function hai vo Js engine ko dega 
// 2) Callback function ke sath event ki information bhi dega
// ye information humein ek object ki trah milegi 

// firstButton.addEventListener("click", function(event){console.log(event)});

const allbuttons = document.querySelectorAll(".my-buttons button");
// allbuttons.forEach((button) => {button.addEventListener("click",(e) => {console.log(e)});});

for (let button of allbuttons){
    button.addEventListener("click",(event) => {console.log(event.currentTarget)});
}
