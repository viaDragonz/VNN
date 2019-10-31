const fs = require('fs');
const http = require('http');
var request = require('request');
const {
    get
} = require("snekfetch");
const express = require('express');
json = require('express-json');
const app = express()
const mysql = require('mysql');
const config = require("../config.json");
const Sentry = require('@sentry/node');
Sentry.init({
    dsn: `${config.dsn}`
});
const connection = mysql.createConnection({
    host: '192.168.1.218',
    port: '3306',
    user: 'root',
    password: `${config.dbpassword}`,
    database: 'modbot',
    charset: 'utf8mb4'
})

app.use(Sentry.Handlers.requestHandler());

app.get('/info', function (req, res) {
    res.send(`VNN's Bot API API`)
});

app.get('/bans', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    connection.query('SELECT * FROM bans WHERE userid = ? ', [req.query.userid], function (err, rows, result) {
        if (req.query.userid === ``) {
            res.send(`[{"success":"false","error":"no userid provided","errorcode":"1100"}]`)
        } else {
            if (!rows.length) {
                res.send(`[{"success":"false","error":"no bans","errorcode":"1300"}]`)
            } else {
                res.send(`[{"success": "true","userid":"${rows[0].userid}","modid":"${rows[0].modid}","banid":"${rows[0].banid}","reason":"${rows[0].reason}","date":"${rows[0].date}"}]`)
            }
        }
    });
});

app.get('/warns', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    connection.query('SELECT * FROM warnings WHERE userid = ?', [req.query.userid], function (err, rows, result) {
        if (req.query.userid === ``) {
            res.send(`[{"success":"false","error":"no userid provided","errorcode":"1100"}]`)
        } else {
            if (!rows.length) {
                res.send(`[{"success":"false","error":"no warns","errorcode":"1300"}]`)
            } else {
                res.send(`[{"userid":"${rows[0].userid}","modid":"${rows[0].modid}","warningid":"${rows[0].warningid}","reason":"${rows[0].reason}","date":"${rows[0].date}"}]`)
            }
        }
    });
});

app.get('/kicks', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    connection.query('SELECT * FROM kicks WHERE userid = ?', [req.query.userid], function (err, rows, result) {
        if (req.query.userid === ``) {
            res.send(`[{"success":"false","error":"no userid provided","errorcode":"1100"}]`)
        } else {
            if (!rows.length) {
                res.send(`[{"success":"false","error":"no kicks","errorcode":"1300"}]`)
            } else {
                res.send(`[{"success":"true","userid":"${rows[0].userid}","modid":"${rows[0].modid}","kickid":"${rows[0].kickid}","reason":"${rows[0].reason}","date":"${rows[0].date}"}]`)
            }
        }
    });
});

app.get('/mutes', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    connection.query('SELECT * FROM mutes WHERE userid = ?', [req.query.userid], function (err, rows, result) {
        if (req.query.userid === ``) {
            res.send(`[{"success":"false","error":"no userid provided","errorcode":"1100"}]`)
        } else {
            if (!rows.length) {
                res.send(`[{"success":"false","error":"no mutes","errorcode":"1300"}]`)
            } else {
                res.send(`[{"success":"true","userid":"${rows[0].userid}","modid":"${rows[0].modid}","muteid":"${rows[0].muteid}","reason":"${rows[0].reason}","date":"${rows[0].date}"}]`)
            }
        }
    });
});

app.get('/status', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'application/json');

    request('http://192.168.1.218:1414/status', function (error, response, body) {
        console.log(body)
        if (error) {
            res.send(`[{ "status":"offline","color":"red" }]`)
        } else {
            if (body === `[{ "success":"true","status":"online","statuscode":"3400" }]`) {
                res.send(`[{ "status":"online","color":"green" }]`)
            }
        }
    });
});

app.use(Sentry.Handlers.errorHandler());

app.use(function onError(err, req, res, next) {
    res.statusCode = 500;
    res.end(res.sentry + "\n");
});

app.listen(config.apiPort);