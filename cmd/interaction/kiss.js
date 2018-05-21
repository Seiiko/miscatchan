module.exports.run = async (client, message, args) => {

    // Define the member variable.
    let member = message.mentions.members.first();

    // Send the info message to the current channel.
    message.channel.send(`:kissing_heart:  |  <@!` + member.user.id + `> and <@!` + message.author.id + `> are kissing! Hehe, I think they need some privacy...`, {
        file: "https://78.media.tumblr.com/3d93be7699a2ba8b4bc13a29a37b84ad/tumblr_odt2geMkpc1t86l7wo1_500.gif"
    });

}

module.exports.info = {

    // Set the command name.
    name: "kiss"

}