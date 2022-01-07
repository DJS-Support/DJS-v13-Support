const { Client, Intents } = require('discord.js');

const allIntents = Intents.all();
const { token, prefix } = require('./config.json');

const client = new Client({ intents: allIntents });

client.once('ready', (client) =>{
  console.log(`Logged in as ${client.user.tag}`);
}

client.login(token);
