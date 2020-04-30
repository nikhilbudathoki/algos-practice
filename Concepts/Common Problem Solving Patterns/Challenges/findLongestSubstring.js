/*
findLongestSubstring takes in str,
returns length of the longest substring
with all distinct characters
*/

function findLongestSubstring(str1) {
    let start = 0;
    let end = 0;
    let maxlen = 0;
    let visited = {};

    for (let i = 0; i < str1.length; i++) {
        let char = str1[i];
        console.log(i, char, visited, "start:", start, "maxlen:", maxlen);
        if (visited[char]) {
            start = Math.max(start, visited[char]);
        }

        maxlen = Math.max(maxlen, (i - start) + 1);

        visited[char] = i + 1;
    }

    return maxlen;
}



tomato = "thecatinthehat";
console.log(findLongestSubstring(tomato));
