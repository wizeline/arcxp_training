/* Create a function that receives an array, compares the array against another array
    and returns all the values that are not repeated across them:
*/

const array1: number[] = [20, 8, 2, 19, 31, 10, 6, 43, 11, 5];
const array2: number[] = [90, 5, 2, 87, 34, 12, 9, 6, 3, 77];

// Solution with for
function getNotRepeatedValues1(array1: number[], array2: number[]): number[] {
    let result: number[] = [];
    for(let i=0; i<array1.length; i++){
        if(!array2.includes(array1[i])){
            result.push(array1[i]);
        }
    }
    return result;
}

// Solution with filter
function getNotRepeatedValues2(array1: number[], array2: number[]): number[] {
    return array1.filter((item) => !array2.includes(item));
}

// Solution with filter and indexOf
function getNotRepeatedValues3(array1: number[], array2: number[]): number[] {
    return array1.filter((item) => array2.indexOf(item) === -1);
}

// Solution with symetric difference
function getNotRepeatedValues4(array1: number[], array2: number[]): number[] {
    return array1.filter((item) => !array2.includes(item))
            .concat(array2.filter( (item) => !array1.includes(item)));
}

console.log(getNotRepeatedValues1(array1, array2)); //returns [20, 8, 19, 31, 10, 43, 11]
console.log(getNotRepeatedValues2(array1, array2)); //returns [20, 8, 19, 31, 10, 43, 11]
console.log(getNotRepeatedValues3(array1, array2)); //returns [20, 8, 19, 31, 10, 43, 11]
console.log(getNotRepeatedValues4(array1, array2)); //returns [20, 8, 19, 31, 10, 43, 11, 90, 87, 34, 12,  9, 3, 77]