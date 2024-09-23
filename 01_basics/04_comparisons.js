// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1); // converts the string into the same datatype as number and then compares
// console.log("2" > "1");
// console.log("2" == 1);

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
// the reason is that equality check == and comparisons <, >, >=, =< work differently.
// Comparisons convert null to a number, treating it as 0. That's why (3) null >= 0 is true and (2) null == 0 is false.

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined >= 0);
console.log(undefined < 0);
// gives false in all the cases

// === 
// strict operator. it also checks if the datatype is same or not. unlike "==" it won't convert string to number for comparison.

console.log("2" === 2); //false