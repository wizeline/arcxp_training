//Challenges file:
//In order of run this challenges in console use the "npx ts-node moy_challenges/fizz_buzz.ts" command on terminal.

// FizzBuzz:
// Print numbers from 1 to 100, but for multiples of 3 print "Fizz" instead of the number, 
//and for multiples of 5 print "Buzz". For numbers which are multiples of both, print "FizzBuzz".

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) { //Start from the multiple condition
        console.log("FizzBuzz");
    } else if (i % 3 === 0) { //If the number is divisible by 3 and the result is 0, then is a multiple of 3 (i % 3 === 0)
        console.log("Fizz");
    } else if (i % 5 === 0) { //If the number is divisible by 5 and the result is 0, then is a multiple of 3 (i % 3 === 0)
        console.log("Buzz");
    } else {
        console.log(i); //Else, print the number.
    }
}