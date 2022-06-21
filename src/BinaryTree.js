'use strict';
const { Node } = require('./Node.js');
//BINARY TREE
class BinaryTree {
    constructor(){
        this.root = null;
        console.log("-- Binary Tree Init");
    }
    //---------------------------------------
    //insert node method
    //---------------------------------------
    insert(value){
        //create node
        const newNode = new Node(value);
        //console.log("-- Made Node");
        if (this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            //branches looping detect
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
    //---------------------------------------
    //search look method
    lookup(value){
        //1.check root node
        if(!this.root){
            return false;
        }
        //2. check left and right node
        let currentNode = this.root;
        while(currentNode){
            if(value < currentNode.value){
                currentNode = currentNode.left;
            } else if (value > currentNode.value){
                currentNode = currentNode.right;
            } else if (currentNode.value === value){
                console.log(currentNode);
                return currentNode;
            }
        }
        //node not found
        console.log("-- Node not Found!");
        return false;

    }
    //---------------------------------------
    //search Closest Value method
    //Time: O(log(n)) - Space: O(1)
    findClosestValue(target){
        console.log("--- findClosestValue init");
        //1.check root node
        if(!this.root){
            return false;
        }
        //2. check left and right node
        let currentNode = this.root;
        let closest = 0;
        while(currentNode){
            if (Math.abs(target - closest)  > Math.abs(target - currentNode.value)) {
                closest = currentNode.value;
            }
            if(target < currentNode.value){
                currentNode = currentNode.left;
            } else if (target > currentNode.value){
                currentNode = currentNode.right;
            } else {
                //node not found
                console.log("-- Node not Found!");
                break;
            }
        }
        console.log("-- Closest value: "+closest);
        return closest;

    }
    //---------------------------------------
    //Branch Sums
    //Time: O(n) - Space: O(n)
    sumBranches(){
        console.log("--- Branch Sums init");
        const sums = [];
        this.calculateBranchSums(this.root,0, sums);
        console.log("SUM: "+ sums);
        return sums;


    }
    //calculate Sums - recursive
    calculateBranchSums(node, runningSum, sums){
            //1.check root node
            if(!node){
                return;
            }
            //check branch
            //let currentNode = node;
            const newRunningSum = runningSum + node.value;
             console.log("--- newRunningSum --: " + newRunningSum);
            if(!node.left && !node.right) {
                //add value in sums array
                sums.push(newRunningSum);
                console.log("--- Sums --: " + sums);
                return;
            }
            //LEFT
            this.calculateBranchSums(node.left, newRunningSum, sums);
            //RIGHT
            this.calculateBranchSums(node.right, newRunningSum, sums);

    }
    //---------------------------------------
    //Remove node
    remove(value) {
        if (!this.root) {
            return false;
        }
        let currentNode = this.root;
        //parent node
        let parentNode = null;
        //Check parent node left right
        while(currentNode){
            if(value < currentNode.value){
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if(value > currentNode.value){
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else if (currentNode.value === value) {
                //We have a match, get to work!
                //Option 1: No right child:
                if (currentNode.right === null) {
                    if (parentNode === null) {
                        this.root = currentNode.left;
                    } else {

                        //if parent > current value, make current left child a child of parent
                        if(currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.left;

                            //if parent < current value, make left child a right child of parent
                        } else if(currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.left;
                        }
                    }

                    //Option 2: Right child which doesnt have a left child
                } else if (currentNode.right.left === null) {
                    currentNode.right.left = currentNode.left;
                    if(parentNode === null) {
                        this.root = currentNode.right;
                    } else {

                        //if parent > current, make right child of the left the parent
                        if(currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.right;

                            //if parent < current, make right child a right child of the parent
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.right;
                        }
                    }

                    //Option 3: Right child that has a left child
                } else {

                    //find the Right child's left most child
                    let leftmost = currentNode.right.left;
                    let leftmostParent = currentNode.right;
                    while(leftmost.left !== null) {
                        leftmostParent = leftmost;
                        leftmost = leftmost.left;
                    }

                    //Parent's left subtree is now leftmost's right subtree
                    leftmostParent.left = leftmost.right;
                    leftmost.left = currentNode.left;
                    leftmost.right = currentNode.right;

                    if(parentNode === null) {
                        this.root = leftmost;
                    } else {
                        if(currentNode.value < parentNode.value) {
                            parentNode.left = leftmost;
                        } else if(currentNode.value > parentNode.value) {
                            parentNode.right = leftmost;
                        }
                    }
                }
                return true;
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


