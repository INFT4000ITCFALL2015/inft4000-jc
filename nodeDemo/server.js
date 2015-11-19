/**
 * Created by inet2005 on 11/17/15.
 */
var http = require('http');
var mysql      = require('mysql');
var sqlResults;

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'inet2005',
    database : 'sakila'
});

connection.connect();

var sql = "SELECT * FROM ?? WHERE ?? = ?";
var inserts = ['film', 'film_id', 5];
sql = mysql.format(sql, inserts);

connection.query(sql, function(err, results) {
    if (err) throw err;
    sqlResults= results;

});

connection.end();

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(JSON.stringify(sqlResults));
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');


