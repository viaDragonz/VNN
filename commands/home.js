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
        message.channel.send("Wait 10 seconds before trying this again. - " + message.author);
    } else {
        const home = [
            "https://storage.ratelimited.me/vnn/home/12_A_DAY.mp3",
            "https://storage.ratelimited.me/vnn/home/ALMONDS.mp3",
            "https://storage.ratelimited.me/vnn/home/ARTHUR.mp3",
            "https://storage.ratelimited.me/vnn/home/BEACH.mp3",
            "https://storage.ratelimited.me/vnn/home/BREAKFAST.mp3",
            "https://storage.ratelimited.me/vnn/home/Background_Radiation.mp3",
            "https://storage.ratelimited.me/vnn/home/CMYK.mp3",
            "https://storage.ratelimited.me/vnn/home/Chemical_Burns.mp3",
            "https://storage.ratelimited.me/vnn/home/Drawing_The_Blinds.mp3",
            "https://storage.ratelimited.me/vnn/home/FIT_TOGETHER.mp3",
            "https://storage.ratelimited.me/vnn/home/FRYING_ON_THE_HOT_CONCRETE.mp3",
            "https://storage.ratelimited.me/vnn/home/GLOCKENSPIEL.mp3",
            "https://storage.ratelimited.me/vnn/home/Glass.mp3",
            "https://storage.ratelimited.me/vnn/home/HIGH_FIVE.mp3",
            "https://storage.ratelimited.me/vnn/home/I_DONT_REMEMBER.mp3",
            "https://storage.ratelimited.me/vnn/home/I_GOT_MAD.mp3",
            "https://storage.ratelimited.me/vnn/home/Intervals_Open_Spectrum.mp3",
            "https://storage.ratelimited.me/vnn/home/LUNCHABLE.mp3",
            "https://storage.ratelimited.me/vnn/home/Left_Behind.mp3",
            "https://storage.ratelimited.me/vnn/home/MILITIA.mp3",
            "https://storage.ratelimited.me/vnn/home/MUMBLING.mp3",
            "https://storage.ratelimited.me/vnn/home/Manifest_Mirage.mp3",
            "https://storage.ratelimited.me/vnn/home/Mozerrella_Sticks.mp3",
            "https://storage.ratelimited.me/vnn/home/PEE_IS_STORED_IN_THE_BALLS.mp3",
            "https://storage.ratelimited.me/vnn/home/PORN_PRODUCTION_COMPANIES.mp3",
            "https://storage.ratelimited.me/vnn/home/RESONANCE_2_SLOW_EDIT.mp3",
            "https://storage.ratelimited.me/vnn/home/SCOTTIE_PIPPEN.mp3",
            "https://storage.ratelimited.me/vnn/home/SHUSH.mp3",
            "https://storage.ratelimited.me/vnn/home/SM57.mp3",
            "https://storage.ratelimited.me/vnn/home/SOLAR_ECLIPSE.mp3",
            "https://storage.ratelimited.me/vnn/home/SURFBOARD.mp3",
            "https://storage.ratelimited.me/vnn/home/TRUST.mp3",
            "https://storage.ratelimited.me/vnn/home/VOCODER.mp3",
            "https://storage.ratelimited.me/vnn/home/WIZARDS.mp3",
            "https://storage.ratelimited.me/vnn/home/YOU_CANT_SEE.mp3" 
        ];
        message.channel.send("", {
            file: `${home[Math.floor(Math.random() * home.length)]}`
        });
        talkedRecently.add(message.author.id);
        setTimeout(() => {
            talkedRecently.delete(message.author.id);
        }, 10000);
    }
}
