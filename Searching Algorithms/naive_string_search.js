/*
stringSearch takes in two strings and counts the
number of times str2 appears in str1
*/

function stringSearch(str1, str2) {
    let total = 0;
    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            if (str1[i + j] !== str2[j]) break;
            if (j === str2.length - 1) total++;
        }
    }
    return total;
}

