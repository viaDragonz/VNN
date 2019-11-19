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
        const tf2quote = [
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
            "BONK!",
            "I am owning you, you fat, bald, fatty fat... Fat fat!",
            "I... eat... your...sandviches. I eat 'em up!",
            "Nice hustle, 'tons-a-fun'! Next time, eat a salad!",
            "Hey, lard-fat, those hard arteries don't stop bullets, do they?",
            "I think I'll take Sasha out for a steak dinner tonight. Whataya think about that?",
            
            //Soldier Quotes
            "Screamin' Eagles!",
            "MAGGOTS!",
            "Dominated, hippie! Get a job!",
            "I just tore you a new chimney, Smokey Joe.",
            "Stars and Stripes beats Hammer and Sickle! Look it up.",
            "Gotcha, cruton.",
            "I have done nothing but teleport bread for three days!",
            "My god...",
            "Dear god...",
            "AAAAAHHHHHHHHHHHHHHHHHHHH!",
            "And from that day forward any time a bunch of animals are together in one place it's called a zoo!",
            "Then he used his fight money to buy two of every animal on earth, and then he herded them onto a boat, and then he beat the crap out of every single one!",
            "If fighting is sure to result in victory, then you must fight! Sun Tzu said that. And I'd say he knows a little more about fighting than you do, pal, because he invented it! And then he perfected it so that no living man could best him in the ring of honor!",
            "Unless it's a farm!",
            
            //Spy Quotes
            "Well, this was a disappointment!",
            "You got blood on my suit.",
            "Congratulations! You're a faliure.",
            "Well, off to visit your mother!",
            "Here lies Scout. He ran fast and died a virgin.",
            "Gentlemen.",
            "He could be any one of us! He could be you! He could be me! He could even be-- **BAM**",
            
            //Sniper Quotes
            "Wuss.",
            "Stupid bloody Spies.",
            "How many times have you died? I'm actually getting impressed.",
            "I'll be honest with ya. My parents do *not* care for it.",
            "You've been killed by the best, cyclops!",
            "Put Mum on the phone...",
            "You're making this so easy, I'm actually getting worse!",
            "I think his mate saw me... Yes, yes he did!!",
            
            //Pyro Quotes
            "MMPH!",
            "MMPH MMPH!",
            "MMPHMMPH!",
            "MMPH MMPH MMPH!",
            "MMPH MMPH MMPH MMPH!",
            
            //Engineer Quotes
            "Hey look, buddy. I'm an engineer. And that means I solve problems.",
            "That's what ya get!",
			"How'd that plan turn out for ya, dummy?",
			"Whoooowee! Makin' bacon!",
			"Whoooowee, would ya look at that!",
			"Nice goin', pardner!",
			"Thanks, mister!",
			"I told ya don't touch that darn thing.",
			"I built that.",
			"That's what it was made for.",
			"Another satisfied customer!",
            "This thing ain't on auto-pilot, son!",
            "Tagged ya.",
            "That there is a gold-plated kill!",
            "Guess I got the Midas touch.",
			"Sometimes, you just need a little less gun.",
			"Ain't that a cute little gun?",
			"I love that little gun!",
			"Dispenser going up.",
			"Erecting a Dispenser.",
			"Sentry going up.",
			"Buildin' a Sentry.",
			"Teleporter comin' right up.",
			"Teleporter goin' up.",
			"Packin' up!",
			"Movin' out!",
			"I'm movin' this!",
            "Heavy load comin' through!",
            "Outta mah way! Outta mah way!",
			"Spy's sappin' my Dispenser!",
			"Spy's sappin' my Sentry!",
			"Spy's sappin' my Teleporter!",
			"Dispenser down!",
			"Sentry down!",
			"Teleporter down!",
			"Nice going, partner...",
            
            //Medic Quotes
            "*Let's go practice Medicine.*",
            "Oktoberfest!",
            "Eins, zwei, drei... Ugh, I do not think ve brought enough body bags.",
            "Haha! Vat a bloodbath!",
            "Danke, Kamerad!",
            "Ve did it, Kamerad!",
            "Would you like a second opinion? You are also ugly!",
            "Come over here. I promise I will heal you!",
            "Stupendous!",
            "Schweinhunds.",
            "Schweinhunds!",
            "Dummkopfs!",
            
            //Demo Quotes
            "Oh, they're goin' ta have to glue you back together... IN HELL!",
            "DOMINATED, twinkle-toes!",
            "Dominated, ya wee scamperin' windbag!",
            "Dominated, tiny man!",
            "Don't come wide with me, ye pint-sized mutt!",
            "Grow some hair on yer face, and come and try me again, lad.",
            "Oh, you're a wee little miss, you are!",
            "How's that feel, ya blockhead?",
            "Ya great lactating wet nurse!",
            "Don't fret, boyo. I'll be gentle!",
            "And that's what yeh get for touching that!",
            "You appear to have trodden on a mine!",
            "Bloody hell, those ones were me favorites!",
            "Let that be a bloody lesson to yeh!",
            "Couldn't ya see the bloody bombs?",
            "You're all bloody dead!",
            "I didn't need yer help, you know.",
            "We did it, mate!",
            "That'll teach 'em!",
            "Ka-boooom!",
            "Kablooie!",
            "Aye, me bottle o' scrumpy!",
            "See! I told ya they were a bunch o' wee lasses!",
            "I'll notify yer next o' kin... that ya sucked!",
            "Hey, Private Haircut, I might've taken a bit too much off... yer head!",
            "Mother o' mercy! Now that is a bloody domination!",
            "Lot o' good that Soldier trainin' did ya! I'm drunk!",
            "Burn! In! HELL!'",
            "Freeeedooooom!",
            "Hae at 'em, lads!",
            "Get 'am, Boyos!",
            "Kill 'em all!",
            "Leeeeet's do iiiiit!",
            "Aigheaght's the way to do it!",
            "Come on!",
            "*Drunk Rambling*",
            
            //Saxton Hale quotes
            "Don't worry son, you'll be just fine...",
            "It can smell fear...",
            "There you are!",
            "WELCOME, TO MERCENARY PARK!",
            
            //Mrs. Pauling
            "Scout, I get one day off, a year, and you wasted on... THIS! Goodbye.",
            "What the hell is that?!?",
            "Looks like I will be burying bodies all weekend. So that you don't go to jail.",
            "Oh, you already gonna be at that one.",
            "Tell me you got the briefcase.",
            
            //Administrator
            "YOU FAILED!",
            "Victory.",
            "5, 4, 3, 2, 1!",
            "YOU FAILED, STALEMATE!"
            
            //Misc Quotes
        ];
        message.channel.send(`${tf2quote[Math.floor(Math.random() * tf2quote.length)]}`)
        talkedRecently.add(message.author.id);
        setTimeout(() => {
            talkedRecently.delete(message.author.id);
        }, 10000);
    }
}
