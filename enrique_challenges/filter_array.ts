// Code a function that receives an array object and filters all the items that have a value greater than a certain number
// Consider that the items’ values might not always be numbers

const array = [1,"mama", 99, -3, Infinity, undefined, NaN, 0, 1.1, "hola", true, false, null, "2", 4, 5, 3, 100, 9, 22, 10];

// This is the original solution
function filterOnlyNumbers1(array: Array<any>, limit: number) {
    let result: Array<any> = [];
    for(let i =0; i<array.length; i++){
        if (typeof array[i] === "number" && array[i] >= limit){
            result.push(array[i]);
        }
    }
    return result;
}

// This works in some cases, but Infinity is also added
function filterOnlyNumbers2(array: Array<any>, limit: number) {
    return array.filter((item) => typeof item === "number" && item >= limit);
}

// This works better, no problem with NaN or Infinity
function filterOnlyNumbers3(array: Array<any>, limit: number) {
    return array.filter((item) => Number.isFinite(item) && item >= limit);
}

console.log(filterOnlyNumbers1(array, 5)); // returns [ 99, Infinity, 5, 100, 9, 22, 10 ]
console.log(filterOnlyNumbers2(array, 5)); // returns [ 99, Infinity, 5, 100, 9, 22, 10 ]
console.log(filterOnlyNumbers3(array, 5)); // returns [ 99, 5, 100, 9, 22, 10 ]
