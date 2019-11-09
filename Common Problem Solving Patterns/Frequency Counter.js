// Write a function called same which accepts two arrays. 
// The function should return true if every value in the array has 
// its corresponding value squared in the second array. 
// The frequency of the values must be the same. The orders can be mixed up.

function same_naive(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        // If the lengths aren't equal, then frequencies aren't the same
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        // This next line is ineffecient because indexOf is O
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        // CorrectIndex is index if element exists, otherwise its -1
        if (correctIndex === -1) {
            return false;
        }
        // Splice(i, n) removes n elements after index i(index i included)
        arr2.splice(correctIndex, 1)
    }
}



function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for (let val of arr1) {
        // This is basically an if statement
        // if frequencyCounter1[val] doesn't exist, it evaluates to 0
        // For first encounter of frequencyCounter
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of arr2) {
        // Basically creates a dictionary with every element in arr2
        // and its frequency
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            // Case when element in arr1 doesn't even exist in arr2
            return false;
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            // Case when element in arr1 exists more/less than 
            // its corresponding squared element in arr2
            return false;
        }
    }

    // Case where none of the above two cases were hit
    return true;
}



/*
validAnagram(str1, str2)
Determines if the second string is anagram of first.
Anagram is word, phrase or name formed by rearranging
letters of another.
Examples:
validAnagram('cinema', 'iceman') => true;
validAnagram('', '') => true;
validAnagram('aaz', 'zza') => false;
*/
function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let lookup = {}

    for (let i = 0; i < str1.length; i++) {
        let letter = str1[i]
        // Another way of writing "if"
        // stmt1 ? cmd1 cmd2 => 
        // if stmnt1 is true, execute cmd1; else, execute cmd2
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }


    for (let i = 0; i < str2.length; i++) {
        let key = str2[i];
        if (!(lookup[key])) {
            return false;
        }
        else {
            lookup[key] -= 1;
        }

    }
    return true;
}

// This one doesn't work. Also less space effecient even if it worked.
function validAnagram_bad(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let freqstr1 = {}
    let freqstr2 = {}

    for (let index of str1) {
        freqstr1[str1[index]] = (freqstr1[str1[index]] || 0) + 1
    }

    for (let index of str2) {
        freqstr2[str2[index]] = (freqstr2[str2[index]] || 0) + 1
    }

    for (let key in freqstr1) {
        if (!(key in freqstr2)) {
            return false;
        }

        if (freqstr1[key] !== freqstr2[key]) {
            return false;
        }
    }
    return true;
}

