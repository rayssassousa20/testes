let list = [1,3,2,4,5]

let result = findMaximunNumber(list)

console.log(result)

function findMaximunNumber(arrayNumbers){
    let comparison = arrayNumbers[0]
    for(let i = 1; i < arrayNumbers.length; i++){
        if(arrayNumbers[i] > comparison){
            comparison = arrayNumbers[i]
        }
    }
    return comparison
}