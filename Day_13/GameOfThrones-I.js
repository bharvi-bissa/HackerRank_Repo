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
/*A palindrome has the unique property that
the frequency of only one character can
be odd, so we can simply count the
frequency of characters and check if
there is more than 1 that is odd
*/
// Complete the gameOfThrones function below.
function gameOfThrones(s) {
    var odd=0;
    var arr = s.split('');
    var map =  new Map();
    
    for(var i in arr) {
        if(map.get(arr[i]) == null) {
            map.set(arr[i],1)
        }
        else {
            map.set(arr[i],map.get(arr[i])+1);
        }
    }
    
    var values = map.values();
    
    for (var value of values) {
        if(value % 2 !=0){
            odd++;
        }
    }
    
 
    
    if(odd>1){
        return "NO";
    }else{
        return "YES";
    }

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = gameOfThrones(s);

    ws.write(result + "\n");

    ws.end();
}
