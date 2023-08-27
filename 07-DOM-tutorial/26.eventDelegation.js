// Event Delegation

const grandParent = document.querySelector('.grandparent');
// grandParent.addEventListener("click",function(e){
//     console.log(e);
// })
// After Clicking on grandparent Box: target: grandparent
// After Clicking on parent Box: target: parent
// After Clicking on child Box: target: child

grandParent.addEventListener("click",function(e){
    console.log(e.target.textContent);
})