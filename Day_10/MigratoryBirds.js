'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
    var map = new Map();
    for(var i in arr) {
        if(map.get(arr[i]) == null) {
            map.set(arr[i],0)
        }
        else {
            map.set(arr[i],map.get(arr[i])+1);
        }
    }
    var max = Number.MIN_VALUE;
    var min = Number.MAX_VALUE;
    for (var key of map.keys()) {
        if(max < map.get(key)) {
            max = map.get(key);
            min = key;
        }
        if(max == map.get(key) && min > key) {
            min = key;
        }
    }
    return min;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}
