const Discord = require('discord.js')
const { prefix } = require("../config.json")
module.exports = {
  name: 'messageCreate',
  description: 'When a Message is created',
  execute(message, client) { //Because the MESSAGE event gives 1 parameter 'msg' 
    try {
      const args = message.content.slice(prefix.length).trim().split(/ +/g)
      const commandName = args.shift.toLowerCase()
      if (commandName === 'ping') {
        message.reply('Pong')
      } else if (commandName === 'embed') {
        const embed = new Discord.MessageEmbed() //Making a new Embed from the Discord Package
          .setTitle('Rules of this Server')
          .setDescription('The Rules that you want\nUsing the \\n character, you can make a new Line')
          .setFooter('The Footer')
        message.reply({ embeds: [embed] })
        //And thats it!
        //For more information on Embeds, read the README file below
      }
    } catch (error) {
      console.error(error);
    }
  },
};