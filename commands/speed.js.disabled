var speedTest = require('speedtest-net');
var test = speedTest({maxTime: 10000});
 
exports.run = (client, message, [mention, ...reason]) => {
const ayy = client.emojis.find(emoji => emoji.name === "loading");
message.channel.send(`${ayy}`);

test.on('data', data => {
  console.dir(data);
});
 
test.on('error', err => {
  console.error(err);
});

}