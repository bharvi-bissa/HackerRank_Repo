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
 * Complete the contacts function below.
 */
function contacts(queries) {
        var numOfQueries = queries.length;
        var map = new Map();
        var data = [];
        var res = []; 
        for (var i = 0; i < numOfQueries; i++){
            let action = queries[i][0];
            let name = queries[i][1];
            /* key: String ; value:no of times it occurs */
            if (action == "add" ){
                for (var j = 1; j <= name.length; j++){
                    var sub = name.substring(0, j);
                    /* if name does not exists */
                    if (map.get(sub) == null){
                        map.set(sub, 1);
                    } else {
                        /* if name does exists then get the value and increment its count */
                        map.set(sub, map.get(sub) + 1);
                    }
                }
            } else { //query matches
                if (map.get(name) == null){
                    res.push(0);
                } else {
                    res.push(map.get(name));
                }

            }

        }
    return res;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const queriesRows = parseInt(readLine(), 10);

    let queries = Array(queriesRows);

    for (let queriesRowItr = 0; queriesRowItr < queriesRows; queriesRowItr++) {
        queries[queriesRowItr] = readLine().split(' ');
    }

    let result = contacts(queries);

    ws.write(result.join("\n") + "\n");

    ws.end();
}
