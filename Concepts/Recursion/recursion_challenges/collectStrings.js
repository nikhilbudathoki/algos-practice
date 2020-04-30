/*
collectStrings accepts an array and returns
an array of all values in the obj that are strings
*/

function collectStrings(obj) {
    let result = [];

    function collectHelper(item) {
        for (var key in item) {
            if (typeof item[key] === 'object') {
                collectHelper(item[key]);
            }
            else if (typeof item[key] === 'string') {
                result.push(item[key]);
            }
        }

    }
    collectHelper(obj);
    return result;
}

function collectStringsPure(obj) {
    let result = [];

    for (var key in obj) {
        if (typeof obj[key] === "string") {
            result.push(obj.key);
        }

        else if (typeof obj[key] === 'object') {
            result = result.concat(collectStringsPure(obj[key]));
        }
    }
    return result;
}
