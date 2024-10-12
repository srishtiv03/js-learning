function sayMyName(){
    console.log("S")
    console.log("R")
    console.log("I")
    console.log("S")
    console.log("H")
    console.log("T")
    console.log("I")
}

// sayMyName - function is called but not executed
// sayMyName() // function is executed

// function addTwoNumbers(number1, number2){ // number1 and number2 - parameters
//     console.log(number1 + number2)
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result : ", result) 

function loginUserMessage(username = "sam"){ // if no argument is passed then the function will take the username as sam
    if(!username){
        console.log("Please enter a username")
        return 
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("srishti"))
// console.log(loginUserMessage())

function calculateCartPrice(val1, val2, ...num1){ // all the elements after ... will be added to an array
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000, 3000))

const user = {
    username: "srishti",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)

handleObject({
    username: "Sam",
    price: 399
})
// passed an object inside the function argument

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 500, 1000]))