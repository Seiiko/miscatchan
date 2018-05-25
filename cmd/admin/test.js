module.exports.run = async (client, message, args) => {

    // Define the role variables.
    let owner = 'NSFW Goddess';
    let admin = 'Moderator';

    // Limit it to admins.
    if (!message.member.roles.some(r => [owner, admin].includes(r.name))) // If user doesn't have the Bot Owner or Admin role.
      return message.channel.send(':no_entry_sign:  |  You don\'t have enough permission to perform the m:test command!'); // Send a message to the channel.

    // Get the reasons 
    let reasons = args.slice(1).join(' ').split('|');

    // Send message.
    message.channel.send('Public reason: ' + reasons[0] + '\nPrivate reason: ' + reasons[1]);

}

module.exports.info = {

    // Set the command name.
    name: 'test'

}