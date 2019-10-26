const config = require("../config.json");
const Sentry = require('@sentry/node');
Sentry.init({
    dsn: `${config.dsn}`
});
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
    res.send(`VNN's Bot API API`)
});

app.get('/bans', function(req, res) {
    connection.query('SELECT * FROM bans WHERE userid = ? ', [req.query.userid], function(err, rows, result) {
        if (req.query.userid === ``) {
            res.send(`[{"success":"false","error":"no userid provided"},"errorcode":"1100"}]`)
        } else {
            if (!rows.length) {
                res.send(`[{"success":"false","error":"no bans"},"errorcode":"1300"}]`)
            } else {
                res.send(`[{"userid":"${rows[0].userid}","modid":"${rows[0].modid}","banid":"${rows[0].banid}","reason":"${rows[0].reason}","date":"${rows[0].date}"}]`)
            }
        }
    });
});

app.get('/warns', function(req, res) {
    connection.query('SELECT * FROM warnings WHERE userid = ?', [req.query.userid], function(err, rows, result) {
        if (req.query.userid === ``) {
            res.send(`[{"success":"false","error":"no userid provided"},"errorcode":"1100"}]`)
        } else {
            if (!rows.length) {
                res.send(`[{"success":"false","error":"no warns"},"errorcode":"1300"}]`)
            } else {
                res.send(`[{"userid":"${rows[0].userid}","modid":"${rows[0].modid}","warningid":"${rows[0].warningid}","reason":"${rows[0].reason}","date":"${rows[0].date}"}]`)
            }
        }
    });
});

app.get('/kicks', function(req, res) {
    connection.query('SELECT * FROM kicks WHERE userid = ?', [req.query.userid], function(err, rows, result) {
        if (req.query.userid === ``) {
            res.send(`[{"success":"false","error":"no userid provided"},"errorcode":"1100"}]`)
        } else {
            if (!rows.length) {
                res.send(`[{"success":"false","error":"no kicks"},"errorcode":"1300"}]`)
            } else {
                res.send(`[{"userid":"${rows[0].userid}","modid":"${rows[0].modid}","kickid":"${rows[0].kickid}","reason":"${rows[0].reason}","date":"${rows[0].date}"}]`)
            }
        }
    });
});

app.get('/mutes', function(req, res) {
    connection.query('SELECT * FROM mutes WHERE userid = ?', [req.query.userid], function(err, rows, result) {
        if (req.query.userid === ``) {
            res.send(`[{"success":"false","error":"no userid provided"},"errorcode":"1100"}]`)
        } else {
            if (!rows.length) {
                res.send(`[{"success":"false","error":"no mutes"},"errorcode":"1300"}]`)
            } else {
                res.send(`[{"userid":"${rows[0].userid}","modid":"${rows[0].modid}","muteid":"${rows[0].muteid}","reason":"${rows[0].reason}","date":"${rows[0].date}"}]`)
            }
        }
    });
});


app.listen(config.apiPort);