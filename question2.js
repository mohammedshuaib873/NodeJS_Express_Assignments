//Generally the module name and the variable name both are same
var fs = require('fs');

// fs.readFileSync
// Sync' part allows the node to read the file synchronusly meaning all file is read first before going through other code. 
var sample = fs.readFileSync('test.txt','utf8');
// utf8 is encoding format| you can find clean explanation here at http://stackoverflow.com/a/15128103/5388823 
console.log(sample);

