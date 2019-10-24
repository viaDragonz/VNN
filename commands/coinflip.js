exports.run = (client, message, args) => {
    let coinFlip = ["Heads", "Tails"];
    let coinFlipCalc = Math.round(Math.random());
    message.channel.send("You flipped a coin and got " + coinFlip[coinFlipCalc] + "!")
}