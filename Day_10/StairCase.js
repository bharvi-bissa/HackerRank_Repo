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

// Complete the staircase function below.
function staircase(h) {
    var s="";
    for(var i=0;i<h;i++){
            for(var j=0;j<h-i-1;j++){
                s+=" ";
            }
            for(var k=0;k<i+1;k++){
                s+="#";
            }
            s+="\n";
        
    }
    
    console.log(s);
}

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}
