const { Client, Intents } = require('discord.js');

const { token, prefix } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', (client) =>{
  console.log(`Logged in as ${client.user.tag}`);
}

client.login(token);
