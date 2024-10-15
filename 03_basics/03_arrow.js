const user = {
    username: "srishti",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} welcome to website`)
        console.log(this)
    }
}

// this keyword - tells about the current context

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this) // {}
// **global object in the browser - Window**

// function chai(){ // 1
//     console.log(this)
// }

// chai()

// function chai(){ // 2
//     let username = "srishti"
//     console.log(this.username)
// } // this objects ke andar ki kaam kar paa rha hai, aise functions ke andar use nhi kar paa rhe hai (compare 1 and 2)

// chai() // undefined

// const chai = function(){
//     let username = "srishti"
//     console.log(this.username)
// }

// const chai = () => {
//     let username = "srishti"
//     console.log(this)
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2 // using the return keyword - EXPLICIT RETURN
// }

// console.log(addTwo(3,4))

// const addTwo = (num1, num2) => num1 + num2 // IMPLICIT RETURN - no need to use the return keyword and written without using the curly braces

// console.log(addTwo(3,4))

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "srishti"}) // returning an object, to return an object we have to write the object inside ()

console.log(addTwo(3,4))