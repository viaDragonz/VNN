var fortunes = require('fortunes');
var options = {
    isShort: true,
    max: 5,
    term: 'men',
};
exports.run = (client, message, args) => {

fortunes.random(options, function(fortune) {
message.channel.send(fortune)
});
}