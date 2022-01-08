## Try and Catch Blocks

```
 try {
   //Some Code
 } catch (error) {
   console.error(error)
 }
```

Try and catch blocks are a Very good way to handle errors
The code that u write in the 'try' block, gets executed
And if it throws any Error, it doesnt crashes the bot
Instead it does what u wanna do

> SOMETIMES it can crash the bot, but thats rare.
You can use Try catch blocks anywhere, and in Js promises, u can use '.then and .catch'
See the Other bot example for the Promisefied version (Basic Bot)

## Embeds

```
const { MessageEmbed } = require("discord.js")
const embed = new MessageEmbed()
.setTitle("This is a Title")
.setDescription("This is a Description")
.setFooter("This is a Footer")
message.reply({embeds: [embed]})
```

You can look up [This](https://discordjs.guide/popular-topics/embeds.html#embed-preview) link for more information on Embed Objects!
