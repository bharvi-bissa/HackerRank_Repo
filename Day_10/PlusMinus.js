'use strict';

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

// Complete the plusMinus function below.
function plusMinus(arr) {
    
     var positives = 0;
     var negatives =0;
     var zeroes = 0;
     var n = arr.length;
     for(var i = 0; i < n; i++){
        var num = arr[i];
        if(num > 0)
        {
            positives++;    
        }
        else if(num < 0)
        {
            negatives++;
        }
        else
        {
            zeroes++;    
        }
    }
    
    console.log((positives/n).toFixed(4));
    console.log((negatives/n).toFixed(4));
    console.log((zeroes/n).toFixed(4));
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
