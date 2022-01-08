# Creating your first bot DJS!
**Add your bot to your server or a testing server so we can go ahead and start! [Adding Bots To Servers](https://discordjs.guide/preparations/adding-your-bot-to-servers.html#bot-invite-links)**

## Getting current modules
In your projects directory open up a console and run the command `npm i`

## Main files and Configuration files.
**"What is a token anyway?"**, a token is essentially a password for your bot account, you don't need a username you only need the Token. If your token gets leaked on the internet then others can essentially use it as it's theirs and use it for malicious purposes. So it's vital that you keep it secure to just you

## Using `config.json` to store values.
Storing data in `config.json` is common ways to have all sorts of information including tokens that can be accessed from anywhere. Create your `config.json` file in your project directory and paste in your token. You can require/import this file in all files using `require('')`
> **JSON File Code**
```json
{
  "token": "bot-token-here"
}
```
> **Usage Code**
```javascript
const { token } = require('./config.json');
```
- [ ] **If you're using GIT (GITHUB) you shouldn't commit this file and or ignore it using [.gitignore]()**

## Git and `.gitignore`
Git is a great tool to upload you code to services such as  **[Github](), [Gitlab]() and [Bitbucket]()**, these are all great places to share code with others, work on it with others and use it to upload to hosting services to hot your bot! But you don't want to accidentally upload a file with your bot token in it as we've already discussed the bad things that come with it. 

Using `.gitignore` you can specify files & directories to ignore while uploading code to any of these places. 

**[Git documentation for `.gitignore`]()**
> **EXAMPLE**
```git
node_modules
config.json
```
> **Node_modules** can be ignored as in hosting servers etc you can get them back using `npm i`

## Creating the main file
Open your code editor and create a new file, **I suggest [Visual Studio Code](https://code.visualstudio.com/download)**. You can name it any name but the most commonly used is `index.js`.

This is your basic code to startup a simple discord bot
```javascript
// Requiring the necessary classes for your bot
const Discord = require('discord.js')
const config = require("./config.json") //Loading the Bot config

// Creating a new client instance
const client = new Discord.Client({
  intents: [
    "GUILDS",
    "GUILD_MESSAGES"
  ]
})

//When your bot turns on, it will run this code 
client.once('ready', (client) => {
  console.log("Ready! Logged in as ${client.user.tag}".)
})

//Login to Discord with your client's token
client.login(token);
```
This is how you create an instance for your Discord bot and login. The `intents: [ "GUILDS", "GUILD_MESSAGES" ]` is necessary to make sure your bot works properly in DJSv13.

Open your terminal and run `node index.js` 

> **TIP**
> You can open your `package.json` file and edit the `"main": "index.js"` value to your main file, now you can just run `node .` in your terminal to start your bot!

> To close/end your bots proccess use `Ctrl + c`, this is in all terminals to end a proccess

## Result Code
This code is a basic way to create your first Discord bot, more advanced bots and code structures are in [Here!](https://github.com/DJS-Support/DJS-v13-Support/tree/main/DJS-V13/code-samples)



