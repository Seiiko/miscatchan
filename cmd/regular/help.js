const Discord = require('discord.js');
const name = require('./info/name')
const desc = require('./info/description')
const usage = require('./info/usage')

module.exports.run = async (client, message, args) => {

    // General help command, no command specified.
    if (!args[0]) {

        const embedHelp = new Discord.RichEmbed()
  
          .setTitle('Check out Sei\'s YouTube channel.')
          .setAuthor('Nova   |   Help', 'https://cdn.discordapp.com/attachments/419222687525896202/422352880985440257/luminus_bot_stars.png')
  
          .setColor('#7d4586')
          .setDescription('For help with a specific command, type \'.help [command]\'.')
  
          .setFooter('Nova, the universal magic bot. Made by Sei.', 'https://cdn.discordapp.com/attachments/419222687525896202/422352880985440257/luminus_bot_stars.png')
  
          .setURL('https://www.youtube.com/c/seiitunes')
  
          .addBlankField(true)
  
          .addField('Regular Commands',
          '.avatar   |   .help   |   .iam   |   .info   |   .ping   |   .report')
  
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
          
          .addField('NSFW Commands',
          '.boobs   |   .butt   |   .e621   |   .gelbooru   |   .hentai   |   .konachan   |   .rule34   |   .vagina')
  
          .addBlankField(true)
  
          .addField('Admin Commands',
          '.ban   |   .kick   |   .mute   |   .purge   |   .say   |   .unmute')
  
          .addBlankField(true)
      
          .addField('Bot Owner Commands',
          '.bavatar   |   .nick   |   .status   |   .utag')
  
          .addBlankField(true)
  
        message.member.send(embedHelp);
        message.channel.send(":white_check_mark:  |  A DM has been sent to you with all the help necessary!");

    } else { // If a command was specified.

        let cName = name.command[args[0]];
        let cDesc = desc.command[args[0]];
        let cUsage = usage.command[args[0]];

        if(cName == null)
            return message.channel.send(':interrobang:  |  Please provide a valid command!\n:interrobang:  |  **Usage:** .help [command]');

        const helpCommand = new Discord.RichEmbed()
  
            .setAuthor("Nova   |   Help", "https://cdn.discordapp.com/attachments/419222687525896202/422352880985440257/luminus_bot_stars.png")
    
            .setColor("#7d4586")
    
            .setFooter("Nova, the universal magic bot. Made by Sei.", "https://cdn.discordapp.com/attachments/419222687525896202/422352880985440257/luminus_bot_stars.png")

            .addBlankField(true)
    
            .addField('The ' + cName + ' command.',
            cDesc)

            .addBlankField(true)

            .addField("Usage:",
            cUsage)
            
            .addBlankField(true)
  
        message.member.send(helpCommand);
        message.channel.send(":white_check_mark:  |  A DM has been sent to you with all the help necessary on the specified command!");
  
    }
    
}

module.exports.info = {

    // Set the command name.
    name: "help"

}

function newFunction(args) {
    return `${args[0]}`;
}
