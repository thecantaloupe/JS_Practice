console.log("Hello World")

//readline module necessary to accept user input 
const readline = require("readline");

//interface instance that is connected to an input stream. To write to console add input as stdin and stdout
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

//asking for user input. Need to call question() method from the Interface instance, which is assigned to rl variable on the code above. Question receives two parameter, string question to ask and options object to abort (optional), callback function to executer when answer is received
rl.question("Give me a number. ", function (answer) {
    console.log(`Oh so your number is ${answer}`)
    const yournNum = answer
    quickMaths(yournNum)
    rl.close();
});

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