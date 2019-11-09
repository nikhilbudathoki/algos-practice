/*
reverse accepts a str and returns a new string in reverse
*/
function reverse(str) {
    let newStr = "";
    let n = str.length;

    function reverse_recursor(str1) {
        if (str1.length === 0) return;
        reverse_recursor(str1.slice(1));
        newStr = newStr.concat(str1[0]);
    }

    reverse_recursor(str);
    return newStr;
}

function reversePure(str) {
    if (str.length <= 1) return str;
    return reversePure(str.slice(1)) + str[0];
}
