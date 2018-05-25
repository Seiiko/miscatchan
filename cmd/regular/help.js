const Discord = require('discord.js');
const name = require('./info/name')
const desc = require('./info/description')
const usage = require('./info/usage')

module.exports.run = async (client, message, args) => {

    // General help command, no command specified.
    if (!args[0]) {

        const embedHelp = new Discord.RichEmbed()
  
          .setTitle('Check out what Miscat Squad has to offer!')
          .setAuthor('Miscat-chan   |   Help', 'https://cdn.discordapp.com/attachments/403936228443029504/443458858703126528/miscat_chan_bot.png')
  
          .setColor('#95dbdb')
          .setDescription('For help with a specific command, type \'.help [command]\'.')
  
          .setFooter('Miscat-chan, the Miscat Squad bot! Made by Sei.', 'https://cdn.discordapp.com/attachments/403936228443029504/443458858703126528/miscat_chan_bot.png')
  
          .setURL('https://www.youtube.com/c/miscatsquad')
  
          .addBlankField(true)
  
          .addField('Regular Commands',
          '.avatar   |   .help   |   .info   |   .ping   |   .report')
  
          .addBlankField(true)
  
          .addField('Fun Commands',
          '.catfact  |   .coinflip   |   .dieroll   |   .dogfact  |   .eball   |   .repeat   |   .motiv   |   .puppy   |   .rate')
  
          .addBlankField(true)
  
          .addField('Interaction Commands',
          '.barf   |   .cuddle   |   .handhold   |   .hug   |   .kiss   |   .noticeme   |   .pat   |   .poke   |   .pout   |   .punch   |   .shrug   |   .slap   |   .tickle')
  
          .addBlankField(true)
  
          .addField('Music Commands',
          '.play   |   .stop   |   .pause   |   .resume   |   .skip   |   .volume   |   .queue   |   .clearqueue')
  
          .addBlankField(true)
  
          .addField('Admin Commands',
          '.ban   |   .kick   |   .mute   |   .purge   |   .say   |   .unmute')
  
          .addBlankField(true)
      
          .addField('Bot Owner Commands',
          '.bavatar   |   .nick   |   .status   |   .utag')
  
          .addBlankField(true)
  
        message.member.send(embedHelp);
        message.channel.send(':white_check_mark:  |  A DM has been sent to you with all the help necessary!');

    } else { // If a command was specified.

        let cName = name.command[args[0]];
        let cDesc = desc.command[args[0]];
        let cUsage = usage.command[args[0]];

        if(cName == null)
            return message.channel.send(':interrobang:  |  Please provide a valid command!\n:interrobang:  |  **Usage:** m:help [command]');

        const helpCommand = new Discord.RichEmbed()
  
            .setAuthor('Miscat-chan   |   Help', 'https://cdn.discordapp.com/attachments/403936228443029504/443458858703126528/miscat_chan_bot.png')
    
            .setColor('#95dbdb')
    
            .setFooter('Miscat-chan, the Miscat Squad bot! Made by Sei.', 'https://cdn.discordapp.com/attachments/403936228443029504/443458858703126528/miscat_chan_bot.png')

            .addBlankField(true)
    
            .addField('The ' + cName + ' command.',
            cDesc)

            .addBlankField(true)

            .addField('Usage:',
            cUsage)
            
            .addBlankField(true)
  
        message.member.send(helpCommand);
        message.channel.send(':white_check_mark:  |  A DM has been sent to you with all the help necessary on the specified command!');
  
    }
    
}

module.exports.info = {

    // Set the command name.
    name: 'help'

}

function newFunction(args) {
    return `${args[0]}`;
}
