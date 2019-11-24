const config = require("../config.json");
const Sentry = require('@sentry/node');
Sentry.init({
    dsn: `${config.dsn}`
});


const talkedRecently = new Set();

exports.run = (client, message, args) => {
    if (talkedRecently.has(message.author.id)) {
        message.channel.send("Wait 10 seconds before trying this again. - " + message.author);
    } else {
<<<<<<< HEAD

=======
        message.reply(`Almost! It's coming out March 2020, check out the trailer and pre-order the game here: \n https://store.steampowered.com/app/546560/HalfLife_Alyx/`)
>>>>>>> parent of 290f10e... PIN PIN MUST PIN | Formatting
        talkedRecently.add(message.author.id);
        setTimeout(() => {
            talkedRecently.delete(message.author.id);
        }, 10000);
    }
}
