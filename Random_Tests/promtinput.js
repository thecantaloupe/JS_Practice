console.log("Hello World")

//install the prompt-sync module using npm or yarn in order to use
// you just need to require() the prompt-sync module and use the prompt()
const prompt = require("prompt-sync")();
const input = prompt("What is your number? ");
console.log(`oh, so your number is ${input} `);
quickMaths(input)

function quickMaths(num) {
    if (num > 3){
        console.log("your number is greater than 3")
    } else if (num == 3) {
        console.log("Your number is 3")
    } else {
        console.log("Your number is less than 3")
    } 
}

//if (x > 3){
//    console.log("greater than 3")
//} else {
//    console.log("3 or less")
//}