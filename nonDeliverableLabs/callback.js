///////////////////////////
// Warm-up Callback Drills
///////////////////////////
// Create a function that takes a parameter and logs it
// Create a second function that logs 'hi'
// Invoke the first function, passing in the second function as a parameter
// You should see a function reference being logged
// Alter the first function so that it invokes its parameter
// If you did these steps correctly, you should get a log of 'hi'

// const callB = (param) =>{
//     console.log(param)
//     param()
// }
// const greeting = () =>{
//     console.log("Hello")
// }
// callB(greeting)

///////////////////////////
// Electric Mixer
///////////////////////////

const electricMixer = (attachment) => {
    console.log("This mixer is now: " + attachment())
}

// anon function
// electricMixer(()=>{return "spiralizing"})

const spirilizer = () => {
    return "spiralizing";
}
const slicerDicer = () => {
    return "slicin' and dicin'";
}
const turbomixer = () => { return "mixing at OVER 9000 RPM"}

electricMixer(spirilizer);
electricMixer(slicerDicer);
electricMixer(turbomixer);

// setInterval and setTimeout
// effectively functionName(CALLBACK, MILLISECONDS)

//long way
// setTimeout(() => {
//     console.log('hi');
//   }, 2000);

//runs every 2000 milli-seconds
// setInterval(() => {console.log("hi")}, 2000)
//runs after 2000 milli-seconds
// setTimeout(() => {console.log("hi")}, 2000)


///////////////////////////
// setInterval and setTimeout
///////////////////////////
//Using SetInterval to display a number that increases by 1 each second

// let secs = 0
// setInterval(() => {
//     console.log(secs)
//     secs++
// }, 1000);

///////////////////////////
// Rep Master
///////////////////////////

const testSRT = "true testing if reverse"

const wordReverse = (param) => {
    reversed = param.split(" ").reverse().join(" ")
    return reversed
}

const toUpperCase = (param) => {
    return param.toUpperCase()
}

const repMaster = (imp, funct) => {
    console.log(funct(imp)+" proves that I am the rep MASTER!")
}

wordReverse("true testing if reverse")
toUpperCase("testing")

repMaster("Never give your heart to a blockhead", wordReverse);
repMaster("I finished this practice", toUpperCase);

// extra
// We need a .countmethod and we need you to write it! The method should take an array and count how many elements are the same in that array, returning that number. hint: remember to make an array that has duplicate elements!!
// Write a .uniquemethod that creates a new array out of all the unique values in an array.

testarr = [1,9,3,3,5,6,3,8,9,3]
test2arr = [[1,1,1],[2,2,2],[3,3,3]]
// check array of array for value
const uniqueArrays = () =>{
    let sortedarr = testarr.sort()
    let masterarr = []
    let vararr = []
    const checkMain = (num)=>{
        for (let arr of masterarr){
            if (arr.includes(num)){return true}
        }
        return false
    }
    for (i = 0; i < sortedarr.length; i++){
        if (!(checkMain(sortedarr[i]))) {
            if (sortedarr[i+1] == sortedarr[i]){ 
                vararr.push(sortedarr[i])
            } else {
                console.log(vararr)
            }
            // masterarr.push(vararr)
        }
    }
    // console.log(masterarr)
    // console.log(vararr)
}


uniqueArrays()
// Array.prototype.count = function(){
//     let 
//     return this.filter((item,index) => {return item[index] == item[index]})
// }
// console.log(testarr.count())