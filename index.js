'use strict';
const {BinaryTree} = require('./src/BinaryTree.js');
const {traverse} = require("./src/BinaryTree");
//-------- Full Binary Tree ------------
//               10
//            /     \
//           4      20
//         /  \    /  \
//        2    6  15  80
//---------------------------------------
//Tree Object
const tree = new BinaryTree();
tree.insert(10);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(80);
tree.insert(15);
tree.insert(2);
//Seach node lookUp
//tree.lookup(20);
//Delete Node
tree.remove(20);

//convert Tree to JSON format - Call traverse function
const JSONFormat = JSON.stringify(traverse(tree.root));
console.log(JSONFormat);


