const config = require("../config.json");
const Sentry = require('@sentry/node');
Sentry.init({
    dsn: `${config.dsn}`
});

const Discord = require('discord.js');
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
    if (message.mentions.members.size === 0) return message.reply("Please mention a user to ban");
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply("Im lacking the BAN_MEMBERS perms!");
    const banMember = message.mentions.members.first();
    banMember.ban(reason.join(" ")).then(member => {
        const tolog = {
            userid: `${member.user.id}`,
            modid: `${message.author.id}`,
            banid: `${uuidv4()}`,
            reason: `${reason.join(" ")}`,
            date: `${new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')}`
        }
        connection.query('INSERT INTO bans SET ?', tolog)
        client.channels.get("627705786667106304").send(`\*\*A USER HAS BEEN BANNED FROM THE DISCORD\*\* \n ${member.user.username} was banned by ${message.author.username} \n \*\*Reason\:\*\*\n ${reason.join(" ")}`)
        message.reply(`${member.user.username} was succesfully banned.`);
    });
};