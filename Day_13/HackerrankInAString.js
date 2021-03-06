'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}


function hackerrankInString(s) {

    var str = "hackerrank";
    if (s.length < str.length) {
        return "NO";
    }
    var j = 0;
    for (var i = 0; i < s.length; i++) {
        if (j < str.length && s.charAt(i) == str.charAt(j)) {
                j++;
        }
    }
    return (j == str.length ? "YES" : "NO");

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = hackerrankInString(s);

        ws.write(result + "\n");
    }

    ws.end();
}
