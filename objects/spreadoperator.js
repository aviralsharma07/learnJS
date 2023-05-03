let obj1 = {
    k1: "v1",
    k2: "v2"
};

let obj2 = {
    k3: "v3",
    k4: "v4"
};

let obj3 = {...obj1,...obj2,..."abc",...['pqr','luv']};
console.log(obj3);

