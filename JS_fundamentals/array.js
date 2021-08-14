// // Create a new array
// const numbers = [2,3,4]

// //log the current length of the array
// console.log(numbers.length)

// // push the number 5 to the end of the array and log the array and its length
// numbers.push(5)
// console.log("---We Just Pushed 5---")
// console.log(numbers)
// console.log(numbers.length)

// // unshift the number 1 to the beginning of the array, then log the array and its length
// numbers.unshift(1)
// console.log("---We Just Unshifted 1---")
// console.log(numbers)
// console.log(numbers.length)

// const survivor = ["loser", "winner", "loser"]
// // remove from the end of the array
// survivor.pop()
// console.log("popped loser:", survivor)
// // Remove from the front of the array
// survivor.shift()
// console.log("shifted loser:", survivor)

// const characters = ["Tom", "Jerry", "Spike"]
// console.log(characters, characters.length)

// characters.pop()
// characters.shift()

// characters.push("shaggy")
// characters.unshift("scooby")

// console.log(characters, characters.length)

/////////////////////////////////
// Using Splice
////////////////////////////////
// const garden = ["dirt", "weed", "weed", "weed", "dirt"]
// garden.splice(1,3)
// console.log("Cleaned Garden:", garden)
// garden.splice(1, 0, "rose")
// console.log("rose in garden:", garden)
///////////////////////////////
// Multi-Dimensional Arrays
///////////////////////////////
const arr = [1,2,[3,4,[5,6]],[7,8]]

// // HOW TO ACCESS THE NUMBER 3
// console.log(arr[2][0])
// // HOW TO ACCESS THE NUMBER 6
// console.log(arr[2][2][1])
// // HOW TO ACCESS THE NUMBER 8
// console.log(arr[3][1])

///////////////////////////////
// Multi-Dimensional Arrays
///////////////////////////////
// const arrays = [[1,2],[3,4],[5,6],[7,8]]
// for (x of arrays){
//     for (y of x){
//         console.log(y)
//     }
// }
const word = ["s","u","c","c","e","s"]

console.log(word.join(''))

// sort array method
let sort_num= [5,4,3,2,1]
console.log(sort_num.sort())