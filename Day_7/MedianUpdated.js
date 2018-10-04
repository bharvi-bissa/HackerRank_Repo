process.stdin.resume();
process.stdin.setEncoding("ascii");
let currentLine = 0;
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   _input = _input.split('\n');
    processData(_input);
});
function readLine() {
    return _input[currentLine++];
}
//fn returns median of current array
function median(arr) {
    //if array empty then no median
    if (arr.length == 0) { 
        return "Wrong!"; 
    }
    //if number of element is odd
    if (arr.length % 2 == 1) {
        return arr[Math.floor(arr.length / 2)];
    } else {//if number of element is even
        var index = arr.length / 2;
        return (arr[index - 1] + arr[index]) / 2;
    }
}

function binarySearch(arr, item, start, end) {
    //if array is empty insert at zeroth position
    if(arr.length == 0) {
        return 0;
    }
    //IF NEW ITEM IS SMALLLER THAN ALL EXIXTING ELEMENTS THEN INSERT AT INDEX ZERO
    if (item <= arr[start]) { 
        return start; 
    }
    //if new item is greater than all existing elements then insert at last index
    if (arr[end] < item) { 
        return end + 1;
    }
    //if only two element in array
    if(end - start == 1){
        return end;
    }
    
    var index = start + Math.floor((end - start + 1) / 2);
    //BS for index at left side
    if (item <= arr[index]) {
        return binarySearch(arr, item, start, index);
    }
    //binary search index at right side
    if (arr[index] < item) {
        return binarySearch(arr, item, index, end);
    }
}

function processData(input) {
    
    const queries = parseInt(readLine(), 10);
    var res = [];
    var arr = [];
    for(var i=0; i<queries; i++) {
        var nextQuery = readLine().replace(/\s+$/g, '').split(' ');
        var action = nextQuery[0];
        
        if(action == 'a') {
            var item = parseInt(nextQuery[1]);
            //find the correct position where element is to be inserted
            var index = binarySearch(arr, item, 0, arr.length-1);
            //insert new item in sorted manner
            arr.splice(index, 0, item);
            //insert newly created median in sorted array
            res.push(median(arr));
        }
       
        if(action == 'r') {
            var item = parseInt(nextQuery[1]);
            //find index to be removed
            let found = arr.indexOf(item); 
            //if item not found in array
            if(found == -1) {
                console.log("Wrong!");
            } else {
                //then remove item
                arr.splice(found,1); 
                
                res.push(median(arr));
            }          
        }
    }
    for(var i=0; i<res.length; i++) {
        console.log(res[i]);
    }
} 