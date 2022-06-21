'use strict';
const {BinaryTree} = require('./src/BinaryTree.js');
//const {traverse} = require("./src/BinaryTree");
//-------- Full Binary Tree ------------
//                1
//             /     \
//           2        3
//         /  \     /   \
//        4    5   6    7
//       /      \
//      8       9
//---------------------------------------
//Tree Object
const tree = new BinaryTree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);
tree.insert(6);
tree.insert(7);
tree.insert(8);
tree.insert(9);

//Branch Sums
tree.sumBranches();
// //convert Tree to JSON format - Call traverse function
// const JSONFormat = JSON.stringify(traverse(tree.root));
// console.log(JSONFormat);
