// ------ SET UP ------ //



// SET UP THE BOT
const Discord = require('discord.js'); // Initialize Discord.
const client = new Discord.Client(); // Initialize the bot.

// SET UP THE DEPENDENCIES
const fs = require("fs"); // File system dependency.
const ytdl = require("ytdl-core"); // YouTube core dependency.
const Music = require('discord.js-musicbot-addon'); // Music bot dependency.

// SET UP THE COMMANDS COLLECTION
client.commands = new Discord.Collection();

// DEFINE THE PREFIX
const prefix = 'm:';

// SET BOT STATUS
client.on('ready', () => { // Condition: when the bot is online.
    client.user.setPresence({ game: { name: 'Miscat\'s videos', type: 0 } }); // Set the bot's status.
});



// ------ WELCOMING NEW MEMBERS ------ //



// WELCOME MESSAGE AND EMBED
client.on('guildMemberAdd', member => { // Condition: user joining the server.
    
    // Defining the variables.
    const welcomeChannel = client.channels.find('name', 'casual-chat'); // Create a variable referring to the selected channel.
    const embedCommands = new Discord.RichEmbed() // Create a constant referring to the embed message.
  
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
  
    // Sending the messages.
    welcomeChannel.send('<@!'+member.user.id+'>  |  **Fistbump! Welcome to the Squad!** :punch::boom:\nHope I didn\'t scare ya... Hehe. Be sure to introduce yourself in the #welcome-introductions channel to get the fun started! And if you need help the #support-group is open to you 24/7. Make yourself at home and embrace your inner fangirl and fanboy every single day!');
    member.send('**Welcome to the squad!** \nBe sure to introduce yourself in the #welcome-introductions channel to get the fun started! And if you need help the #support-group is open to you 24/7. Make yourself at home and embrace your inner fangirl and fanboy every single day!');
    member.send(':white_check_mark: | Here\'s a list of all the commands of the bot! Write "m:help [command name]" to get specific help with that command.');
    member.send(embedCommands);
      
});



// ------ MUSIC COMMANDS ------ //



// SET UP THE MUSIC CLIENT.
const music = new Music(client, {
  
    youtubeKey: 'AIzaSyCom6F7OFxjJYHDNv6w_3Y2fP3CrTan9JU',
    prefix: 'm:',
    helpCmd: 'mhelp',
    messageHelp: true,
    botOwner: '380484645281595392',
    ownerOverMember: true,
    enableQueueStat: true,
    logging: true
  
});



// ------ COMMANDS ------ //



// READ THE OWNER COMMANDS FOLDER
fs.readdir('./cmd/owner', (err, files) => {
    if(err) console.error(err);
  
    // Filter .js files.
    let jsFiles = files.filter( f => f.split('.').pop() === 'js');
    if(jsFiles.length <= 0) {
      console.log('No commands to load.');
      return;
    }
  
    // Load the commands
    console.log(`Loading ${jsFiles.length} owner commands.`);
    jsFiles.forEach((f, i) => {
  
      let props = require(`./cmd/owner/${f}`);
      console.log(`${i + 1}: ${f} loaded.`);
      client.commands.set(props.info.name, props);
  
    });
  
});

// READ THE ADMIN COMMANDS FOLDER
fs.readdir('./cmd/admin', (err, files) => {
    if(err) console.error(err);
  
    // Filter .js files.
    let jsFiles = files.filter( f => f.split('.').pop() === 'js');
    if(jsFiles.length <= 0) {
      console.log('No commands to load.');
      return;
    }
  
    // Load the commands
    console.log(`Loading ${jsFiles.length} admin commands.`);
    jsFiles.forEach((f, i) => {
  
      let props = require(`./cmd/admin/${f}`);
      console.log(`${i + 1}: ${f} loaded.`);
      client.commands.set(props.info.name, props);
  
    });
  
});

// READ THE REGULAR COMMANDS FOLDER
fs.readdir('./cmd/regular', (err, files) => {
    if(err) console.error(err);
  
    // Filter .js files.
    let jsFiles = files.filter( f => f.split('.').pop() === 'js');
    if(jsFiles.length <= 0) {
      console.log('No commands to load.');
      return;
    }
  
    // Load the commands
    console.log(`Loading ${jsFiles.length} regular commands.`);
    jsFiles.forEach((f, i) => {
  
      let props = require(`./cmd/regular/${f}`);
      console.log(`${i + 1}: ${f} loaded.`);
      client.commands.set(props.info.name, props);
  
    });
  
});

// READ THE INTERACTION COMMANDS FOLDER
fs.readdir('./cmd/interaction', (err, files) => {
  if(err) console.error(err);

  // Filter .js files.
  let jsFiles = files.filter( f => f.split('.').pop() === 'js');
  if(jsFiles.length <= 0) {
    console.log('No commands to load.');
    return;
  }

  // Load the commands
  console.log(`Loading ${jsFiles.length} interaction commands.`);
  jsFiles.forEach((f, i) => {

    let props = require(`./cmd/interaction/${f}`);
    console.log(`${i + 1}: ${f} loaded.`);
    client.commands.set(props.info.name, props);

  });

});

// READ THE FUN COMMANDS FOLDER
fs.readdir('./cmd/fun', (err, files) => {
  if(err) console.error(err);

  // Filter .js files.
  let jsFiles = files.filter( f => f.split('.').pop() === 'js');
  if(jsFiles.length <= 0) {
    console.log('No commands to load.');
    return;
  }

  // Load the commands
  console.log(`Loading ${jsFiles.length} fun commands.`);
  jsFiles.forEach((f, i) => {

    let props = require(`./cmd/fun/${f}`);
    console.log(`${i + 1}: ${f} loaded.`);
    client.commands.set(props.info.name, props);

  });

});

// COMMAND HANDLER
client.on("message", async message => {

    // Ignore other bots, including itself.
    if(message.author.bot) return;
   
    // Ignore messages without prefix.
    if(message.content.indexOf(prefix) !== 0) return;
 
    // Separate the "command" name, and our "arguments" for the command.
    let raw = message.content.split(/ +/g);
    let command = raw[0];
    let args = raw.slice(1);
 
    // Define the command variable.
    var cmd = client.commands.get(command.slice(prefix.length));
 
    // Check if the command exists.
    if (cmd)
     cmd.run(client, message, args);
 
});



// ------ BOT TOKEN ------ //



// GET THE BOT'S TOKEN, DON'T CHANGE
client.login(process.env.BOT_TOKEN);