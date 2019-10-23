var fortunes = require('fortunes');
var options = {
	isShort: true,
	max: 7,
};
exports.run = (client, message, args) => {
	fortunes.random(options, function(fortune) {
		message.channel.send(fortune)
	});
}