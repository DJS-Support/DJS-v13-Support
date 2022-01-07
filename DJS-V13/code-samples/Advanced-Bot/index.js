const { Client } = require('discord.js');

const { token, prefix } = require('./config.json');

const client = new Client({
  intents: [
    "GUILDS",
    "GUILD_MESSAGES"
  ]
}) // Making the client and specifying the intents

client.once('ready', (client) =>{
  console.log(`Logged in as ${client.user.tag}`);
}

client.login(token);
