/////////////////////
// functions
/////////////////////

// function steak(salt, meat){
//     const servings = meat/2
//     if (salt > 5){
//         console.log(`made ${servings} servings of salty meat`)
//     } else {
//         console.log(`made ${servings} servings of tasty meat`)
//     }
// }
// steak(3, 10)
// steak(6, 20)

/////////////////////
// Defining Functions
/////////////////////
// Hoisted function which is the OG

function helloWorld(){
    console.log("Hello World")
}

helloWorld()

// Anonymous Function with Function Keyword
// Not Hoisted, Generates a Prototype

const helloWorld2 = function(){
    console.log("Hello World")
}

helloWorld2()

// Arrow Functions
// Not Hoisted, No Prototype

const helloWorld3 = () => {
    console.log()
}

helloWorld3()

/////////////////////
// Parameters and Arguments
/////////////////////

const nameAPony = (name) => {
    console.log(`The name of my pony is ${name}`)
}

nameAPony("Charlie")
nameAPony("Susie")
nameAPony("Lisa")

const logTheThing = (stuff = "Hello") => {
    console.log(stuff)
    return 1
}

logTheThing("cheese")
logTheThing()

console.log("Value of the function:", logTheThing())

const result = logTheThing()

console.log(result)

/////////////////////


const buyAPony = (name) => {
    return [name, "This is a pony"]
}

const myPony = buyAPony("Lightning")
console.log(myPony)
console.log(myPony[1])

const sum = (x,y) => x + y
console.log(sum(3,6))

const isitEven = x => x % 2 === 0

if(isitEven(8)){
    console.log("It is even")
} else {
    console.log("It is odd")
}
