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
        .setColor("#FFA200")
        .setAuthor(message.author.username)
        .setTitle("Your Information")
        .setThumbnail(message.author.avatarURL)
        .addField("Username", `${message.author.username}#${message.author.discriminator}`)
        .addField("ID", message.author.id)
        .addField("Created At", message.author.createdAt)
        .addField("Joined At", message.member.joinedAt)
        .addField("Is this user a bot?", message.author.bot)
        .setFooter(`Don't let this information distract you from the fact that Tyler missed out on that thing`, "https://i.imgur.com/LYnOpJE.png")
        message.channel.sendEmbed(embed);
    }
    
    talkedRecently.add(message.author.id);
    setTimeout(() => {
        talkedRecently.delete(message.author.id);
    }, 10000);
}
