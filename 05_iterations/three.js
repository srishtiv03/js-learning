// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4]

for (const num of arr) {
    // console.log(num)
}

const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(greet)
    // console.log(`Each char is ${greet}`)
}

// MAPS

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map)

// for (const key of map) {
//     console.log(key)
// }

for (const [key, value] of map) {
    // console.log(key, '-', value)
    // console.log(`${key} - ${value}`)
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    // console.log(key, '-', value)
}

// forof doesn't work for Objects. TypeError: myObject is not iterable
// other "for" methods work for Objects.