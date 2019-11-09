/*
Takes in two strings, check whether char in str1 
form a subsequence of characters in str2.
*/

function isSubsequence(str1, str2) {
    let i = 0;
    for (let j = 0; j < str2.length; j++) {
        if (str1[i] === str2[j]) {
            i++;
        }
    }

    if (i === str1.length) {
        return true;
    }
    return false;
}