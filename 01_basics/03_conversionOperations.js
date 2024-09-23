let score = "srishti"

//console.log(typeof score)
//console.log(score)

let valueInNumber = Number(score)
//console.log(typeof valueInNumber)
//console.log(valueInNumber)

/*
33 => number
"33" => number
"33abc" => NaN
"" => 0
null => 0
true => 1; false => 0
undefined => NaN
string "srishti" => NaN
*/

let isLoggedIn = 33

let BooleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(BooleanIsLoggedIn)

/*
1 => true
0 => false
"" => false
string "abc" => true
number 12 or -12 => true
null => false
undefined => false
*/

let someNumber = ""

let stringNumber = String(someNumber)
//console.log(stringNumber)

/*
same as what you put in someNumber
*/

// *********************** Operations ***********************

let value = 3
let negValue = -value

//console.log(negValue)

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " srishti"

let str3 = str1 + str2
//console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
// console.log(1 + "2" + 2);

// console.log(+true); //1
// console.log(true+); //error
// console.log(+false); // 0
// console.log(+""); //0

let gameCounter = 100
gameCounter++;
//console.log(gameCounter); 
// pre-increment and post-increment give different result here they're giving same output

// Postfix increment
// let x = 3;
// const y = x++;
// console.log(x)
// console.log(y)
// x is 4; y is 3

// let x2 = 3n;
// const y2 = x2++;
// console.log(x2)
// console.log(y2)
// x2 is 4n; y2 is 3n

// Prefix increment
// let x = 3;
// const y = ++x;
// x is 4; y is 4

// let x2 = 3n;
// const y2 = ++x2;
// x2 is 4n; y2 is 4n