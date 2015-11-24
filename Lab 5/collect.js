var http = require('http');
var concat = require('concat-stream');

http.get(process.argv[2], function(response){
    response.setEncoding('utf-8');
    response.on('error', function(err){
        return console.error(err);
    });
    var concatBuffer = concat(function(buffer){
        console.log(buffer.length);
        console.log(buffer);
    });
    response.pipe(concatBuffer);
});