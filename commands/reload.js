const config = require("../config.json");
const Sentry = require('@sentry/node');
Sentry.init({
    dsn: `${config.dsn}`
});

exports.run = (client, message, args) => {
    const modRole = message.guild.roles.find(role => role.name === "Mods");
    if (!modRole) return console.log("The Mods role does not exist");
    if (!message.member.roles.has(modRole.id)) return message.reply("You can't use this command.");
    if (!args || args.length < 1) return message.reply("Must provide a command name to reload.");
    const commandName = args[0];
    // Check if the command exists and is valid
    if (!client.commands.has(commandName)) {
        return message.reply("That command does not exist");
    }
    // the path is relative to the *current folder*, so just ./filename.js
    delete require.cache[require.resolve(`./${commandName}.js`)];
    // We also need to delete and reload the command from the client.commands Enmap
    client.commands.delete(commandName);
    const props = require(`./${commandName}.js`);
    client.commands.set(commandName, props);
    message.reply(`The command ${commandName} has been reloaded`);
};
