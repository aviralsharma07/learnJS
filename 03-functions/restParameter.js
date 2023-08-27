function myFunc(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
}
myFunc(3,4,5,6,7,8,9);

const addAll = (...numbers) => {
    let sum = 0;
    for (let num of numbers){
        sum += num;
    }
    return sum;
}
console.log(addAll(12,23,15,19,69));