module.exports.run = async (client, message, args) => {

    // Define the member variable.
    let member = message.mentions.members.first();

    // Send the info message to the current channel.
    message.channel.send(`:point_right:  | <@!` + member.user.id + `> is being tickled by <@!` + message.author.id + `>! Now wait until they grow older. Hehe.`, {
        file: "http://static.fjcdn.com/gifs/Pretty+much+anytime+i+get+tickled+i+dont+like+being_b9d6a7_5127494.gif"
    });

}

module.exports.info = {

    // Set the command name.
    name: "tickle"

}