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
 * Using 'fs' node Module to read the Events folder
 * Then filtering out the .js Files
 */

client.commands = new Collection();

['command_handler', 'event_handler'].forEach(handler =>{
  require(`./handlers/${handler}`)(client, Discord)
});

client.login(token)
