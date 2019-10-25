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
		get('https://aws.random.cat/meow').then(res => {
			return message.channel.send("", {
				file: res.body.file
			});
		});
	} catch (err) {
		return Sentry.captureException(err);
	}
}