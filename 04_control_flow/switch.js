// switch(key){
//     case value:
//         break;
//     default:
//         break;
// }

const month = "march"

switch (month){
    case "jan":
        console.log("January")
        break;
    case "feb":
        console.log("February")
        break;
    case "march":
        console.log("March")
        break;
    default:
        console.log("default case match")
        break;
}

// if we don'e use "break" in cases, then it implement all the other cases except default case.
