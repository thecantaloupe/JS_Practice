///////////////////////////////////////
// Sample Data
///////////////////////////////////////

const dogs = [
    {name: "Fido", age: 5, owner: "Sam", adopted: true},
    {name: "Stella", age: 2, owner: "", adopted: false},
    {name: "Spot", age: 6, owner: "Diane", adopted: true},
    {name: "Clifford", age: 1, owner: "", adopted: false},
    {name: "Bruiser", age: 8, owner: "Sam", adopted: true},
    {name: "Frodo", age: 3, owner: "", adopted: false},
]

//MAP
// const result = array.map((item,index)=>{})


// Initialize new obj to maintain old obj, don't modify original 
//   const result = dogs.map((item,index) => {
//       const newDogs = {...item}
//       newDogs.id = index
//       return newDogs
//   })

//   console.log(dogs)
//   console.log(result)


// const arr = [1,2,3,4,5,6,7]

// const result = arr.map((item, index) => {
//     return item + 1
// })

// console.log(result)


// const arr = [1,2,3,4,5,6,7]

// const result = arr.map((item, index) => {
//     return item + index
// })

// console.log(result)


///////////////////////////////
// Filter
///////////////////////////////
// returns an array of item in which the callback returned a truthy value
// array.filter((item, index) => {})

// 
// const result = dogs.filter((item, index) => {
//     item.name = item.name.split("")[0]
//     return item
// })

// console.log(result)

// only even ages
// const result = dogs.filter((item, index) => {
//     return item.age % 2 == 0
// })

// console.log(result)

//////////////////////////////////
// SOME AND EVERY
//////////////////////////////////
// Some will return true if one of the items callback returns true
// Every will return true if all the items callback returns true

// const someAdopted = dogs.some((item, index) => {return item.adopted})
// const everyAdopted = dogs.every((item, index) => {return item.adopted})

// console.log("Some dogs adopted?:", someAdopted)
// console.log("Every dog adopted?:", everyAdopted)

// some or every dog has an even number of letters in their name?
// const someEvenName = dogs.some((item, index) => {return item.name.length % 2 ==0})
// const everyEvenName = dogs.every((item, index) => {return item.name.length % 2 ==0})

// console.log("Some dogs have an even name?:", someEvenName)
// console.log("Every dog have an even name?:", everyEvenName)

//////////////////////////
// Find and FindIndex
//////////////////////////
// find returns the first value in which the callback returns true
// find return the index of the first value in which the callback returns true
// array.find((item, index) => {})
// array.findIndex((item, index) => {})

// find the dog adopted by Diane
// const value = dogs.find((item, index) => {return item.owner === "Diane"})
// const index = dogs.findIndex((item, index) => {return item.owner === "Diane"})

// console.log("Diane Adopted:", value)
// console.log("The index of the dog is:", index)

// find the dog and index of the first dogs with an age over 6
// const value = dogs.find((item, index) => { return item.age > 6})
// const index = dogs.findIndex((item, index) => {return item.age > 6})

// console.log("First Dog over 6:", value)
// console.log("The index of the dog is:", index)

//////////////////////////
// Sort
//////////////////////////

// Sorts the array based on the function. If the callback returns zero or a negative number it does not swap the items, and if it returns a positive number it will swap the items
// Sort SYNTAX const result = array.sort((currentItem, nextItem ) => {})

// sort the dogs from adopted to not adopted

// dogs.sort((currentItem, nextItem) => {
//     // translate adopted value into numbers
//     const currentValue = currentItem.adopted ? 1 : 2
//     const nextValue = nextItem.adopted ? 1 : 2
//     // subtract values to determine if they are swapped
//     return currentValue - nextValue
// })
// X | Y | Result
// 1 | 2 | -1
// 2 | 1 | 1
    
  
// console.log(dogs)

//////////////////////////
// Reduce
//////////////////////////
// returns a value at the end of the cumulative operations
// starting with an internal value, the function is passed the current value and the current item, and the return value becomes the current value on the next go around

// [1,2,3,4,5].reduce((acc,item, idex) => {return acc + item}, 0)

//ACC | ITEM | RESULT
// 0  | 1    | 1
// 1  | 2    | 3
// 3  | 3    | 6
// 6  | 4    | 10
// 10 | 5    | 15
// return 15  

// const result = dogs.reduce((acc, item, index) => {
//     if (item.adopted){
//         return acc
//     } else {
//         return acc + item.age
//     }
// }, 0)

// or

// const result = dogs.reduce((acc, item, index) => { return item.adopted ? acc : acc + item.age} , 0)
// console.log(result)

// get me a count of the number of dogs that are adopted

// const result = dogs.reduce((acc, el) => {if (el.adopted) acc++; return acc}, 0)
const result =  dogs.reduce((acc, el) => {return el.adopted ? acc+1 : acc},0)

console.log(result)


