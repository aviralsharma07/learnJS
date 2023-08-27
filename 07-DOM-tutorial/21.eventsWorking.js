
console.log('Script Starts !!');
const allButtons = document.querySelectorAll(".my-buttons button");
// console.log(allButtons);


allButtons.forEach((button) => {button.addEventListener("click",(event)=>{
    let num = 0;
    for (let i=0; i<1000000000; i++){
        num += i;
    }
    console.log(event.currentTarget.textContent,num);
})});


let outerSum = 0;
for(let i=0; i<100000000; i++){
    outerSum += i;
}
console.log("outer Sum: " + outerSum);

console.log('Script Ends !!');