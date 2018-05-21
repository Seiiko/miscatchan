module.exports.run = async (client, message, args) => {

    // Define the member variable.
    let member = message.mentions.members.first();

    // Send the info message to the current channel.
    message.channel.send(`:handshake:  |  <@!` + message.author.id + `> and  <@!` + member.user.id + `> are holding hands... bah, lewd!`, {
        file: "http://i.imgur.com/LDkGxcH.gif"
    });

}

module.exports.info = {

    // Set the command name.
    name: "handhold"

}