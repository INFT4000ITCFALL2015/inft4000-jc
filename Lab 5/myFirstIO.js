/**
 * Created by inet2005 on 11/19/15.
 */
var fs = require('fs');

file = fs.readFileSync(process.argv[2],'utf8');

console.log(file.split('\n').length - 1);