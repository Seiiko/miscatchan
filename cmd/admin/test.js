module.exports.run = async (client, message, args) => {

    // Define the role variables.
    let owner = 'NSFW Goddess';
    let admin = 'Moderator';

    // Limit it to admins.
    if (!message.member.roles.some(r => [owner, admin].includes(r.name))) // If user doesn't have the Bot Owner or Admin role.
      return message.channel.send(':no_entry_sign:  |  You don\'t have enough permission to perform the m:test command!'); // Send a message to the channel.

    // Get the reasons 
    let reasons = args.slice(1).join(' ').split(' || ');

    // Send message.
    if (!reasons[0]) {

        message.channel.send(':interrobang:  |  Please provide at least a public reason for the ban.')

    } else if (!reasons[1]) {

        message.channel.send('*Sent to Squad:*\n:zap:  |  **X has been banned from the MiscatSquad server.**\n:zap:  |  **Reason:** ' + reasons[0] + '\n:zap:  |  *Do not reply to this message or to the Mods. If you\'re unhappy with any decision taken by the Moderators, fill out our Complaints Form.*');
        message.channel.send('*Sent to member:*\n:zap:  |  **You have been banned from the MiscatSquad server.**\n:zap:  |  **Reason:** ' + reasons[0] + '\n:zap:  |  *Do not reply to this message or to the Mods. If you\'re unhappy with any decision taken by the Moderators, fill out our Complaints Form.*');

    } else {

        message.channel.send('*Sent to Squad:*\n:zap:  |  **X has been banned from the MiscatSquad server.**\n:zap:  |  **Reason:** ' + reasons[0] + '\n:zap:  |  *Do not reply to this message or to the Mods. If you\'re unhappy with any decision taken by the Moderators, fill out our Complaints Form.*');
        message.channel.send('*Sent to member:*\n:zap:  |  **You have been banned from the MiscatSquad server.**\n:zap:  |  **Reason:** ' + reasons[1] + '\n:zap:  |  *Do not reply to this message or to the Mods. If you\'re unhappy with any decision taken by the Moderators, fill out our Complaints Form.*');

    } 
    

}

module.exports.info = {

    // Set the command name.
    name: 'test'

}