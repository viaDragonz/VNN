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
        const fish = [
            "https://www.anglersjournal.com/.image/t_share/MTY3MzMyMzQ1OTUzNjU4NzA1/02_payara.jpg",
            "https://cdn.discordapp.com/attachments/640348000274612249/672454574497595423/image0.jpg",
            "https://cdn.discordapp.com/attachments/640348000274612249/672076999296155709/image0.jpg",
            "https://cdn.discordapp.com/attachments/640348000274612249/671715766256533504/image0.jpg",
            "https://cdn.discordapp.com/attachments/640348000274612249/671711506773311488/image0.jpg",
            "https://cdn.discordapp.com/attachments/640348000274612249/671349087362351116/image0.jpg",
            "https://cdn.discordapp.com/attachments/640348000274612249/671067728806936596/Sheepshead.jpg",
            "https://cdn.discordapp.com/attachments/640348000274612249/670660913782849577/lg_72407_Neon_Dottyback.png",
            "https://cdn.discordapp.com/attachments/640348000274612249/670272363350458374/image0.jpg",
            "https://cdn.discordapp.com/attachments/640348000274612249/673916611538714671/3207094757_da5d0d7807_z-2_1024x1024.png",
            "https://media1.tenor.com/images/ad9d0481c993ca9739d5107ce207c5a2/tenor.gif",
            "https://media1.tenor.com/images/60dbbe1ca97877a375f958677da70744/tenor.gif",
            "https://cdn.discordapp.com/attachments/643282422569500682/678067045870600192/fishiesecret.png",
            "https://steemitimages.com/DQmPN4RutUutouCTo2o15yCqJ7GHwZfuAgEP7LrLUtdxsvP/Extremely%20cool%20fish%20caught.jpg",
            "https://i0.wp.com/headsup.scoutmag.wpengine.com/files/2012/11/barreleye1.gif",
            "https://i.imgur.com/IozMKA1.jpg",
            "https://i.pinimg.com/236x/87/5b/17/875b17e02b90477f7bf0e9a0277baa58--blue-accents-mandarin-fish.jpg",
            "https://static.fjcdn.com/large/pictures/5a/72/5a72d8_4777994.jpg",
            "https://iqss.eu/img/exotic_fish.jpg",
            "https://cdn0.wideopenspaces.com/wp-content/uploads/2015/01/clear-fish.jpg",
            "https://www.homeandgardendesignideas.com/Editorials/thumbs/590/1973754196616730_42950466.jpg",
            "http://2ap93t1x1l6e2f6gfo3ag4vw.wpengine.netdna-cdn.com/wp-content/uploads/2017/10/6b179432b9676aa18b327bc5c5366569-cool-fish-marine-fish-1000x480.jpg",
            "https://cdn.shopify.com/s/files/1/1842/7677/products/ax-kids-costume-kids-finding-nemo-halloween-costume-m-orange-23880585537_800x.jpg",
            "https://animalhow.com/wp-content/uploads/2019/04/ywllow-tang-finding-nemo.jpg",
            "https://vignette.wikia.nocookie.net/supersaiyanz/images/c/ca/Will_smith_fish.jpg",
            "https://products.kitsapsun.com/archive/2004/10-11/img/20041011-003617-pic-613774412.jpg",
            "https://i2.wp.com/fishingbooker.com/blog/media/Anglerfish-1-e1540224525672.jpg",
            "https://d2cbg94ubxgsnp.cloudfront.net/Pictures/480x270//3/5/3/501353_shutterstock_757650418_879178_crop_crop.jpg",
            "https://thumbs.gfycat.com/CaringBadArrowworm-size_restricted.gif",
            "https://epsilon.aeon.co/images/afd7c22f-dde2-457d-847c-ed3b188f8011/idea_sized-2168831.jpg",
            "https://images.earthtouchnews.com/media/1948082/sloan-s-viperfish_2017_02_14.jpg",
            "https://cdn.reefs.com/blog/wp-content/uploads/2016/04/diaphus-rafinesquii-pez-linterna-2060.jpg",
            "https://cdn0.wideopenspaces.com/wp-content/uploads/2015/01/oarfish-weird-fish.jpg",
            "https://images.csmonitor.com/csm/2010/02/07_65.jpg",
            "https://images.csmonitor.com/csm/2010/02/04_65.jpg",
            "https://images.csmonitor.com/csm/2010/02/17_14.jpg",
            "https://i.ytimg.com/vi/ZqBqCsiMbls/maxresdefault.jpg",
            "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201909/dinosaur_fish-770x433.png",
            "https://www.getfish.com.au/wp-content/uploads/2018/02/valentines-day-dinner-baked-salmon-recipe.jpg",
            "https://i.redd.it/7g22muud7vr21.jpg",
            "https://cdn.newsapi.com.au/image/v1/ee771a5ac4268d923be28709a8175db4",
            "https://cdn.newsapi.com.au/image/v1/8c9ee67a38ebcf0e348154b2b49fec27",
            "https://i.redd.it/bvmxrvfuoka41.jpg",
            "https://cdn.shopify.com/s/files/1/0855/3388/products/6335_grande.jpeg",
            "https://cdn.cnn.com/cnnnext/dam/assets/190710170737-03-wakanda-new-fish-species-large-169.jpg",
            "https://cdn.cnn.com/cnnnext/dam/assets/191206145917-07-new-species-2019-dipturus-lamillai-super-169.jpg",
            "https://www.snopes.com/tachyon/images/photos/animals/graphics/pigfish.jpg",
            "https://www.geek.com/wp-content/uploads/2019/02/catshish_amazon-625x352.jpg",
            "https://www.visitflorida.com/content/dam/visitflorida/en-us/images/articles/2013/insider-boating-fishing/KingMack.JPG",
            "https://usercontent2.hubstatic.com/13376681_f520.jpg",
            "https://cdn.discordapp.com/attachments/643282422569500682/678073332352155659/pupper3.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/4/44/Jelly_cc11.jpg",
            "https://www.theallineed.com/wp-content/uploads/2015/09/plastic_fish_1170.jpg",
            "https://i.pinimg.com/originals/c6/45/2e/c6452e1fd0046457c20dd32c334c0790.jpg",
            "https://resize.hswstatic.com/w_907/gif/koi.jpg",
            "https://live.staticflickr.com/5810/30545448123_d19711b714_b.jpg",
            "https://www.bungalow5.com/pub/media/catalog/product/cache/1/image/700x700/e9c3970ab036de70892d86c6d221abfe/c/r/crp-700-808_lg_3.jpg",
            "https://i.redd.it/mat7impphsbz.png",
            "https://cdn.discordapp.com/attachments/643282422569500682/678074508426346496/einfischen.png",
            "https://lh6.ggpht.com/-qY0TkSGYeSo/UiayhhEhEWI/AAAAAAAAsA0/VLMh4vGXXdo/flying-fish-4%25255B6%25255D.jpg",
            "https://i.redd.it/y0hp62zpirb11.jpg",
            "https://i2-prod.dailystar.co.uk/incoming/article20853006.ece/ALTERNATES/s615b/1_fish1.jpg",
            "https://i.redd.it/rta1kcxdrqe31.jpg",
            "https://kubrick.htvapps.com/htv-prod/ibmig/cms/image/wcvb/28188742-28188742.jpg",
            "https://i.kym-cdn.com/photos/images/original/000/943/150/51e.jpg",
            "https://images.csmonitor.com/csm/2019/07/0801%20Sturgeon%20CLOSE.jpg"
            ];
            message.channel.send("", {
                file: `${fish[Math.floor(Math.random() * fish.length)]}`
            });
        talkedRecently.add(message.author.id);
        setTimeout(() => {
            talkedRecently.delete(message.author.id);
        }, 10000);
    }
}
