/*
capitalizeWords accepts an array of strings and
returns an array with each string capitalized
*/

function capitalizeWords(arr) {
    let result = [];

    function recursiveCapitalize(arr1) {
        if (arr1.length === 0) return;
        result.push((arr1[0]).toUpperCase());
        recursiveCapitalize(arr1.slice(1));
    }

    recursiveCapitalize(arr);
    return result;
}



function capitalizeWordsPure(array) {
    if (array.length === 1) {
        return [array[0].toUpperCase()];
    }
    let result = capitalizeWordsPure(array.slice(0, -1));
    result.push(array.slice(array.length - 1)[0].toUpperCase());
    return result;

}
