/*
Takes in an object and any fields that are numbers
will be modified to strings
*/

function stringifyNumbers(item) {
    let result = {};

    function helper(obj) {
        for (var key in obj) {
            if (typeof obj[key] === "number") {
                result[key] = obj[key].toString();
            }
            else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
                result[key] = stringifyNumbers(obj[key]);
            }
            else {
                result[key] = obj[key];
            }
        }
    }

    helper(item);
    return result;
}


function stringifyNumbersPure(obj) {
    var newObj = {};
    for (var key in obj) {
        if (typeof obj[key] === 'number') {
            newObj[key] = obj[key].toString();
        } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            newObj[key] = stringifyNumbersPure(obj[key]);
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}