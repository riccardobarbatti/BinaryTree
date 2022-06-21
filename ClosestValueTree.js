'use strict';
const {BinaryTree} = require('./src/BinaryTree.js');
//const {traverse} = require("./src/BinaryTree");
//-------- Full Binary Tree ------------
//               10
//            /     \
//           5      15
//         /  \    /  \
//        2    5  13  22
//       /         \
//      1          14
//---------------------------------------
//Tree Object
const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(2);
tree.insert(5);
tree.insert(1);
tree.insert(15);
tree.insert(13);
tree.insert(14);
tree.insert(22);

//Search node findClosestValue
tree.findClosestValue(9);

// //convert Tree to JSON format - Call traverse function
// const JSONFormat = JSON.stringify(traverse(tree.root));
// console.log(JSONFormat);
