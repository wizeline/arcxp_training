//Challenges file:
//In order of run this challenges in console use the "npx ts-node moy_challenges/count_vowels.ts" command on terminal.


// Count Vowels:
// Write a function that counts the number of vowels in a string.
function numberOfVowels(string: string):number{
    const vowels = "aeiowAEIOU";
    let vowelsCount = 0;

    for(let i = 0; i < string.length; i++){
        if(vowels.includes(string[i])){
            vowelsCount++;
        }
    }
    return vowelsCount;
}

var string = "Hello, World!";
const vowelsCount = numberOfVowels(string);
console.log("the number of vowels on the string is ", vowelsCount);