/*
capitalizeFirst takes an array of stringsa and
capitalizes the first letter of each string in the array
*/

function capitalizeFirst(arr) {
    let result = [];

    function capitalizeFirstRecursor(arr1) {
        console.log("input:", arr1, "focus: ", arr[0], "result: ", result);
        if (arr1.length == 0) {
            return;
        }
        result.push(arr1[0][0].toUpperCase() + arr1[0].slice(1));

        capitalizeFirstRecursor(arr1.slice(1));
    }

    capitalizeFirstRecursor(arr);

    return result;

}


let tomato = ["hi", "bye"];

let motato = capitalizeFirst(tomato);

console.log(motato);