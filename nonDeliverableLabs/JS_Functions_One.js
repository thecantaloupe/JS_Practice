// printGreeting

const printGreeting = (greet) => `${greet}`

console.log(printGreeting("asuh bruh"))

// reverseWordOrder

const reverseWordOrder = (words) => {
    split = words.split(' ')
    const reverseArray =[]
    for (let element of split) {
        reverseArray.unshift(element)
    }
    const finalJoin = reverseArray.join(' ')
    return finalJoin
}

console.log(reverseWordOrder("Ishmael me Call"));

//Calculate

const calculate = (num1, num2, operation) => {
    if (operation == "add") {
        return num1 + num2
    } 
    if (operation == "sub") {
        return num1 - num2
    } 
    if (operation == "mult") {
        return num1 * num2
    } 
    if (operation == "div") {
        return num1 / num2
    }
    if (operation == "exp") {
        return num1 ** num2
    }
}

console.log(calculate(4, 3, "sub"));
console.log(calculate(4, 3, "exp"));

// printConsecutives
const testArray = [1, 2, 3]
const arrayCheck = (value) => {
    let n1 = value[0]
    let n2 = value[1] -1
    let n3 = value[2] -2
    if (n1 === n2 && n1 == n3){
        console.log(value)
    }
    // console.log("test" ,n1,n2,n3)
    // console.log(n1 === n2 && n1 == n3)
}

const printConsecutives = (array) => {
    for (let i = 0; i <= array.length -3; i++ ) {
        const slice = array.slice(i, i + 3)
        arrayCheck(slice)
        }
}

printConsecutives([1, 2, 3, 9, 8, 0, 44, 45, 46, 2, 9]);
printConsecutives([0, 0, 0, -3, -2, -1, 0, 1, 2, 3]);

//letterReverse
const letterReverse = (words) => {
    letters = reverseWordOrder(words)
    split = letters.split('')
    let letterArray = []
    for (let element of split) {
        letterArray.unshift(element)
    }
    const finalJoin = letterArray.join('')
    return finalJoin
}

console.log(letterReverse("Luke I am your father"));
console.log(letterReverse("Aren't you a little short for a storm trooper"));