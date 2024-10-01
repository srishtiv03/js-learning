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
console.log(myArr2[0]) //0-indexing in arrays