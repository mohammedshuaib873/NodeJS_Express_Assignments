const dirTree = require("directory-tree");
const tree = dirTree('./files/');
// console.log(tree);
const directory = './files/';
const fs = require('fs');

fs.readdir(directory,(err,files) => {
    files.forEach(files => {
        console.log(files);
    });
});