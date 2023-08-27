let array = [23, 15, 7, 4, 21, 1, 26, 28, 29];

// FOR LOOP

for (let i=0; i<array.length; i++){
    if (array[i] === 7) {
        console.log(`Index of 7: ${i}`);
        break;
    }
}

// -----------------------------------------------------------------------------------

// FOR-OF LOOP

for (let iterator of array) {
    if (iterator == 21){
        console.log(`Index of 21: ${array.indexOf(iterator)}`);
        break;
    }
}

// -----------------------------------------------------------------------------------

// FOR-IN LOOP

for (const index in array) {
    if (array[index] == 29){
        console.log(`Index of 29: ${index}`);
        break;
    }        
}

// -----------------------------------------------------------------------------------

// FOR-EACH Function runs a callback function on each element of the array.
// The callback function accepts: (currentElement, indexofCurrentElement, arrayOfCurrentElement)
function callback (number,index){
    console.log(`index is: ${index}, number is ${number}`);
}
function multiply(num,index,array){
    array[index] = num * 2;
}
array.forEach(multiply);
console.log(array);