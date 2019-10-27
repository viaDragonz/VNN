const config = require("../config.json");
const Sentry = require('@sentry/node');
Sentry.init({
    dsn: `${config.dsn}`
});



const fs = require('fs');
const http = require('http');
var request = require('request');
const {
    get
} = require("snekfetch");
const talkedRecently = new Set();

exports.run = (client, message, args) => {
    if (talkedRecently.has(message.author.id)) {
        message.channel.send("Wait 15 seconds before trying this again. - " + message.author);
    } else {
        const spiderman = [
            "Who am I? You sure you want to know?",
            "You're trash, Brock. Your picture's a fake!",
            "Pizza time!",
            "I'm not an empty seat anymore!",
            "You're out, Norman...",
            "Harry tells me you're quite the science whiz. You know, I'm something of a scientist myself.",
            "**Good riddance.**",
            "I don't want to fight you, Flash.",
            "You're late. I'm not paying for those.",
            "WHOAH!! He stole that guy's PIZZAS!",
            "The story of my life is not for the faint of heart.",
            "NORMAN: Your parents must be proud. PETER: I live with my aunt and uncle, they are proud.",
            "IMPRESSIVE!",
            "HOW? TELL ME HOW!!",
            "You knew this was coming, Pete!",
            "Day by day, he gazed upon her. Day by day he *sighed* with passion.",
            "The next person who talks will fail this course. I kid you not.",
            "Computer salesman, computer engineer, computer analyst. My Lord, even the computers need analysts these days.",
            "I'm 68. I'm too old for computers, and besides, I have a family to provide for.",
            "Teenagers. Raging hormones. Heh, they never change.",
            "Kick his ass, man!",
            "GoOoOoO!",
            "Jesus, Parker. You are a freak.",
            "BONESAW IS READY!",
            "I GOT YOU FOR THREE MINUTES! THREE MINUTES OF *PLAYTIME*.",
            "That's a cute outfit. Did your husband give it to you?",
            "The ad said $3000!",
            "What about my uncle? Did you give him a chance? DID YOU? **ANSWER ME!**",
            "Nothing would please me more than to put Norman Osborn out of business.",
            "Tell that to my father. Raise him from the dead."
        ];
        message.channel.send("", {
            file: `${tyler[Math.floor(Math.random() * tyler.length)]}`
        });
        talkedRecently.add(message.author.id);
        setTimeout(() => {
            talkedRecently.delete(message.author.id);
        }, 15000);
    }
}