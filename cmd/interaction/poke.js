module.exports.run = async (client, message, args) => {

    // Define the member variable.
    let member = message.mentions.members.first();

    // Send the info message to the current channel.
    message.channel.send(`:point_left:  |  <@!` + member.user.id + `> has been poked by <@!` + message.author.id + `>! Fufufu, children, please.`, {
        file: "http://i0.kym-cdn.com/photos/images/original/001/027/698/3ef.gif"
    });

}

module.exports.info = {

    // Set the command name.
    name: "poke"

}