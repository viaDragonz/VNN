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
        const embed = new Discord.RichEmbed()
        .setColor("#1C2045")
        .setTitle("Server information")
        .setThumbnail(msg.guild.iconURL)
        .addField("Server name", message.guild.name)
        .addField("Created at", message.guild.createdAt)
        .addField("You joined at", message.member.joinedAt)
        .addField("Total users", message.guild.memberCount)
        .setFooter("Don't let these informations distract you from the fact that Tyler missed out on that thing.")
        message.channel.sendEmbed(embed);
    }
    
    talkedRecently.add(message.author.id);
    setTimeout(() => {
        talkedRecently.delete(message.author.id);
    }, 10000);
}
