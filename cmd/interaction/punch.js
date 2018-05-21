module.exports.run = async (client, message, args) => {

    // Define the member variable.
    let member = message.mentions.members.first();

    // Send the info message to the current channel.
    message.channel.send(`:punch:  |  <@!` + message.author.id + `> just punched <@!` + member.user.id + `>! Give me the DAMN popcorn!`, {
        file: "https://pa1.narvii.com/5668/d845ea44f1ce209351976f2a22b4c728873fac21_hq.gif"
    });

}

module.exports.info = {

    // Set the command name.
    name: "punch"

}