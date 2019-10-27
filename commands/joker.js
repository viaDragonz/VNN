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
        const joker = [
            "I believe that whatever doesn't kill you, simply makes you... *stranger*.",
            "Do you wanna know how I got these scars?",
            "And I thought *my* jokes were bad.",
            "My father was a drinker, and a fiend.  And one night, he goes off crazier than usual.  Mommy gets the kitchen knife to defend herself.  He doesn't like that.  Not. One. Bit. So, me watching, he takes the knife to her, laughing while he does it.  He turns to me, and he says, 'Why so serious?' He comes at me with the knife. 'Why so SERIOUS?!'  He sticks the blade in my mouth— 'Let's put a smile on that face!' Aaaand... Why so serious?",
            "Don't talk like one of them! You're not - even if you'd like to be.",
            "To them, you're just a freak, like me.",
            "They need you right now, but when they don't, they'll cast you out - like a leper.",
            "See, their 'morals', their 'code'... it's a bad joke, dropped at the first sign of trouble. They're only as good as the world allows them to be.",
            "When the chips are down, these, ah, 'civilized people'? They'll eat each other.",
            "See, I'm not a monster. I'm just ahead of the curve.",
            "You know what I've noticed? Nobody panics when things go 'according to plan'... even if the plan is horrifying.",
            "If, tomorrow, I tell the press that, like, a gang-banger will get shot, or a truckload of soldiers will be blowing up, nobody panics, because 'it's all part of the plan'.",
            "But I say that one little old mayor will die... well then everyone loses their minds!",
            "Introduce a little anarchy.",
            "I'm an agent of chaos.",
            "I mean, what happened? Did your balls drop off? Hmm?",
            "Oh, and you know the thing about chaos? It's fair.",
            "Good evening, ladies and gentlemen. We are tonight's entertainment! I only have one question: Where is Harvey Dent?",
            "You know, I'll settle for his loved ones.",
            "Well hello, beautiful! You must be Harvey's squeeze, hm? And you *are* beautiful.",
            "See, I had a wife — beautiful, like you — who tells me, I worry too much, who tells me I ought to smile more, who gambles and gets in deep with the sharks. Hey. One day they carve her face. We have no money for surgeries. She can't take it. I just want to see her smile again, hmm? I just want her to know that I don't care about the scars.",
            "Now, I see the funny side. Now I'm always smiling!",
            "A little fight in you. I like that!",
            "The only sensible way to live in this world is without rules. And tonight, you're gonna break your one rule!",
            "I told you, I'm a man of my word.",
            "You see, I'm a guy of simple taste. I enjoy, uh, dynamite, and gunpowder…and gasoline!",
            "This town deserves a better class of criminal, and I'm gonna give it to 'em.",
            "I took Gotham's white knight... And brought him down to our level!",
            "If you're good at something, never do it for free."
        ];
        message.channel.send(`${joker[Math.floor(Math.random() * joker.length)]}`)
        talkedRecently.add(message.author.id);
        setTimeout(() => {
            talkedRecently.delete(message.author.id);
        }, 15000);
    }
}
