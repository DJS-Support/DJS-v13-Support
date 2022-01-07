const Discord = require('discord.js')
//Importing the "Discord.js" npm
const config = require("./config.json") //Loading the Bot config
/**
 * Using the 'Client' class imported above to create a new Client called 'bot'
 * @param {Client} bot
 */
const client = new Discord.Client({
  intents: [
    "GUILDS",
    "GUILD_MESSAGES"
  ]
})
client.on('messageCreate', (msg) => {
  const prefix = config.prefix
  /**
 * Making the Command an Array by using basic JavaScript functions and basic Regex
 * Doing it so that we can get the Arguments later
 */
  const args = msg.content.slice(prefix.length).trim().split(/ + /g)

  //Getting the first word from the Arguments which is the Command itself
  const commandName = args.shift.toLowerCase()
  if (commandName === 'ping') {
    msg.channel.send('Pong')
  } else if (commandName === 'whois') {
    if (!args) {
      //Executed if the user who used the command did not provide any Arguments, such as an ID
      msg.reply(`Tag: ${msg.author.tag}\nID: ${msg.author.id}`) //Reply with the User's info itself
      return; //So that the command does not get executed any more
    }
    client.users.fetch(args[0]).then(user => {
      /**
       * We used fetch here because Users are not always cached, hence can result in an Error if the User is not found in the cache
       * Fetch returns a JavaScript promise, so we used '.then' to get the User
       * You can also use `bot.users.cache.get(args[0])` but it might cause problems
       */
      msg.reply(`Tag: ${user.tag}\nID: ${user.id}`)
    }).catch(error => {
      /**
       * Errors can also be received, because the ID might not be correct, hence resulting in the Error 'User not found'
       * '.catch' catches the Error, so that it does not crash the Bot
       */
      console.log(error)
      msg.reply('That User does not exist')
    })
  }
})
client.on('ready', () => {
  console.log(`Ready!\nLogged in as ${bot.user.tag}`)
})
client.login(config.token)
