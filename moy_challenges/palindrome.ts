//Challenges file:
//In order of run this challenges in console use the "npx ts-node moy_challenges/palindrome.ts" command on terminal.


// Check Palindromes:
// Write a function that checks if a word or phrase is a palindrome (reads the same forwards and backward).

function stringIsAPalindrome(string: string):boolean{
    // Remove non-alphanumeric characters and convert to lowercase
    let cleanedString = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Compare the cleaned string with its reversed version
    return cleanedString === cleanedString.split('').reverse().join(''); 
    
}

var string = "A man, a plan, a canal, Panama!";
const palindrome = stringIsAPalindrome(string);
if(palindrome === true){
    console.log(palindrome, " the word is a palindrome");
}
else{
    console.log(palindrome, " the word is not a palindrome");
}