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
		get('https://dog.ceo/api/breeds/image/random').then(res => {
			return message.channel.send("", {
				file: res.body.message
			});
		});
	} catch (err) {
		return Sentry.captureException(err);;
	}
}