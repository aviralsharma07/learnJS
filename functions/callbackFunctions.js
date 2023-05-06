function myFunc2(){
    console.log("Inside my Func2");
}

function myFunc(callback){
    callback();
}

myFunc(myFunc2);