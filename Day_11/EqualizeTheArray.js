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

// Complete the equalizeArray function below.
function equalizeArray(a) {
    var n = a.length;
    var map=new Map();
        for(var i=0;i<n;i++){
            if(!map.has(a[i]))
                map.set(a[i],1);
            else
               map.set(a[i], map.get(a[i])+1);
        }
        var max = 0;
        console.log(map.values());
        map.forEach((value) => {
            if(value>max){
                max = value;
            }
        });
        return (n-max);

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = equalizeArray(arr);

    ws.write(result + "\n");

    ws.end();
}
