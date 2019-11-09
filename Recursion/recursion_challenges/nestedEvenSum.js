/*
nestedEvenSum takes in an object(dict) and returns all even numbers
for any int fields. The objects may contain nested objects
*/

function nestedEvenSum(item) {
    let total = 0;

    function recursiveSum(obj1) {
        for (var key in obj1) {
            if (typeof obj1[key] === 'object') {
                recursiveSum(obj1[key]);
            } else if (typeof obj1[key] === 'number' &&
                obj1[key] % 2 === 0) {
                total += obj1[key];
            }
        }
    }
    recursiveSum(item);
    return total;
}

function nestedEvenSumPure(obj) {
    let sum = 0;
    for (var key in obj) {
        if (typeof obj[key] === 'object') {
            sum += nestedEvenSum(obj[key]);
        }
        else if (typeof obj[key] === "number" &&
            obj[key] % 2 === 0) {
            sum += obj[key];
        }
    }
    return sum;
}

