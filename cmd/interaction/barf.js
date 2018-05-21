module.exports.run = async (client, message, args) => {

    // Define the member variable.
    let member = message.mentions.members.first();

    // Send the info message to the current channel.
    message.channel.send(`:nauseated_face:  |  <@!` + message.author.id + `> is barfing at  <@!` + member.user.id + `>! Someone please record this!`, {
        file: "https://pa1.narvii.com/5654/b0c0da73faa5dde4de5251428c33fc9ad6f0e552_hq.gif"
    });

}

module.exports.info = {

    // Set the command name.
    name: "barf"

}