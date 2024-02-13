//Challenges file:
//In order of run this challenges in console use the "npx ts-node moy_challenges/find_duplicates.ts" command on terminal.

// Duplicates in an Array:
// Write a function that finds and returns duplicated elements in an array.

function findDuplicates(array: number[]): number[] {
    const seen: { [key: number]: boolean } = {};
    const duplicates: number[] = [];

    for (const num of array) {
        if (seen[num]) {
            // If the number is already in the "seen" object, it's a duplicate
            duplicates.push(num);
        } else {
            // Mark the number as seen
            seen[num] = true;
        }
    }

    return duplicates;
}

var numbersArray = [1, 2, 3, 4, 2, 5, 6, 1, 7, 8, 9, 7];
const duplicateNumbers = findDuplicates(numbersArray);
console.log("The duplicated number are ", duplicateNumbers); // Output: [2, 1, 7]