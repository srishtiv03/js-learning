var c = 300
let a = 300
if(true){
    let a = 10
    // var a = 10 // error: a has already been declared
    const b = 20
    // console.log("INNER : ", a)
}

// console.log(a)
// console.log(b) // out of scope
// console.log(c)

function one(){
    const username = "srishti"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)

    two()
}

// one()

if(true){
    const username = "srishti"
    if(username == "srishti"){
        const website = " youtube"
        // console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)

// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5))
function addone(num){
    return num + 1
}


addTwo(5)
const addTwo = function(num){
    return num + 2
}
// ReferenceError: Cannot access 'addTwo' before initialization