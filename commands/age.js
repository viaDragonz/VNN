const config = require("../config.json");
const Sentry = require('@sentry/node');
Sentry.init({
    dsn: `${config.dsn}`
});

const talkedRecently = new Set();


exports.run = (client, message, [mention, ...reason]) => {
    if (talkedRecently.has(message.author.id)) {
        message.channel.send("Wait 15 seconds before trying this again. - " + message.author);
    } else {
        const ageMember = message.mentions.members.first();
        if (message.mentions.members.size === 0) {
            message.reply(`Your account was created at ${message.author.createdAt}. (${message.author.createdTimestamp})`)
        } else {
            message.channel.send(`${ageMember.user.username}'s account was created at ${ageMember.user.createdAt}. (${ageMember.user.createdTimestamp})`)
        }

        talkedRecently.add(message.author.id);
        setTimeout(() => {
            talkedRecently.delete(message.author.id);
        }, 15000);
    }
}