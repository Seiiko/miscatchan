module.exports.run = async (client, message, args) => {

    // Define the member variable.
    let member = message.mentions.members.first();

    // Send the info message to the current channel.
    message.channel.send(`:hand_splayed:  |  <@!` + message.author.id + `> is patting  <@!` + member.user.id + `>! There, there.`, {
        file: "https://media1.tenor.com/images/f79a9ec48bde0e592e55447b17ecfbad/tenor.gif"
    });

}

module.exports.info = {

    // Set the command name.
    name: "pat"

}