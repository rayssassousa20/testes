// using a function

let displayResult = evenOrOdd(5)

console.log(displayResult)


function evenOrOdd(number){
    let result
    if(number % 2 != 0){
        result = "Odd"
    } else {
        result = "Even"
    }
    return result
}

