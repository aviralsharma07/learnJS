// Cloning an Object: 1. Using Spread Operator
//                    2. using Object.assign()

const obj = {
    key1: "value1",
    key2: "value2"
};

// const obj2 = {...obj};
const obj2 = Object.assign({}, obj);