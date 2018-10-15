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

// Complete the morganAndString function below.
function morganAndString(a, b) {

    a += "z";
    b += "z";
    var Out = "";
    while (true) {
        if (!a) {
            Out += b;
            break;
        }
        if (!b){
            Out += a;
            break;
        }
        if (a <= b) {
            Out += a[0];
            a = a.substring(1);
            continue;
        }
        Out += b[0];
        b = b.substring(1);
    }
    return Out.slice(0,-2);

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const a = readLine();

        const b = readLine();

        let result = morganAndString(a, b);

        ws.write(result + "\n");
    }

    ws.end();
}
