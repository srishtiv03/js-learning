const name = "srishti"
const repoCount = 50

// console.log(name + repoCount + " Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String("srishti-sv-com")

console.log(gameName)
console.log(gameName[0])
// console.log(gameName[2])

console.log(gameName.__proto__)
console.log(gameName.length) // 14
console.log(gameName.toUpperCase())

console.log(gameName.charAt(2))
console.log(gameName.indexOf('v'))

const newString = gameName.substring(-1,4) //substring can not take negative values. if given any negative value, it will ignore it and start with 0.
console.log(newString)

const anotherString = gameName.slice(-4) // slice can take negative values as well.
console.log(anotherString)

const newStringOne = "    srishti    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://srishti.com/srisht%20verma"

console.log(url.replace('%20', '-'))
console.log(url.includes('srishti'))

console.log(gameName.split('-')) // turning the string into an array. splitting by '-'