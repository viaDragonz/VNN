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
const talkedRecently = new Set();

exports.run = (client, message, args) => {
    if (talkedRecently.has(message.author.id)) {
        message.channel.send("Wait 10 seconds before trying this again. - " + message.author);
    } else {
        try {
            get('https://dog.ceo/api/breeds/image/random').then(res => {
                return message.channel.send("", {
                    file: res.body.message
                });
            });
        } catch (err) {
            return Sentry.captureException(err);;
        }
        talkedRecently.add(message.author.id);
        setTimeout(() => {
            talkedRecently.delete(message.author.id);
        }, 10000);
    }
}