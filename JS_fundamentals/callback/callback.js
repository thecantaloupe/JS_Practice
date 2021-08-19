//////////////////////////////////////
// Callback Functions Examples
//////////////////////////////////////
// setTimeout(
//     ()=>{
//         console.log('hi');
//     },
//     2000
// );
//shorter version and interval
// setInterval(() => {console.log("hi")}, 2000)


//////////////////////////////////////
// Declarative Programming
//////////////////////////////////////

//run log for every item in array
// const iceCreams = ['Vanilla','Chocolate','Strawberry','Rocky Road'];
// iceCreams.forEach(
//     (currentElement)=>{
//         console.log(currentElement);
//     }
// )

// const henchman = () => {
//     console.log("Right-o Boss")
// }

// const arsonist = () => {
//     console.log("I'm the Arsonist")
// }

// const thief = () => {
//     console.log("I'm the thief")
// }

// const mobboss = (employee) => {
//     console.log("Go do your specialty")
//     employee()
// }
// mobboss(henchman)
// mobboss(thief)
// mobboss(arsonist)

// const badguys = [henchman, thief, arsonist]
// badguys.forEach((item)=>{
//     mobboss(item)
// })

// const badGuy = (action) => {
//     console.log("I'm going to do something")
//     action()
//     console.log("I'm done")
//     console.log("---------------------------")
// }

// badGuy(() => console.log("Stealing a Safe..."))
// badGuy(() => console.log("Intimidating a local business"))


// const iceCreams = ['Vanilla','Chocolate','Strawberry','Rocky Road'];
// const updatedIceCreams = iceCreams.map((flavor)=>{
//     return flavor + " Ice Cream";
// });

// console.log(updatedIceCreams);

//////////////////////////
// Array Callback Methods
//////////////////////////
// EVERY and SOME
// pass a function that will return true or false
// if will run once for each item in the array
// for EVERY, it will return true if the functions returns true EVERY time
// for SOME, it will return true if the function returns true one time

// const barAges = [22, 23, 24, 26, 27, 6]

// const result =  barAges.every((item, index) => {return item >= 21})
// const result2 =  barAges.some((item, index) => {return item >= 21})

// console.log(result)
// console.log(result2)


// MAP
// pass a function, the returned value gets added to a new array
// map returns an array of all the returned values

// const names = [["Merced", "Alex"], ["Herman", "Ira"]]

// const result = names.map((item, index) => { return item[1] + " " + item[0]})

// console.log(result)

const numbers = [1,2,3,4,5,6]

const result = numbers.map((item, index) => { return item +1})

console.log(result)


// Filter 
// you pass a function that returns true or false
// Filter returns an array of all items in which the function returned true

const dogs = [
    {name: "Sparky", age: 5},
    {name: "Spot", age: 2},
    {name: "Bobby", age: 7},
]

const result3 = dogs.filter((item, index) => { return item.age >= 3 })
console.log(result3)