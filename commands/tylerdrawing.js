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
        const tylerdrawing = [
            "https://cdn.discordapp.com/attachments/637468091843870720/637469013328265230/tyler_baby.png",
            "https://cdn.discordapp.com/attachments/637468091843870720/637469065203548201/tyler_back.jpg",
            "https://cdn.discordapp.com/attachments/637468091843870720/637469748178714624/tyler_beanie.png",
            "https://cdn.discordapp.com/attachments/637468091843870720/637469770442080257/tyler_bonkers.png",
            "https://cdn.discordapp.com/attachments/637468091843870720/637469801090121768/tyler_carnage.jpg",
            "https://cdn.discordapp.com/attachments/637468091843870720/637514733662109696/tyler_half.png",
            "https://cdn.discordapp.com/attachments/637468091843870720/637469825257439232/tyler_concerned.png",
            "https://cdn.discordapp.com/attachments/637468091843870720/637515394025783306/tyler_pip_plain.png",
            "https://cdn.discordapp.com/attachments/258324481074921472/637133173469478912/tyler_pip.png",
            "https://cdn.discordapp.com/attachments/258324481074921472/630602980395057189/tyler_dota.png",
            "https://cdn.discordapp.com/attachments/637468091843870720/637516017844879360/tyler_think.png",
            "https://cdn.discordapp.com/attachments/258324481074921472/637133133145178142/tyler_tf2.png",
            "https://cdn.discordapp.com/attachments/637468091843870720/637514871147069440/tyler_hl3.png",
            "https://cdn.discordapp.com/attachments/637468091843870720/637514761348710420/tyler_heavy.png",
            "https://cdn.discordapp.com/attachments/258324481074921472/636677724903047174/ceo_green.png",
            "https://cdn.discordapp.com/attachments/258449773143523328/636423165853171742/tyler_deathstare.jpg",
            "https://cdn.discordapp.com/attachments/637468091843870720/637514493202661377/tyler_deathstare.png",
            "https://cdn.discordapp.com/attachments/258449773143523328/636423093509685268/tyler_pleaseep2.png",
            "https://cdn.discordapp.com/attachments/258324481074921472/630603233588543498/tyler_ohhh.png",
            "https://cdn.discordapp.com/attachments/258324481074921472/632596547359604736/tyler_fear.png",
            "https://cdn.discordapp.com/attachments/258324481074921472/632596681942106113/tyler_labor.png",
            "https://cdn.discordapp.com/attachments/258324481074921472/632709951013257253/tyler_wheeze.png",
            "https://cdn.discordapp.com/attachments/258324481074921472/635514382134149130/Half-Life_3_2074_Edition.png",
            "https://cdn.discordapp.com/attachments/258324481074921472/636405580969279498/ceofreaked_improved.png",
            "https://cdn.discordapp.com/attachments/637468091843870720/637516142256062464/tyler_wtf.png",
            "https://cdn.discordapp.com/attachments/637468091843870720/637516104486354974/tyler_wallace.png",
            "https://cdn.discordapp.com/attachments/637468091843870720/637515896423710730/tyler_stare.png",
            "https://cdn.discordapp.com/attachments/637468091843870720/637515822809481220/tyler_souphead.jpg",
            "https://cdn.discordapp.com/attachments/637468091843870720/637514447367307277/tyler_cuphead.png",
            "https://cdn.discordapp.com/attachments/637468091843870720/637515782166937600/tyler_smug.png",
            "https://cdn.discordapp.com/attachments/637468091843870720/637515327768494080/tyler_pause.png",
            "https://cdn.discordapp.com/attachments/637468091843870720/637515744103628810/tyler_scream2.png",
            "https://cdn.discordapp.com/attachments/637468091843870720/637515721231958026/tyler_scream.png",
            "https://cdn.discordapp.com/attachments/637468091843870720/637515575438082048/tyler_really.jpg",
            "https://cdn.discordapp.com/attachments/637468091843870720/637515544072814593/tyler_pupeye.jpg",
            "https://cdn.discordapp.com/attachments/637468091843870720/637515305261727785/tyler_oops.png",
            "https://cdn.discordapp.com/attachments/637468091843870720/637515274152574996/tyler_oof.png",
            "https://cdn.discordapp.com/attachments/637468091843870720/637515202891350036/tyler_ohshit.png",
            "https://cdn.discordapp.com/attachments/637468091843870720/637515107986964521/tyler_look2.png",
            "https://cdn.discordapp.com/attachments/637468091843870720/637515076919885834/tyler_look.png",
            "https://cdn.discordapp.com/attachments/637468091843870720/637515042840903703/tyler_look.jpg",
            "https://cdn.discordapp.com/attachments/637468091843870720/637514426911686656/tyler_crisp.png",
            "https://cdn.discordapp.com/attachments/637468091843870720/637515017490792458/tyler_labor.png",
            "https://cdn.discordapp.com/attachments/637468091843870720/637514703303737345/tyler_grass.jpg",
            "https://cdn.discordapp.com/attachments/637468091843870720/637514614208200714/tyler_excite.png",
            "https://cdn.discordapp.com/attachments/637468091843870720/637514408465137665/tyler_cool.png",
            "https://cdn.discordapp.com/attachments/258324481074921472/637914752256966666/tyler_XD.png",
            "https://cdn.discordapp.com/attachments/646465749547876374/647262560667697162/tyler_airship.png",
            "https://cdn.discordapp.com/attachments/646465749547876374/647263012385980417/tyler_steam.png",
            "https://cdn.discordapp.com/attachments/258324481074921472/647262512605167616/tyler_cry_copy.png",
            "https://cdn.discordapp.com/attachments/258324481074921472/647264688912072735/tyler_madcry.png",
            "https://cdn.discordapp.com/attachments/258324481074921472/647265131893620747/tyler_bruh.png",
            "https://cdn.discordapp.com/attachments/258324481074921472/647265499327234049/tyler_alyx.png",
            "https://cdn.discordapp.com/attachments/258324481074921472/648276554127769601/bruh.png"
        ];
        message.channel.send("", {
            file: `${tylerdrawing[Math.floor(Math.random() * tylerdrawing.length)]}`
        });
        talkedRecently.add(message.author.id);
        setTimeout(() => {
            talkedRecently.delete(message.author.id);
        }, 10000);
    }
}
