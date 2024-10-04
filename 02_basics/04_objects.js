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

