var list = process.argv;
var path = list[2];
var fs = require('fs');
// console.log(list[1]);
// console.log('-------------------');
// console.log(path);
// console.log(fs);
var str = fs.readFileSync(path);
console.log(str.toString().split('\n').length-1 );
