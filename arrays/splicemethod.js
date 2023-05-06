// splice() Method: (start,delete,insert)
// delete -> returns the deleted element

const myArr = ["item1", "item2", "item3", "item4", "item5", "item6", "item7"];
const deletedElement1 = myArr.splice(1,1);
console.log(`deleted element 1:  ${deletedElement1}`);
console.log(myArr);

const deletedElement2 = myArr.splice(1,1,"newElement");
console.log(`deleted element 2:  ${deletedElement2}`);
console.log(myArr);

const deletedElement3 = myArr.splice(2,2,"newElement2","newElement3");
console.log(`deleted element 3:  ${deletedElement3}`);
console.log(myArr);
