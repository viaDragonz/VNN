const config = require("../config.json");
const Sentry = require('@sentry/node');
Sentry.init({
	dsn: `${config.dsn}`
});


module.exports = (client) => {
	console.log(`Ready to serve in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
}