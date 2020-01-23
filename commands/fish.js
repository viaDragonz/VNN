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
        const fish = [
            "Fish? Nope.",
            "Fish? No.",
            "Fish? Maybe next time.",
            "No signals of fish.",
            "Fish? Try again.",
            "ERROR 404 - FISH WAS NOT FOUND IN THIS DIRECTORY",
            "This is what you get for asking for a fish command!",
            "Where are the fish?! Not here!!",
            "Fiiiiissssshhhhh. Fish fish fish. FIIIISHHHH.",
            "Fish be fish is fish be? No. This must be fake"
        ];
        message.channel.send(`${fish[Math.floor(Math.random() * fish.length)]}`)
        talkedRecently.add(message.author.id);
        setTimeout(() => {
            talkedRecently.delete(message.author.id);
        }, 10000);
    }
}
