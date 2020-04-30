/* 
collectOddValues recursively goes through an array and
returns all the odd values of the array in a new array
*/
function collectOddValues(arr) {
    let result = [];

    function helper(helperInput) {
        if (helperInput.length == 0) return;

        if (helperInput[0] % 2 !== 0) {
            // The function modifies a variable scoped outside it
            // This is very common for recursion using helpers
            result.push(helperInput[0]);
        }

        helper(helperInput.slice(1));
    }

    helper(arr);
} 