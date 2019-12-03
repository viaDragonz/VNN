const config = require("../config.json");
const Sentry = require('@sentry/node');
Sentry.init({
    dsn: `${config.dsn}`
});

const {
    get
} = require("snekfetch");
const talkedRecently = new Set();

exports.run = (client, message, args) => {
    if (talkedRecently.has(message.author.id)) {
        message.channel.send("Wait 10 seconds before trying this again. - " + message.author);
    } else {
        const heavy = [
            "The command has been moved to **.tf2quote**"
        ];
        message.channel.send(`${heavy[Math.floor(Math.random() * heavy.length)]}`)
        talkedRecently.add(message.author.id);
        setTimeout(() => {
            talkedRecently.delete(message.author.id);
        }, 10000);
    }
}
