const {
	Client,
	RichEmbed,
	WebhookClient
} = require('discord.js');
const Enmap = require("enmap");
const fs = require("fs");
//const webhook = new WebhookClient(`635656739714236426`, `l6nHdXB_fscDDGobb4a38aaOcEK0J2ns-i9Mem6lPRCQILd245z7QXZWz_JvOh2P4pg4`);
//The webhook has been disabled.
const client = new Client();
const config = require("./config.json");
// We also need to make sure we're attaching the config to the CLIENT so it's accessible everywhere!
client.config = config;
//client.webhook = webhook;
fs.readdir("./events/", (err, files) => {
	if (err) return console.error(err);
	files.forEach(file => {
		const event = require(`./events/${file}`);
		let eventName = file.split(".")[0];
		client.on(eventName, event.bind(null, client));
	});
});
client.commands = new Enmap();
fs.readdir("./commands/", (err, files) => {
	if (err) return console.error(err);
	files.forEach(file => {
		if (!file.endsWith(".js")) return;
		let props = require(`./commands/${file}`);
		let commandName = file.split(".")[0];
		console.log(`Attempting to load command ${commandName}`);
		client.commands.set(commandName, props);
	});
});
client.login(config.token);