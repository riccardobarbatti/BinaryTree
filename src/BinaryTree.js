'use strict';
const { Node } = require('./Node.js');
//BINARY TREE
class BinaryTree {
    constructor(){
        this.root = null;
        console.log("-- Binary Tree Init");
    }
    //insert node method
    insert(value){
        //create node
        const newNode = new Node(value);
        //console.log("-- Made Node");
        if (this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            //branches
            while(true){
                if(value < currentNode.value){
                    //Left branch
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    //Right branch
                    if(!currentNode.right){
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }
}
function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}
exports.BinaryTree = BinaryTree;
exports.traverse = traverse;


