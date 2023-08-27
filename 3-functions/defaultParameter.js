const ha = function(){
    console.log("Hello Avi :)");
}
ha();


console.log(add2Num(19));
function add2Num(a = 0, b = 0){
    return a+b;
}


const multiply2Num = (a,b=1) => {return a*b};
console.log(multiply2Num(7,5));
console.log(multiply2Num(-1,14));