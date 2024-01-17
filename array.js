let array = [0, 1, 2, 3 , 4 ,5, 6]

let sumOfArrayNumbers = arraySum(array)

console.log(sumOfArrayNumbers)

function arraySum(array){
    let sum = 0
    for(let i = 0; i < array.length; i++){
        sum += array[i]
    }
    return sum
}