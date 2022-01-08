const Discord = require('discord.js')
module.exports = {
  name: "ready", //This will be used as 'client.on('ready', () => {})'
  description: "When the Bot starts up", //Just to be user friendly, this isnt used ANYWHERE
  once: true, //Because the ready event needs to be fired once only
  execute(client) {
    console.log(`Ready!\nLogged in as ${client.user.tag}`)
  }
}