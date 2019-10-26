const config = require("../config.json");
const Sentry = require('@sentry/node');
Sentry.init({
    dsn: `${config.dsn}`
});

exports.run = (client, message, [mention, ...reason]) => {
    const ageMember = message.mentions.members.first();
    if (message.mentions.members.size === 0) {
        message.reply(`Your account was created at ${message.author.createdAt}. (${message.author.createdTimestamp})`)
    } else {
        message.channel.send(`${ageMember.user.username}'s account was created at ${ageMember.user.createdAt}. (${ageMember.user.createdTimestamp})`)
    }
}