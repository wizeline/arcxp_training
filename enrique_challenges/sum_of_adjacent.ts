// given an array of numbers, return the largest sum of two numbers adjacent to each other

const array1 = [2, 4, 1, 5, 6, 3]; // Here 5+6 = 11, is the biggest number
const array2 = [90, 2, -2, 50, 8, 21, 12, 99, 1, -40, 102];
const array3 = [-2, -1, -3, 0, 20, -12, 9, 8];

// Solution:

function maxAdjacentSum1(array: Array<number>) {
    let maxSum = -Infinity;
    for(let i=0; i<array.length-1; i++) {
        const sum = array[i] + array[i+1];
        if(sum > maxSum){
            maxSum = sum;
        }
    }
    return maxSum;
}

//Or using Math.max

function maxAdjacentSum2(array: Array<number>) {
    let maxSum = -Infinity;
    for(let i=0; i<array.length-1; i++) {
        const sum = array[i] + array[i+1];
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum;
}


//Or using && operator
function maxAdjacentSum3(array: Array<number>) {
    let maxSum = -Infinity;
    const { length } = array;
    for(let i=0; i<length-1; i++) {
        const sum = array[i] + array[i+1];
        sum > maxSum && (maxSum = sum);
    }
    return maxSum;
}

// Test Cases

const sum1 = maxAdjacentSum1(array1); // should return 5 + 6 = 11
const sum2 = maxAdjacentSum1(array2);
const sum3 = maxAdjacentSum1(array3);

const sum4 = maxAdjacentSum2(array1);
const sum5 = maxAdjacentSum2(array2);
const sum6 = maxAdjacentSum2(array3);

const sum7 = maxAdjacentSum3(array1);
const sum8 = maxAdjacentSum3(array2);
const sum9 = maxAdjacentSum3(array3);

console.log(sum1);
console.log(sum2);
console.log(sum3);
console.log(sum4);
console.log(sum5);
console.log(sum6);
console.log(sum7);
console.log(sum8);
console.log(sum9);