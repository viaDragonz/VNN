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
            "Tell that to my father. Raise him from the dead.",
            "With great power, comes great responsibility.",
            "I missed him a lot today.",
            "Who is Spider-Man? He's a criminal, that's who he is. A vigilante, a public menace. Why's he on my front page?",
            "JAMESON, YOU SLIME! WHO'S THE PHOTOGRAPHER WHO TAKES THE PICTURES OF SPIDER-MAN?",
            "I could squash you like a bug right now.",
            "I think I have a superhero stalker.",
            "Science Squid?",
            "I have ears like a cat, and eyes like a rodent.",
            "If promises were crackers, my daughter would be fat.",
            "Would you like a piece of chocolate cake?",
            "WAITRESS: How's the pie? HARRY: Mmm... so good...",
            "Sorry I'm late, it's a jungle out there. I had to beat an old lady with a stick to get these cranberries.",
            "JUST KEEP YOUR MOUTH SHUT ABOUT STUFF YOU DON'T UNDERSTAND!",
            "The cunning warrior attacks neither body nor mind.",
            "Those eyes! Those horrible, yellow eyes!",
            "Make him wish he were dead!",
            "Only a friend?",
            "That's all I have to give.",
            "The itsy-bitsy spider went up the water spout. Down came the Goblin, and took the spider out!",
            "I'm going to rectify certain inequities.", ,
            "This is why only fools are heroes.",
            "Misery, misery, misery. That's what you've chosen.",
            "I offered you friendship... and you spat in my face.",
            "You've spun your last web, Spider-Man.",
            "Had you not been so selfish, your little girlfriend's death would have been quick and painless.",
            "But now that you've really pissed me off... l'm gonna finish her nice and slow.",
            "M.J. and I... we're gonna have a hell of a time!",
            "I have a father. His name was Ben Parker.",
            "Godspeed, Spider-Man.",
            "I swear on my father's grave, Spider-Man will pay.",
            "Whatever life holds in store for me... I will never forget these words. 'With great power, comes great responsibility.' This is my gift. My curse. Who am I? I'm Spider-Man.",
            "What have you done... WHAT HAVE YOU DONE?",
            "I'm sorry, Mr. Aziz. There was a disturbance.",
            "Dogs catching frisbees? Pidgeons in the park? A couple of geezers playing chess?",
            "Boss!",
            "Not now.",
            "We got six minutes to deadline, Jonah. We need page one.",
            "I'd love to shoot you sometime.",
            "You got any with nuts?",
            "Oh, boy yeah.",
            "Go make me some!",
            "The power of the sun... In the palm of my hand.",
            "The river. Drown it.",
            "My Rosie's dead. My dream is dead. And these... things... should be at the bottom of the river. Along with me.",
            "Before we start, did anyone lose a bunch of $20 bills rolled up in a rubber band? Because we found the rubber band.",
            "Precious tritium is the fuel that makes this project go...",
            "I'm gonna put some dirt in your eye.",
            "See ya, chump!",
            "WHAT THE HELL?!",
            "That's what my momma's always saying! I just never actually believed her!"
        ];
        message.channel.send(`${spiderman[Math.floor(Math.random() * spiderman.length)]}`)
        talkedRecently.add(message.author.id);
        setTimeout(() => {
            talkedRecently.delete(message.author.id);
        }, 15000);
    }
}