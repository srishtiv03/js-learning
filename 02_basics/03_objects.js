// objects can be declared in 2 ways - literals and constructors
// singleton
// constructor -> singleton (apne tarah ka ek hi object hai)
// literals -> not a singleton (multiple instances ban jaate hai)
// both are ways to create an object, no performance improvement, only difference of singleton

// Object.create - contsructor method(singleton)

// Object Literals

const mySym = Symbol("key1") // a symbol

const JsUser = {
    name : "Srishti", // here name is a string, can aso be written as "name" but not necessary to use ""
    "full name" : "srishti verma",
    [mySym] : "mykey1", // this is the correct way of using a symbol as a key in an object. using it as mySym : "mykey1" will give the same output on console.log but it won't be the correct implementation of symbol as a key in object
    age : 20,
    location : "Delhi",
    email : "srishti@google.com",
    isLoggedIn : "false",
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]) // using "" because the keys are strings
// console.log(JsUser["full name"]) // this can only be printed using [] method and not . method because  it was written using ""
// console.log(JsUser.mySym) // undefined
// console.log(JsUser[mySym]) // correct way for a symbol using as a key in object

JsUser.email = "srishti@chatgpt.com" // to change the email
// Object.freeze(JsUser) // the object has been freezed so no more changes possible
JsUser.email = "srishti@microsoft.com"
// console.log(JsUser) // the email as above has ot been changed because we freezed

// adding a function to the object
JsUser.greeting = function(){
    console.log("Hello JS user")
}

// console.log(JsUser.greeting) // [Function (anonymous)] - function has not been executed. output gave its reference
console.log(JsUser.greeting()) 

// referencing name in the function
JsUser.greetingTwo = function(){
    console.log(`Hello JS user ${this.name}`) // this refers to the same object JsUser
}

console.log(JsUser.greetingTwo()) 