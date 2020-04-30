/*
flatten accepts an array and returns a new array with all values flattened

flatten([1, 2, 3, [4, 5] ]) => [1, 2, 3, 4, 5]
flatten([1, [2, [3, 4], [[5]]]]) => [1, 2, 3, 4, 5]
flatten([[1],[2],[3]]) => [1,2,3]
flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) => [1,2,3]
*/

function flatten(arr) {
    let result = [];

    function recursive_flatten(arr1) {
        console.log('input:', arr1);
        console.log('focus:', arr1[0]);
        console.log('isArray:', Array.isArray(arr1[0]));
        console.log('length:', arr1.length);
        console.log('result:', result);
        console.log('\n', '--------------------', '\n');

        if (arr1.length === 0) return;
        if (!Array.isArray(arr1[0])) {
            result.push(arr1[0]);
            recursive_flatten(arr1.slice(1));
        }
        else {
            recursive_flatten(arr1[0]);
            recursive_flatten(arr1.slice(1));

        }
    }

    recursive_flatten(arr);
    return result;
}


function flattenPure(oldArr) {
    var result = [];
    for (var i = 0; i < oldArr.length; i++) {
        //base case
        if (!Array.isArray(oldArr[i])) {
            result.push(oldArr[i]);
        }
        else {
            result.concat(flatten(oldArr[i]));
        }
    }
}