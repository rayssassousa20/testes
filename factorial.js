factorial(2)


function factorial(number){
    let num = number
    for(let i = number; i > 1; i--){
        num = num * (i - 1)
    }
    console.log(num)
}