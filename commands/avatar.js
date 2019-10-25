const config = require("../config.json");
const Sentry = require('@sentry/node');
Sentry.init({
	dsn: `${config.dsn}`
});

exports.run = (client, message, [mention, ...reason]) => {
	const avatarMember = message.mentions.members.first();
	if (message.mentions.members.size === 0) {
		message.reply(message.author.avatarURL)
	} else {
		message.channel.send(avatarMember.user.avatarURL)
	}
}