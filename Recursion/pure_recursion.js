/*
collectOddValuesPure recursively goes through an array and
returns all the odd values of the array in a new array
WITHOUT using an outer scope variable
*/

function collectOddValuesPure(arr) {
    let newArr = [];

    if (arr.length === 0) return newArr;

    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValuesPure(arr.slice(1)));
    return newArr;
}