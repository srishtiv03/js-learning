// Stack - Primitive datatype are stored in here.
// Heap - Non primitive datatype are stored here.

let myName = "Srishti"

let anotherName = myName
anotherName = "sisty"

console.log(myName)
console.log(anotherName)

let userOne = {
    email : "srishti@google.com",
    upi : "upi@ybl"
}

let userTwo = userOne
userTwo.email = "sisty@google.com"

console.log(userOne.email)
console.log(userTwo.email)