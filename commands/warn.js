const config = require("../config.json");
const Sentry = require('@sentry/node');
Sentry.init({
	dsn: `${config.dsn}`
});


const uuidv4 = require('uuid/v4');
const mysql = require('mysql');
const connection = mysql.createConnection({
	host: 'localhost',
	port: '3306',
	user: 'root',
	password: `${config.dbpassword}`,
	database: 'modbot',
	charset: 'utf8mb4'
})
exports.run = (client, message, [mention, ...reason]) => {
	const modRole = message.guild.roles.find(role => role.name === "Mods");
	if (!modRole) return console.log("The Mods role does not exist");
	if (!message.member.roles.has(modRole.id)) return message.reply("You can't use this command.");
	if (message.mentions.members.size === 0) return message.reply("Please mention a user to warn");
	const member = message.mentions.members.first();
	const tolog = {
		userid: `${member.user.id}`,
		modid: `${message.author.id}`,
		warningid: `${uuidv4()}`,
		reason: `${reason.join(" ")}`,
		date: `${new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')}`
	}
	connection.query('INSERT INTO warnings SET ?', tolog)
	client.channels.get("627705786667106304").send(`\*\*A USER HAS BEEN WARNED \*\* \n ${member.user.username} was warned by ${message.author.username} \n \*\*Reason\:\*\*\n ${reason.join(" ")}`)
	message.channel.send(`<@${member.user.id}> has been warned!`)
};