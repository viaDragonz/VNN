const config = require("../config.json");
const Sentry = require('@sentry/node');
Sentry.init({
    dsn: `${config.dsn}`
});


exports.run = (client, message, args) => {
    let dice = Math.floor(Math.random() * 6) + 1
    message.channel.send("The dice has rolled a " + dice + "!")
}