/*var fs = require('fs');
fs.writeFileSync('testFS.txt','Testing the file system');

console.log(fs.readFileSync('testFS.txt').toString());*/

var path = require('path');

var testFilePath = '/data/srv//nodejssandbox/testFS.txt';
console.log(path.normalize(testFilePath));
console.log(path.dirname(testFilePath));
console.log(path.basename(testFilePath));
console.log(path.extname(testFilePath));

console.log(__dirname);
console.log(__filename);