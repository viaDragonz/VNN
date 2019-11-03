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
        const tf2merc = [
            //Heavy Quotes.
            "Cry some more!",
            "Vzzzzzt! Rahrahrahrah! Vrrrrr! Wahahahaaaaaa!",
            "I am most dangerous man, in history of WORLD!",
            "It is good day to be Giant Man!",
            "Very good!",
            "Very good, very VERY good!",
            "Who send all these babies to fight!?",
            "What sick man sends babies to fight me?",
            "I am Heavy Weapons Guy, and this is my new weapon",
            "Yes. I like this new weapon.",
            "New weapon is good!",
            "New gun is unfair to tiny baby enemies.",
            "New weapon!",
            "I have new weapon!",
            "All will fear my giant new gun.",
            "I have new way to kill cowards.",
            "I'm coming for you!",
            "Keep crying, baby!",
            "All of you are babies!",
            "Cry some more!",
            "I have plan for you: more pain!",
            "I have squashed you like bug!",
            "Hide coward! I will find you.",
            "Run home to momma!",
            "You cannot hide, coward.",
            "Go ahead and cry, baby.",
            "You are no match for me!",
            "I promise you pain without end.",
            "WAAAAH!",
            //Scout Quotes
            "You got *owned*!",
            "Say goodbye to your kneecaps, chucklehead!",
            "I'm battin' a thousand!",
            "*Boom!* I'm back, dummy!",
            "Let's waste 'em.",
            "Oh I'm burnin', I'm-I'm burnin'!",
            //Soldier Quotes
            "Screamin' Eagles!",
            "MAGGOTS!",
            "Dominated, hippie! Get a job!",
            "I just tore you a new chimney, Smokey Joe.",
            "Stars and Stripes beats Hammer and Sickle! Look it up.",
            "Gotcha, cruton.",
            //Spy Quotes
            "Well, this was a disappointment!",
            "You got blood on my suit.",
            "Congratulations! You're a faliure.",
            "Well, off to visit your mother!",
            "Here lies Scout. He ran fast and died a virgin.",
            "Gentlemen.",
            //Sniper Quotes
            "Wuss.",
            "Stupid bloody Spies.",
            "How many times have you died? I'm actually getting impressed.",
            "I'll be honest with ya. My parents do *not* care for it.",
            "You've been killed by the best, cyclops!",
            "Put Mum on the phone...",
            "You're making this so easy, I'm actually getting worse!",
            //Pyro Quotes
            "MMPH!",
            "MMPH MMPH!",
            "MMPHMMPH!",
            "MMPH MMPH MMPH!",
            "MMPH MMPH MMPH MMPH!",
            //Engineer Quotes
            //Medic Quotes
            //Demo Quotes
        ];
        message.channel.send(`${tf2merc[Math.floor(Math.random() * tf2merc.length)]}`)
        talkedRecently.add(message.author.id);
        setTimeout(() => {
            talkedRecently.delete(message.author.id);
        }, 10000);
    }
}