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

// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    var appDist=[];
    var oraDist=[];
    var countApples=0;
    var countOranges=0;
   
    for(var i=0;i<apples.length;i++){
        appDist[i]=apples[i]+a;
    }
    for(var i=0;i<oranges.length;i++){
        oraDist[i]=oranges[i]+b;
    }

    for(var i=0;i<apples.length;i++){
        if(appDist[i]>=s && appDist[i]<=t ){
            countApples++;
        }
    }
    
    console.log(countApples);

    for(var i=0;i<oranges.length;i++){
        if(oraDist[i]>=s && oraDist[i]<=t ){
            countOranges++;
        }
    }
    
    console.log(countOranges);
}

function main() {
    const st = readLine().split(' ');

    const s = parseInt(st[0], 10);

    const t = parseInt(st[1], 10);

    const ab = readLine().split(' ');

    const a = parseInt(ab[0], 10);

    const b = parseInt(ab[1], 10);

    const mn = readLine().split(' ');

    const m = parseInt(mn[0], 10);

    const n = parseInt(mn[1], 10);

    const apples = readLine().split(' ').map(applesTemp => parseInt(applesTemp, 10));

    const oranges = readLine().split(' ').map(orangesTemp => parseInt(orangesTemp, 10));

    countApplesAndOranges(s, t, a, b, apples, oranges);
}
