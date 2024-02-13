//Challenges file:
//In order of run this challenges in console use the "npx ts-node moy_challenges/factorial_number.ts" command on terminal.


// Factorial of a Number:
// Write a function that calculates the factorial of a number.

function factorialOfANumber(number: number): number{
    if(number < 0){
        throw new Error("Factorial is not defined for negative numbers");
    }
    
    if(number === 0 || number === 1){
        return 1;
    }

    return number * factorialOfANumber(number - 1);

}

var number = 5;
console.log(`The factorial of ${number} is `, factorialOfANumber(number));

function factorialOfANumber2(number: number): number{
    if(number < 0){
        throw new Error("Factorial is not defined for negative numbers");
    }
    
    if(number === 0 || number === 1){
        return 1;
    }

    let result = 1;

    for(let i = 1 ; i <= number; i++){
        result *= i;
    }
    return result;
}

var number = 5;
console.log(`The factorial of ${number} is `,factorialOfANumber2(number));