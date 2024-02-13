//given an array of numbers, return the sum of the numbers that are less than 5

const array1 = [2, 4, 1, 5, 6, 3];
const array2 = [90, 2, -2, 50, 8, 21, 12, 99, 1, -40, 102];
const array3 = [-2, -1, -3, 0, 20, -12, 9, 8];

//Basic solution
function sumNumbersWithLimit(array: Array<number>, limit: number) {
    let acc : number = 0;
    for(let i=0; i<array.length; i++) {
        if (array[i]<=limit){
            acc = acc + array[i];
        }
    }
    return acc;
}

//Solution using reduce
function sumNumbersWithLimit2(array: Array<number>, limit: number) {
    return array.reduce((acc, current) => {
        return current <= limit ? acc + current : acc;
    },0);
}

//Test Cases sumNumbersWithLimit

const result1 = sumNumbersWithLimit(array1, 5); // should return 15
const result2 = sumNumbersWithLimit(array2, 5); // should return -39
const result3 = sumNumbersWithLimit(array3, 5); // should return -18

//Test Cases sumNumbersWithLimit2

const result4 = sumNumbersWithLimit2(array1, 5); // should return 15
const result5 = sumNumbersWithLimit2(array2, 5); // should return -39
const result6 = sumNumbersWithLimit2(array3, 5); // should return -18

console.log(result1);
console.log(result2);
console.log(result3);

console.log(result4);
console.log(result5);
console.log(result6);