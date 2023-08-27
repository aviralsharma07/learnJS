
// const firstButton = document.querySelector("#one");
// firstButton.addEventListener("click",() => {console.log("Button 1 Clicked")}); 

// ---------------------------------------------------------------------------------

// Applying an Event to multiple buttons

const allButtons = document.querySelectorAll(".my-buttons button");
// console.log(allButtons);

for(let btn of allButtons){
    btn.addEventListener("click",function(){
        console.log(this.textContent);
    });
}

