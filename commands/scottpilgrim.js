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
        message.channel.send("Wait 15 seconds before trying this again. - " + message.author);
    } else {
        const scottpilgrim = [
            "I do not want to be here. At all.",
            "WALLACE: 'Heyyyy!' CAPTION: WALLACE WELLS, DRUNK HOMOSEXUAL",
            "Guess who's druuunk?",
            "That was a test, Jimmy. You passed.",
            "Watch out! It's that one guy!",
            "Scott. Evil Ex. Fight.",
            "I didn't make up the gay rulebook. If you have a problem with it, take it up with Liberace's Ghost.",
            "Yes, I'm stalking him later.",
            "Ask them how it feels to always get his sloppy seconds!",
            "WALLACE: 'If you want something bad, you have to fight for it. Step up your game. Break out the L-word.' SCOTT: 'Lesbian?'",
            "Why are your pants off? Stop taking your pants off!",
            "**BREAD MAKES YOU FAT?!**",
            "Tell it to the cleaning lady on Monday.",
            "He punched the highlights outta her hair!",
            "RAMONA: 'I think you're the nicest guy I've ever dated.' SCOTT: 'That's kind of sad.'",
            "A tiny robot is kicking this guy's ass, if anyone wants to watch.",
            "Oh my god, I'm hallucinating.",
            "We were just on stage for the sound check and the sound guy hated us!",
            "Chicken isn't vegan?",
            "TODD: 'Gelato isn't vegan?' VEGAN POLICE: 'It's milk and eggs, bitch.'",
            "KICK HER IN THE BALLS!",
            "SCOTT: I'm not sure I can hit a girl. They're soft!",
            "Okay, I'm getting tingles.",
            "Can you do a... thingy... on that rail?",
            "It's called a *grind*, bro."
        ];
        message.channel.send(`${scottpilgrim[Math.floor(Math.random() * scottpilgrim.length)]}`)
        talkedRecently.add(message.author.id);
        setTimeout(() => {
            talkedRecently.delete(message.author.id);
        }, 15000);
    }
}
