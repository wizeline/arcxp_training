//Challenges file:
//In order of run this challenges in console use the "npx ts-node moy_challenges/sum_digits_of_number.ts" command on terminal.

// Sum of Digits of a Number:
// Write a function that calculates the sum of the digits of a number.

function sunDigitsInNumber(number: number): number{
    let sum = 0;
    // Convert the number to a string to iterate through each digit.
    const digits = Math.abs(number).toString().split('');

    for(const digit of digits){
        sum += parseInt(digit, 10);
    }
    return sum;
}

var number = 12345;
console.log(`The sum of the digits of the number ${number} is: `, sunDigitsInNumber(number));
