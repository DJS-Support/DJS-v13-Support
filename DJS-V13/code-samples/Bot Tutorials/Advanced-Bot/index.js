const { Client } = require('discord.js');
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
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('js'))
for (const file of eventFiles) { //Making a Loop for Each of the File
  const event = require(`../events/${file}`); //Loading the File
  if (event.name) { //So that it doesnt crash
    if (event.disabled) continue; //If we want to disable the event, we can use 'disabled: true' in the event config
    if (event.once) { //The difference between once and on is, once runs only for one time, on can be used infinitely
      client.once(event.name, (...args) => event.execute(...args, client)); // Requiring the params, as they all have different parameters
    } else {
      if (event.disabled) continue; //Why not check it again
      client.on(event.name, (...args) => event.execute(...args, client)); //Doing the same thing, but instead of 'client.once', we used 'client.on'
    }
  }
}
client.login(token)
