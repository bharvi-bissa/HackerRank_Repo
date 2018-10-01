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

class Stack {
    constructor() 
    { 
        this.items = []; 
    } 
    push(element) 
    { 
         this.items.push(element); 
    } 
    pop() 
    { 
        if (this.items.length == 0) 
            return "Underflow"; 
        return this.items.pop(); 
    }
    
    peek(){
        return this.items[this.items.length-1];
    }
    
    printStack() 
    {  
        var str="";
        for (var i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        return str;
    }
}

function processData(input) {
    const testcases=parseInt(readLine(), 10);
    //console.log(testcases);
    var stack = new Stack();
    var s = "";
    stack.push(s);
    for (var i = 0; i < testcases; i++) {
        const nq = readLine().replace(/\s+$/g, '').split(' ');
        //console.log(nq);
        const t = parseInt(nq[0]);
        //console.log(t);
        
       // console.log(stack.printStack());
        if (t == 1) {
            s = s + nq[1];
            stack.push(s);
            //console.log(stack.printStack());
        } else if (t == 2) {
            s = s.substring(0, s.length-parseInt(nq[1],10));
            stack.push(s);
        } else if (t == 3) {
            //console.log("nq[1]="+nq[1]);
            console.log(s.charAt(parseInt(nq[1],10)-1));
        } else {
            stack.pop();
            s = stack.peek();
        }
    }
}
