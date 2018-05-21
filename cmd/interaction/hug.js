module.exports.run = async (client, message, args) => {

    // Define the member variable.
    let member = message.mentions.members.first();

    // Send the info message to the current channel.
    message.channel.send(`:blush:  |  <@!` + member.user.id + `> is being hugged by <@!` + message.author.id + `>! Cute as heck!`, {
        file: "https://78.media.tumblr.com/5dfb67d0a674fe5f81950478f5b2d4ed/tumblr_ofd4e2h8O81ub9qlao1_500.gif"
    });

}

module.exports.info = {

    // Set the command name.
    name: "hug"

}