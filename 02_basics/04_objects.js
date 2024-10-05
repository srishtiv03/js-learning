// const tinderUser = new Object() // singleton object
const tinderUser = {} // non singleton object
// both will give same output {}
// console.log(tinderUser)

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

//object inside an object
const regularUser = {
    email : "some@google.com",
    fullname : {
        userfullname : {
            firstname : "Srishti",
            lastname : "Verma"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {2: "a", 3: "b"}
const obj4 = {4: "c", 5: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1, obj2) // assign method combines obj1 and obj2 and stores it into obj1
// console.log(obj3)
// console.log(obj1)
// // both will give same output
// console.log(obj1 == obj3) // true
// OR 
// const obj3 = Object.assign({}, obj1, obj2, obj4) // {} this empty object is now the target object and obj1, obj2 and obj4 are stored in {}
// console.log(obj3)

// spread method
const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3)

// from database the data is received in the form of arrays
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
]

// how to access?
// console.log(users[1].email)

// console.log(tinderUser)
// { id: '123abc', name: 'Sammy', isLoggedIn: false }

console.log(Object.keys(tinderUser)) // array of keys
// [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)) // array of values
// [ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser)) // array of arrays of entires
// [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')) // true
console.log(tinderUser.hasOwnProperty('isLogged')) // false