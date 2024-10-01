let myDate = new Date()
// console.log(myDate)
// console.log(typeof myDate) //object
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toTimeString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toUTCString())

// let myCreatedDate = new Date(2024, 00, 14) //months start from 0 so 0-Jan
// let myCreatedDate = new Date(2024, 00, 14, 5, 3) 
// let myCreatedDate = new Date('2024-10-12') 
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now() // it is in ms(milli-second). it is the time from jan 1, 1970 till now
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000)) // time is seconds

let newDate = new Date()
console.log(newDate.toString())
// console.log(newDate.getDate())
// console.log(newDate.getDay()) // 2-Tuesday
// console.log(newDate.getFullYear())
// console.log(newDate.getMonth() + 1) // months start with 00 so  +1 to give the exact month

// `${newDate.getDay()} and the time`

console.log(newDate.toLocaleString('default', {
    weekday:"long"
}))