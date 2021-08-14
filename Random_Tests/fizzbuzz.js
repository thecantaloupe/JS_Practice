// loop over the number 1-15
// if number is divisible by 3 log Fizz
// if a number is divisible by 5 log buzz
// if divisible by both log "fizzbuzz

//if wanted to push to array
answer_array = []

let x = 1
const fizzBuzz = function(n) {
    while (x <= n){
        if (x % 3 == 0 && x % 5 == 0) {
            answer_array.push("FizzBuzz")
            x++ 
        } else if (x % 3 == 0) {
            answer_array.push("Fizz")
            x++
        } else if (x % 5 == 0) {
            answer_array.push("Buzz")
            x++
        } else {
            answer_array.push(x.toString())
            x++
        }
        
    }
    console.log(answer_array)
    // return answer_array
    //console.log(answer_array.map(String))
}

fizzBuzz(1)