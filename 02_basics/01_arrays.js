const myArr = [0, 1, 2, 3, 4, 5, true, "srishti"] // arrays can store different data-types as well
// arrays are resizeable
// All built-in array-copy operations (spread syntax, Array.from(), Array.prototype.slice(), 
// and Array.prototype.concat()) create shallow copies. 
// If you instead want a deep copy of an array, you can use JSON.stringify() 
// to convert the array to a JSON string, and then JSON.parse() to convert the string 
// back into a new array that's completely independent from the original array.

// shallow copy
// A shallow copy of an object is a copy whose properties share the same references 
// as those of the source object from which the copy was made. 
// As a result, when you change either the source or the copy, you may also cause the other object to change too.

// deep copy
// A deep copy of an object is a copy whose properties do not share the same references 
// as those of the source object from which the copy was made. 
// As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too.
const myHeros = ["shaktiman", "naagraj"]
const myArr2 = new Array(1,2,3,4)
// console.log(myArr2[0]) //0-indexing in arrays

// Array methods

// myArr2.push(5)
// myArr2.push(6) // adds the elements to the last of array
// myArr2.pop() // deletes the last element of the array 

// myArr2.unshift(9) // adds the element at the start of array
// myArr2.shift() // deletes the first element of the array
// console.log(myArr2)

// console.log(myArr2.includes(1)) //true
// console.log(myArr2.includes(9)) //false

const newArr = myArr.join()
// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr) //string

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // index 1 is included but index 3 is not included

console.log(myn1);
console.log("B ", myArr); // slice doesn't change the original array


const myn2 = myArr.splice(1, 3) // index 1 and 3 both are included
console.log("C ", myArr);
console.log(myn2); // splice changes the original array