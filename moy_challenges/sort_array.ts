//Challenges file:
//In order of run this challenges in console use the "npx ts-node moy_challenges/sort_array.ts" command on terminal.


// Sort an Array:
// Implement a sorting algorithm (you can start with the bubble sort) to sort an array of numbers.

function bubbleSort(numbers: number[]): number[] {
    const n = numbers.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            // Swap if the element found is greater than the next element
            if (numbers[j] > numbers[j + 1]) {
                const temp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = temp;
            }
        }
    }

    return numbers;
}

const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = bubbleSort(unsortedArray.slice()); // array.slice(), Create a copy to keep the original array unchanged
console.log("The sorted array with the bubble sort algoritm is ", sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]

//A simples way to do this is:
console.log("The simplest way to sort a numbers array is ", unsortedArray.slice().sort((a,b) => a-b));