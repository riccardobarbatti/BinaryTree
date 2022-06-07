'use strict';
const {BinaryTree} = require('./src/BinaryTree.js');
const {traverse} = require("./src/BinaryTree");
//-------- Sample Binary Tree  ------
//               1
//            /     \
//           2       3
//         /   \   /   \
//        4     5 6     7
//      /   \
//     8     9
//------------------------------------
//Tree Object
const tree = new BinaryTree();
//first tree classic
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);
tree.insert(6);
tree.insert(7);
tree.insert(8);
tree.insert(9);
tree.insert(10);
tree.insert(11);
//second tree
// tree.insert(9);
// tree.insert(4);
// tree.insert(6);
// tree.insert(20);
// tree.insert(170);
// tree.insert(15);
// tree.insert(1);

//convert Tree to JSON format - Call traverse function
const JSONFormat = JSON.stringify(traverse(tree.root));
console.log(JSONFormat);


