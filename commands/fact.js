const config = require("../config.json");
const Sentry = require('@sentry/node');
Sentry.init({
    dsn: `${config.dsn}`
});
const fs = require('fs');
const http = require('http');
var request = require('request');
const {
    get
} = require("snekfetch");
exports.run = (client, message, args) => {
    try {
        get('https://uselessfacts.jsph.pl/random.json').then(res => {
            return message.channel.send(res.body.text);
        });
    } catch (err) {
        return Sentry.captureException(err);
    }
}