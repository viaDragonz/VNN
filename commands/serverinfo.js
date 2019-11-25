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
        const embed = new client.RichEmbed()
        .setColor("#1C2045")
        .setTitle("Server Information")
        .setThumbnail(message.guild.iconURL)
        .addField("Server Name", message.guild.name)
        .addField("Created On", message.guild.createdAt)
        .addField("You Joined On", message.member.joinedAt)
        .addField("Total Users", message.guild.memberCount)
        .setFooter(`Don't let this information distract you from the fact that Tyler missed out on a free... um... *thing*.`)
        message.channel.sendEmbed(embed);
    }
    
    talkedRecently.add(message.author.id);
    setTimeout(() => {
        talkedRecently.delete(message.author.id);
    }, 10000);
}
