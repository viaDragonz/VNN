const config = require("../config.json");
const Sentry = require('@sentry/node');
Sentry.init({
    dsn: `${config.dsn}`
});
const talkedRecently = new Set();


exports.run = (client, message, args) => {
    if (talkedRecently.has(message.author.id)) {
        message.channel.send("Wait 15 seconds before trying this again. - " + message.author);
    } else {
        message.channel.send(":ping_pong: <\:vnnCat2\:468562233174261766>")
        talkedRecently.add(message.author.id);
        setTimeout(() => {
            talkedRecently.delete(message.author.id);
        }, 15000);
    }
}