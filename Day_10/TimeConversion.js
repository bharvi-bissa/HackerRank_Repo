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
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
       
    var tempArray = s.split(":");
    var hours = tempArray[0];
    var minutes = tempArray[1];
    var seconds = tempArray[2].substring(0, 2);
    
    var tempHours;
    
    if (tempArray[2].substring(2, 4).includes("PM")) {
      if (parseInt(hours) < 12) {
        tempHours = parseInt(hours);
        tempHours += 12;
        hours = tempHours;
      }
    }
    if (tempArray[2].substring(2, 4).includes("AM")) {
      if (parseInt(hours) == 12) {
        hours = "00";
      }
    }
    var s = hours+":"+minutes+":"+seconds;
    return s;
    }



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
