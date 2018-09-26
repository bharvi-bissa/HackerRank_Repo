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



function main() {
    const nd = readLine().split(' ');

    const n = parseInt(nd[0], 10);

    const d = parseInt(nd[1], 10);

    var a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));
    
   for(var i=0;i<d;i++){
         var temp=a[0];
        for(var j=1;j<n;j++){

            a[j-1]=a[j];
        }
        a[n-1]=temp;
    }
    let s="";
    for(var i=0;i<n;i++){
        s+=a[i]+" ";
    }
    console.log(s);
}
