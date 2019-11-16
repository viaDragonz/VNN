const config = require("../config.json");
const Sentry = require('@sentry/node');
Sentry.init({
    dsn: `${config.dsn}`
});

const talkedRecently = new Set();


exports.run = (client, message, args) => {
    if (talkedRecently.has(message.author.id)) {
        message.channel.send("Wait 10 seconds before trying this again. - " + message.author);
    } else {
        let coinFlip = ["Heads", "Tails"];
        let coinFlipCalc = Math.round(Math.random());
        message.channel.send("You flipped a coin and got " + coinFlip[coinFlipCalc] + "!")
        talkedRecently.add(message.author.id);
        setTimeout(() => {
            talkedRecently.delete(message.author.id);
        }, 10000);
    }
}