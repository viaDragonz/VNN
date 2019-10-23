exports.run = (client, message, [mention, ...reason]) => {
client.webhook.edit(`${message.author.username}`, `${message.author.avatarURL}`).then(member => {
client.webhook.send(`:flushed:`)
});
}