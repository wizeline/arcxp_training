//Challenges file:
//In order of run this challenges in console use the "npx ts-node moy_challenges/larges_number.ts" command on terminal.

// Find the Largest Number:
// Write a function that finds the largest number in an array of numbers.
function findLargestNumber(array: number[]):number{
    if(array.length === 0){
        throw new Error("The array is empty");
    }
    
    let largestNumber = array[0];

    for(let i = 1; i<=array.length;i++){
        if(array[i] > largestNumber){
            largestNumber = array[i];
        }
    }

    return largestNumber;
}

const array = [1, 2, 4, 8, 6, 5];
const largestNumber = findLargestNumber(array);
console.log("the largest number is ", largestNumber);