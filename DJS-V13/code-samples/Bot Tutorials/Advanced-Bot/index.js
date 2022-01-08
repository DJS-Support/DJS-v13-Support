const Discord = require('discord.js');
const { token, prefix } = require('./config.json');

const client = new Discord.Client({
  intents: [
    "GUILDS",
    "GUILD_MESSAGES"
  ]
}) // Making the client and specifying the intents

/**
 * Reading the Handlers Folder 
 */

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
  require(`./handlers/${handler}`)(client, Discord)
});

client.login(token)
