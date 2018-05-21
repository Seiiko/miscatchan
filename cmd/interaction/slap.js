module.exports.run = async (client, message, args) => {

    // Define the member variable.
    let member = message.mentions.members.first();

    // Send the info message to the current channel.
    message.channel.send(`:raised_hand:  | <@!` + member.user.id + `> has been slapped by <@!` + message.author.id + `>! Hah, that's GOTTA hurt!`, {
        file: "https://i.gifer.com/8Z0s.gif"
    });

}

module.exports.info = {

    // Set the command name.
    name: "slap"

}