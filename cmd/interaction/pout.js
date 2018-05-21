module.exports.run = async (client, message, args) => {

    // Define the member variable.
    let member = message.mentions.members.first();

    // Send the info message to the current channel.
    message.channel.send(`:frowning:  |  <@!` + message.author.id + `> is pouting at <@!` + member.user.id + `>... Oh, now you've done goofed.`, {
        file: "https://media1.tenor.com/images/58a26a738703565f7fc276aedabfcfb3/tenor.gif"
    });

}

module.exports.info = {

    // Set the command name.
    name: "pout"

}