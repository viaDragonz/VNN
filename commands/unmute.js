const config = require("../config.json");
const Sentry = require('@sentry/node');
Sentry.init({
    dsn: `${config.dsn}`
});


const uuidv4 = require('uuid/v4');
exports.run = (client, message, [mention, ...reason]) => {
    const modRole = message.guild.roles.find(role => role.name === "Mods");
    const mutedRole = message.guild.roles.find(role => role.name === "Muted");
    const newsNetworksRole = message.guild.roles.find(role => role.name === "News Networks");
    if (!modRole) return console.log("The Mods role does not exist");
    if (!message.member.roles.has(modRole.id)) return message.reply("you're not a mod! You can't use this command!");
    if (message.mentions.members.size === 0) return message.reply("please, mention a user to mute.");
    //  if (!message.guild.me.hasPermission("BAN_MEMBERS"))
    //    return message.reply("Im lacking the MANAGE_ROLES perms!");
    //      if (poop) return poo
    const muteMember = message.mentions.members.first();
    muteMember.addRole(newsNetworksRole);
    muteMember.removeRole(mutedRole).then(member => {
        message.reply(`${member.user.username} was succesfully unmuted.`);
    });
};