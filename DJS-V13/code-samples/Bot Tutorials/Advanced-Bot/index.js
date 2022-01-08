const { Client, Collection } = require('discord.js');
const fs = require('fs')
const { token, prefix } = require('./config.json');

const client = new Client({
  intents: [
    "GUILDS",
    "GUILD_MESSAGES"
  ]
}) // Making the client and specifying the intents

/**
 * Reading the Handlers Folder 
 */

client.commands = new Collection();

['command_handler', 'event_handler'].forEach(handler =>{
  require(`./handlers/${handler}`)(client, Discord)
});

client.login(token)
