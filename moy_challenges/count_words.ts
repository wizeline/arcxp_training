//Challenges file:
//In order of run this challenges in console use the "npx ts-node moy_challenges/count_words.ts" command on terminal.


// Count Words in a Sentence:
// Write a function that counts the number of words in a given sentence.

function wordsCounter(sentece: string): number {
    const words = sentece.split(/\s+/); // Split the sentence into words using whitespace as a delimiter.
    return words.length;
} 

var string = "This is a sample sentence";
console.log("The number of words in the string is ", wordsCounter(string));