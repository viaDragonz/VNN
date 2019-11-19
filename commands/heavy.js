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
        const heavy = [
//            "Cry some more!",
//            "Vzzzzzt! Rahrahrahrah! Vrrrrr! Wahahahaaaaaa!",
//            "I am most dangerous man, in history of WORLD!",
//            "It is good day to be Giant Man!",
//            "Very good!",
//            "Very good, very VERY good!",
//            "Who send all these babies to fight!?",
//            "What sick man sends babies to fight me?",
//            "I am Heavy Weapons Guy, and this is my new weapon",
//            "Yes. I like this new weapon.",
//            "New weapon is good!",
//            "New gun is unfair to tiny baby enemies.",
//            "New weapon!",
//            "I have new weapon!",
//            "All will fear my giant new gun.",
//            "I have new way to kill cowards.",
//            "I'm coming for you!",
//            "Keep crying, baby!",
//            "All of you are babies!",
//            "Cry some more!",
//            "I have plan for you: more pain!",
//            "I have squashed you like bug!",
//            "Hide coward! I will find you.",
//            "Run home to momma!",
//            "You cannot hide, coward.",
//            "Go ahead and cry, baby.",
//            "You are no match for me!",
//            "I promise you pain without end.",
            "The command has been moved to **.tf2quote**"
        ];
        message.channel.send(`${heavy[Math.floor(Math.random() * heavy.length)]}`)
        talkedRecently.add(message.author.id);
        setTimeout(() => {
            talkedRecently.delete(message.author.id);
        }, 10000);
    }
}
