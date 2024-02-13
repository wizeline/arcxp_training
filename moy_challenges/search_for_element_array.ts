//Challenges file:
//In order of run this challenges in console use the "npx ts-node moy_challenges/search_for_element_array.ts" command on terminal.


// Search for an Element in an Array:
// Write a function that searches for the occurrence of an element in an array and returns its index.

function findIndex(array: number[], target: number): number{
    for(let i = 0; i < array.length; i++){
        if(array[i] === target){
            return i; // Return the index if the element is found.
        }
    }
    return -1; // Return -1 if the element is not found.
}

var numbersArray = [1, 2, 3, 4, 5, 6, 7 ,8 ,9];
const targetElement = 5;
const index = findIndex(numbersArray, targetElement);

if(index !== -1){
    console.log(`The element ${targetElement} found at index ${index}`);
}
else{
    console.log(`The element ${targetElement} not found in the array`);
}