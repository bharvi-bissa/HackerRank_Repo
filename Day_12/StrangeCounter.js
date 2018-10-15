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

// Complete the strangeCounter function below.
function strangeCounter(t) {

    var value = 3;
    var n = 1;
    while( (value+n) <= t ) {
        n = value + n;
        value = value * 2;
    }
    return ((value+n) - t);

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    let result = strangeCounter(t);

    ws.write(result + "\n");

    ws.end();
}
