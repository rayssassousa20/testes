fizzBuzz()

function fizzBuzz(){
    for(let i = 1; i <= 100; i++){
        let num = i
        if(num % 3 == 0){
            num = "Fizz"
        } else if (num % 5 == 0){
            num = "Buzz"
        }
        if ((num % 3 == 0) && (num % 5 == 0)){
            num = "FizzBuzz"
        }
        console.log(num)
    }
}