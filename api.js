var express = require('express');
var app = express();
const mysql = require('mysql');
const connection = mysql.createConnection({
	host: 'localhost',
	port: '3306',
	user: 'root',
	password: `${config.dbpassword}`,
	database: 'modbot',
	charset: 'utf8mb4'
})

app.get('/info', function(req, res) {
	res.send(`VNN's infractions API`)
});

app.get('/bans', function(req, res) {

});

app.get('/warns', function(req, res) {

});

app.get('/kicks', function(req, res) {

});

app.get('/mutes', function(req, res) {

});


app.listen(6969);