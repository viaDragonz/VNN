const fs = require('fs');
const http = require('http');
var request = require('request');
const { get } = require("snekfetch"); 


exports.run = (client, message, args) => {

const tyler = [
"https://media.discordapp.net/attachments/627915749599477770/630499783068483585/images.png",
"https://cdn.discordapp.com/attachments/628054414170652675/629133018933493790/TylerLookingResonance.png",
"https://cdn.discordapp.com/attachments/628054414170652675/629132893788045323/weeb2.png",
"https://cdn.discordapp.com/attachments/628054414170652675/629132846593867807/wtf.png",
"https://cdn.discordapp.com/attachments/628054414170652675/629132844609830922/q.png",
"https://cdn.discordapp.com/attachments/628054414170652675/629132838121242635/tyler-mcvicker.jpg",
"https://cdn.discordapp.com/attachments/258412663573446657/628056971148394516/freeme.jpg",
"https://cdn.discordapp.com/attachments/258412663573446657/628054801434804244/tyler_dumpster.png",
"https://cdn.discordapp.com/attachments/628054414170652675/628054502678986772/excite.png",
"https://cdn.discordapp.com/attachments/628054414170652675/628054501403918366/ED0sq3VU4AAqqRF.png",
"https://cdn.discordapp.com/attachments/628054414170652675/628054500107747328/ded.png",
"https://cdn.discordapp.com/attachments/628054414170652675/628054497138311180/avagagagaz.png",
"https://cdn.discordapp.com/attachments/628054414170652675/628054497205288970/D7SAtefXkAcRKjI.png",
"https://cdn.discordapp.com/attachments/628054414170652675/628054496408371220/capac.png",
"https://cdn.discordapp.com/attachments/628054414170652675/628054493514432513/aaaaaaaaahhhhh.png",
"https://cdn.discordapp.com/attachments/628054414170652675/628054492100952076/where_am_I.png",
"https://cdn.discordapp.com/attachments/628054414170652675/628054489701548045/TylerShocked.png",
"https://cdn.discordapp.com/attachments/628054414170652675/628054487688282146/tylers_a_nerd_lmao.png",
"https://cdn.discordapp.com/attachments/628054414170652675/628054458877607946/tyler_armless.png",
"https://cdn.discordapp.com/attachments/628054414170652675/628054457627705388/Screenshot_20190822-211503_Twitter.jpg",
"https://cdn.discordapp.com/attachments/628054414170652675/628054456512020500/sellout.png",
"https://cdn.discordapp.com/attachments/628054414170652675/628054454297428028/Screenshot_20190812-103016_Twitter.jpg",
"https://cdn.discordapp.com/attachments/628054414170652675/628054452095680515/ProfilePicture.png",
"https://cdn.discordapp.com/attachments/628054414170652675/628054450707103764/mic.png",
"https://cdn.discordapp.com/attachments/628054414170652675/628054448538910720/isleep.png",
"https://cdn.discordapp.com/attachments/628054414170652675/628054447200796690/image0.png",
"https://cdn.discordapp.com/attachments/628054414170652675/628054445493583892/huh.png",
"https://cdn.discordapp.com/attachments/628054414170652675/628054445241925632/happy.png",
"https://cdn.discordapp.com/attachments/627915749599477770/630512157129179148/unknown.png",
"https://cdn.discordapp.com/attachments/628054414170652675/630511529858564107/unknown.png",
"https://cdn.discordapp.com/attachments/579481334657974273/630511747786342427/Unbenannt.png",
"https://cdn.discordapp.com/attachments/579481334657974273/630512489733292032/unknown.png",
"https://cdn.discordapp.com/attachments/579481334657974273/630512563184074781/unknown.png",
"https://cdn.discordapp.com/attachments/579481334657974273/630512384410386454/unknown.png",
"https://media.discordapp.net/attachments/572662006692315138/587569748854833162/tyler.gif",
"https://media.discordapp.net/attachments/628054414170652675/630787307468881920/unknown.png",
"https://cdn.discordapp.com/attachments/258324481074921472/630783860929724436/JPEG_20191003_111552.jpg",
"https://cdn.discordapp.com/attachments/258324481074921472/630762321844764672/unknown.png",
"https://cdn.discordapp.com/attachments/258324481074921472/630606116576821258/hello.png",
"https://cdn.discordapp.com/attachments/258324481074921472/630603390874943508/image0.jpg",
"https://cdn.discordapp.com/attachments/258324481074921472/630603229314416650/image0.jpg",
"https://cdn.discordapp.com/attachments/258324481074921472/630603350252978176/image0.jpg",
"https://cdn.discordapp.com/attachments/258324481074921472/630602994660147210/bignose.png",
"https://cdn.discordapp.com/attachments/258324481074921472/630602969775210518/image0.jpg",
"https://cdn.discordapp.com/attachments/258324481074921472/630602849897676811/image0.jpg",
"https://cdn.discordapp.com/attachments/258324481074921472/630602687091572776/image0.jpg",
"https://cdn.discordapp.com/attachments/258324481074921472/630602778607353859/unknown.png",
"https://media.discordapp.net/attachments/258324481074921472/630602782147215370/image0.jpg",
"https://cdn.discordapp.com/attachments/258324481074921472/630599687531134996/boom.png",
"https://cdn.discordapp.com/attachments/628054414170652675/630568807760658432/unknown.png",
"https://cdn.discordapp.com/attachments/258324481074921472/630598902294380544/zoomer.png",
"https://cdn.discordapp.com/attachments/258324481074921472/630599687531134996/boom.png",
"https://cdn.discordapp.com/attachments/628054414170652675/630952735021465611/image0.jpg",
"https://cdn.discordapp.com/attachments/628054414170652675/630952783864004609/image0.jpg",
"https://cdn.discordapp.com/attachments/628054414170652675/630952812406112279/image0.jpg",
"https://cdn.discordapp.com/attachments/628054414170652675/630952911387623440/image0.jpg",
"https://cdn.discordapp.com/attachments/628054414170652675/631162288623058944/JPEG_20191008_121327.jpg",
"https://cdn.discordapp.com/attachments/628054414170652675/631225254873661451/JPEG_20191008_162333.jpg",
"https://cdn.discordapp.com/attachments/258324481074921472/631226473189081088/unknown.png",
"https://cdn.discordapp.com/attachments/258324481074921472/631332446956290058/pleasegaben.jpg",
"https://cdn.discordapp.com/attachments/258324481074921472/631386170877542401/unknown.png",
"https://cdn.discordapp.com/attachments/628054414170652675/631563501545979962/JPEG_20191009_144739.jpg",
"https://cdn.discordapp.com/attachments/628054414170652675/631582647130521610/JPEG_20191009_160342.jpg"
];

message.channel.send("", {
    file: `${tyler[Math.floor(Math.random() * tyler.length)]}`
});

}