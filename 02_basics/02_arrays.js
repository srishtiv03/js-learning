const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // changes are made into the marvel_heros array
// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

const allHeros = marvel_heros.concat(dc_heros) // there are no changes in the marvel_heros array
// console.log(allHeros)
// console.log(marvel_heros)

const all_new_heros = [...marvel_heros, ...dc_heros] //spread method
// console.log(all_new_heros)
// spread method more used than concat since we can add more than 2 arrays

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)

console.log(Array.isArray("srishti")) //false
console.log(Array.isArray(["srishti"])) //true
console.log(Array.from("srishti")) // ['s','r','i','s','h','t','i']
console.log(Array.from({name : "srishti"})) // []

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)) // [100,200,300]