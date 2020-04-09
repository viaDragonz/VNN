const express = require('express');
json = require('express-json');
const app = express()
    const config = require("./config.json");
const Sentry = require('@sentry/node');
Sentry.init({
    dsn: `${config.dsn}`
});
const {
    Client,
        RichEmbed,
    WebhookClient
    } = require('discord.js');
            const Enmap = require("enmap");
    const fs = require("fs");
const client = new Client();
client.config = config;
client.RichEmbed = RichEmbed;
fs.readdir("./events/", (err, files) => {
    if (err) return Sentry.captureException(err);
                files.forEach(file => {
        const event = require(`./events/${file}`);
                 let eventName = file.split(".")[0];
        client.on(eventName, event.bind(null, client));
     });
            });

client.commands = new Enmap();
    fs.readdir("./commands/", (err, files) => {
    if (err) return Sentry.captureException(err);
       files.forEach(file => {
        if (!file.endsWith(".js")) return;
                  let props = require(`./commands/${file}`);
              let commandName = file.split(".")[0];
        console.log(`Attempting to load command ${commandName}`);
                   client.commands.set(commandName, props);
    })
});

app.get('/status', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(`[{ "success":"true","status":"online","statuscode":"3400" }]`)
});

app.listen(config.statuscheck_port);

client.login(config.token);
