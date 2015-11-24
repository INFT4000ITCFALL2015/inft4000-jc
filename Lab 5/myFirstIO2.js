/**
 * Created by inet2005 on 11/19/15.
 */
var fs = require('fs');
var file = process.argv[2];
fs.readFile(file, function (err, contents) {
    var lines = contents.toString().split('\n').length - 1;
    console.log(lines)
});