//Challenges file:
//In order of run this challenges in console use the "npx ts-node moy_challenges/check_parity.ts" command on terminal.


// Check Parity:
// Write a function that determines whether a number is even or odd.

function isNumberEven(number: number): string{
    return number % 2 === 0 ? "Even" : "Odd"; 
 }
 
 const testNumber = 8;
 const testNumber2 = 15;
 
 console.log(`${testNumber} is `, isNumberEven(testNumber));
 console.log(`${testNumber2} is `, isNumberEven(testNumber2));