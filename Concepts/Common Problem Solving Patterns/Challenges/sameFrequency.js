/*
sameFrequency: num1 num2
Determines if the two nums have same frequency of digits
*/

function sameFrequency(num1, num2) {
    let obj1 = {};
    let obj2 = {};

    if (num1 === 0 || num2 === 0) {
        if (num2 === 0 && num1 === 0) {
            return true;
        }
        return false;
    }

    num1 = Math.abs(num1);
    num2 = Math.abs(num2);
    while (num1 > 0) {
        let digit = num1 % 10;
        obj1[digit] = (obj1[digit] || 0) + 1;
        num1 = Math.floor(num1 / 10);
    }

    while (num2 > 0) {
        let digit2 = num2 % 10;
        obj2[digit2] = (obj2[digit2] || 0) + 1;
        num2 = Math.floor(num2 / 10);
    }

    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}
