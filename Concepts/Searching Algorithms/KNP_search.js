/*
KNP Search does some next stuff. I'll explain later
once I understand it
*/

function knp_search(str1, str2) {
    // First step is to initialize a suffix-prefix table for str2
    let len1 = str1.length;
    let len2 = str2.length;
    let lps = computeLPSarr(str2);

    let i = 0;
    let j = 0;
    let result = [];
    while (i < len1) {
        if (str2[j] == str1[i]) {
            i++;
            j++;
        }
        if (j == len2) {
            result.push(i - j);
            j = lps[j - 1];
        }

        else if (i < len1 && str2[j] != str1[i]) {
            if (j != 0) {
                j = lps[j - 1];
            }
            else {
                i++;
            }
        }
    }
    return result ? result[0] : -1;
}

// arr[i] has the longest prefix length at that index
// that is also a suffix
function computeLPSarr(pat) {
    let len = pat.length;
    let arr = [] * len;
    arr[0] = 0;
    let i = 1;
    let j = 0;

    while (i < len) {
        if (pat[i] == pat[j]) {
            j++;
            arr[i] = j;
            i++;
        }
        else {
            if (j != 0) {
                j = arr[j - 1];
            }
            else {
                arr[i] = 0;
                i++;
            }
        }
    }
    return arr;
}
