module.exports.run = async (client, message, args) => {

  // Define the member and reasons variables.
  let member = message.mentions.members.first();
  let reasons = args.slice(1).join(' ').split(' || ');
  const casualChat = client.channels.find('name', 'casual-chat'); // Create a variable referring to the selected channel.

  // Define the role variables.
  let owner = 'NSFW Goddess';
  let admin = 'Moderator';

  // Limit it to admins.
  if (!message.member.roles.some(r => [owner, admin].includes(r.name))) // If user doesn't have the Bot Owner or Admin role.
    return message.channel.send(':no_entry_sign:  |  You don\'t have enough permission to perform the .ban command!'); // Send a message to the channel.

  // Check if the member exists.
  if (!member)
    return message.channel.send(':interrobang:  |  This member doesn\'t exist! \n:interrobang:  |  **Usage:** .ban [member] [public reason] || [private reason]'); // Send message to channel.

  // Check if the member has a higher role than the bot.  
  if (!member.bannable)
    return message.channel.send(':no_entry_sign:  |  I cannot ban this user!'); // Send message to channel.

  // Check if a reason was provided.
  if (!reasons [0])
    return message.channel.send(':interrobang:  |  Please provide at least a public reason for the ban. \n:interrobang:  |  **Usage:** .ban [member] [public reason] || [private reason]'); // Send message to channel.

  // Send message.
  if (!reasons[1]) {

    casualChat.send(`:zap:  |  <@!` + member.user.id + `> **has been banned from the MiscatSquad server.**\n:zap:  |  **Reason:** ${reasons[0]}\n:zap:  |  *Do not reply to this message or to the Mods. If you\'re unhappy with any decision taken by the Moderators, fill out our Complaints Form.*`);
    member.send(':zap:  |  **You have been banned from the MiscatSquad server.**\n:zap:  |  **Reason:** ' + reasons[0] + '\n:zap:  |  *Do not reply to this message or to the Mods. If you\'re unhappy with any decision taken by the Moderators, fill out our Complaints Form: https://form.jotformeu.com/81456911084357*');


  } else {

    casualChat.send(`:zap:  |  <@!` + member.user.id + `> **has been banned from the MiscatSquad server.**\n:zap:  |  **Reason:** ${reasons[0]}\n:zap:  |  *Do not reply to this message or to the Mods. If you\'re unhappy with any decision taken by the Moderators, fill out our Complaints Form.*` );
    member.send(':zap:  |  **You have been banned from the MiscatSquad server.**\n:zap:  |  **Reason:** ' + reasons[1] + '\n:zap:  |  *Do not reply to this message or to the Mods. If you\'re unhappy with any decision taken by the Moderators, fill out our Complaints Form: https://form.jotformeu.com/81456911084357*');

  }
  
  // Ban the member.
  await member.ban(reasons[1])
    .catch(error => message.reply(`I "apologize", ${message.author}, I couldn't ban because of : ${error}\nHmph.`));

}

module.exports.info = {

  // Set the command name.
  name: 'ban'

}