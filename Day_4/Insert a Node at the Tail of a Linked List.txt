'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
    }

};

function printSinglyLinkedList(node, sep, ws) {
    while (node != null) {
        ws.write(String(node.data));

        node = node.next;

        if (node != null) {
            ws.write(sep);
        }
    }
}


function insertNodeAtTail(head, data) {
    let node = new SinglyLinkedListNode(data);
        node.next = null;
        
        if(head == null){
            return node;
        }else{
            //current points to head of the 1st node
            let current = head;
            //iterate while next of a node is equal to null
            while(current.next !=null){
                //increment its pointer
                current = current.next;
            }
            //if last node found then set its next address to new node, linking
            current.next=node;
            return head;
        }

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const llistCount = parseInt(readLine(), 10);

    let llist = new SinglyLinkedList();

    for (let i = 0; i < llistCount; i++) {
        const llistItem = parseInt(readLine(), 10);
    	const llist_head = insertNodeAtTail(llist.head, llistItem);
      	llist.head = llist_head;
    }

    printSinglyLinkedList(llist.head, '\n', ws);
    ws.write('\n');

    ws.end();
}
