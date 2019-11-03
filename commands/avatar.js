const config = require("../config.json");
const Sentry = require('@sentry/node');
Sentry.init({
    dsn: `${config.dsn}`
});

const talkedRecently = new Set();

exports.run = (client, message, [mention, ...reason]) => {
    if (talkedRecently.has(message.author.id)) {
        message.channel.send("Wait 10 seconds before trying this again. - " + message.author);
    } else {
        const avatarMember = message.mentions.members.first();
        if (message.mentions.members.size === 0) {
            message.reply(message.author.avatarURL)
        } else {
            message.channel.send(avatarMember.user.avatarURL)
        }
        talkedRecently.add(message.author.id);
        setTimeout(() => {
            talkedRecently.delete(message.author.id);
        }, 10000);
    }
}