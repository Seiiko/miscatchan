module.exports.run = async (client, message, args) => {

    // Define the member variable.
    let member = message.mentions.members.first();

    // Send the info message to the current channel.
    message.channel.send(`:baby:  |  <@!` + message.author.id + `> is cuddling with  <@!` + member.user.id + `>! Ain't that just adorable...`, {
        file: "https://media.giphy.com/media/3bqtLDeiDtwhq/giphy.gif"
    });

}

module.exports.info = {

    // Set the command name.
    name: "cuddle"

}