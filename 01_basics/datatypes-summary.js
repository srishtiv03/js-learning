// Primitive - Call by Value

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100 //number
const scoreValue = 100.3 //number (there are no decimals or floats in js)

const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //false

// Non primitive - Call by Reference

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; //array
let myObj = {
    name: "hitesh",
    age: 22,
}
// everything inside the {} is OBJECT
// the datatype could be anything - number, string, null, even an object inside.

const myFunction = function(){
    console.log("Hello world");
}
// function

console.log(typeof myObj);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  object function
//        Object  =>  object

// JavaScript is a dynamically typed language. 
// This means that variable types are determined at runtime, 
// and you do not need to explicitly declare the type of a variable before using it.