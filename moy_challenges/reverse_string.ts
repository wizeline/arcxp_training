//Challenges file:
//In order of run this challenges in console use the "npx ts-node moy_challenges/reverse_string.js" command on terminal.



// Reverse a String:
// Write a function that reverses a given string.
function reverseString(string: string): string{
    return string.split('').reverse().join('');
}

var string = "Hello World!";
const reversedString = reverseString(string);
console.log("The reversed string is ", reversedString);