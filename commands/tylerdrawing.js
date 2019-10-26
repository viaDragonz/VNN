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
exports.run = (client, message, args) => {
	const tylerdrawing = [
		"https://cdn.discordapp.com/attachments/637468091843870720/637469013328265230/tyler_baby.png",
		"https://cdn.discordapp.com/attachments/637468091843870720/637469065203548201/tyler_back.jpg",
		"https://cdn.discordapp.com/attachments/637468091843870720/637469748178714624/tyler_beanie.png",
		"https://cdn.discordapp.com/attachments/637468091843870720/637469770442080257/tyler_bonkers.png",
		"https://cdn.discordapp.com/attachments/637468091843870720/637469801090121768/tyler_carnage.jpg",
		"https://cdn.discordapp.com/attachments/637468091843870720/637469825257439232/tyler_concerned.png",
		"https://cdn.discordapp.com/attachments/258324481074921472/637133173469478912/tyler_pip.png",
		"https://cdn.discordapp.com/attachments/258324481074921472/637133133145178142/tyler_tf2.png",
		"https://cdn.discordapp.com/attachments/258324481074921472/636677724903047174/ceo_green.png",
		"https://cdn.discordapp.com/attachments/258449773143523328/636423165853171742/tyler_deathstare.jpg",
		"https://cdn.discordapp.com/attachments/258449773143523328/636423093509685268/tyler_pleaseep2.png",
		"https://cdn.discordapp.com/attachments/258324481074921472/630602980395057189/tyler_dota.png",
		"https://cdn.discordapp.com/attachments/258324481074921472/630603233588543498/tyler_ohhh.png",
		"https://cdn.discordapp.com/attachments/258324481074921472/632596547359604736/tyler_fear.png",
		"https://cdn.discordapp.com/attachments/258324481074921472/632596681942106113/tyler_labor.png",
		"https://cdn.discordapp.com/attachments/258324481074921472/632709951013257253/tyler_wheeze.png",
		"https://cdn.discordapp.com/attachments/258324481074921472/635514382134149130/Half-Life_3_2074_Edition.png",
		"https://cdn.discordapp.com/attachments/258324481074921472/636405580969279498/ceofreaked_improved.png"
	];
	message.channel.send("", {
		file: `${tylerdrawing[Math.floor(Math.random() * tylerdrawing.length)]}`
	});
}