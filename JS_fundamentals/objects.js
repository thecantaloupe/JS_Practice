///////////////////////////
// Objects 
///////////////////////////
const key = "weapon"
const robot = {
    name: "BleepBlop",
    serial: 1,
    isEvil: false,
    "Gas Tank": "full",
    [key]: "Lazers",
    speak: () => {
        console.log("EXTERRRMINATE!!!")
    },
    attack: function() {
        console.log(`${this.name} attacks with its ${this.weapon}`)
    }
}

console.log(robot.name)
console.log(robot["Gas Tank"])
console.log(robot.weapon)
robot.speak()
robot.attack()

///////////////////////////
// Objects  Methods - Functions inside and object
///////////////////////////
// this refers to obj containing function
// const obj = {
//     prop: "Hello World",

//     // Arrow function in an object
//     myFunc: () => {
//         console.log(`can I use this?... ${this.prop}`)
//     },
//     // Function Expression
//     myFunc2: function(){
//         console.log(`can I use this?... ${this.prop}`)
//     },
//     // Function Declaration
//     myFunc3(){
//         console.log(`can I use this?... ${this.prop}`)
//     }
// }

// obj.myFunc()
// obj.myFunc2()
// obj.myFunc3()
