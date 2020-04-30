/*
Build a function areThereDuplicates that takes in arbitrary number of args
and determines if any of the args are duplicates of each other
*/


// Using freqCounters
function areThereDuplicates() {
    let obj = {}

    // the array "arguments" is just a list of arguments
    for (let i in arguments) {
        obj[arguments[i]] = (obj[arguments[i]] || 0) + 1;
    }

    for (let key in obj) {
        if (obj[key] > 1) {
            return true;
        }
    }
    return false;
}

// Using multiple pointers
// ...args is a list of arguments
function duplicatesPointers(...args) {
    // Search this notation up
    args.sort((a, b) => a > b);

    let i = 0;
    let j = 1;

    while (j < args.length) {
        if (args[i] === args[j]) {
            return true;
        }
        start++;
        next++;
    }
    return false;
}


// areThereDuplicates One Liner Solution
function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
}