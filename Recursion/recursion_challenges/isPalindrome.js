/*
isPalindrome returns true if str is a palindrome.
Palindromes read the same forward and backward

isPalindrome('awesome') => false
isPalindrome('foobar') => false
isPalindrome('tacocat') => true
isPalindrome('amanaplanacanalpanama') => true
isPalindrome('amanaplanacanalpandemonium') => false

*/

function isPalindrome(str) {
    let len = str.length;
    let result = true;


    function helper(str1, i) {
        let flag = false;
        if (str1.length <= len / 2) return true;

        if (str1[0] === str1[i]) {
            flag = true;
        }

        result = result && helper(str1.slice(1), i - 2);
        return flag;
    }

    helper(str, len - 1);
    return result;
}


function isPalindromePure(str) {
    if (str.length == 1) {
        return true;
    }

    if (str.length == 2) {
        return str[0] === str[1];
    }

    if (str[0] === str.slice(-1)) {
        return isPalindromePure(str.slice(1, -1));
    }

    return false;
}
