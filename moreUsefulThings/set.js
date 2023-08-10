// ITERABLES are Data Types that can use FOR-OF Loop. String and Array are Iterables. Objects are No.
// ARRRAY LIKE OBJECTS: The ones having Length property and they can be accessed using indexes.

// Sets: - It is an Iterable
//       - It stores data and has its own methods.
//       - Sets are not indexed.
//       - Order is not guranteed.
//       - Stores Unique Items Only (Duplicates are not allowed)

const numbers = new Set([1,2,3]); // A Set of 3 Elements has been created.
console.log(numbers); 

const charset = new Set("abcdaa");
console.log(charset);

numbers.add(['a','e',"avi"]);
console.log(numbers);

const items = ["i1", "i2", "i3"];

// charset.add(items);
// charset.add(items); Here items array will only be entered Once. 

charset.add(["i5","i7"]);
charset.add(["i5","i7"]);
// Here both arrays Hold same value but have difference ref address.
// That is why they are stored as distinct set elements.
console.log(charset); 

numbers.add(items);
// has() -> Method to check if Set has a certain element or not.
numbers.has(items)?console.log("array present"):console.log("array not present");