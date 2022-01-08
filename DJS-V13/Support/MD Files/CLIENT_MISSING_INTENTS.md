**Taken from Amashi**

To answer the error that says `[CLIENT_MISSING_INTENTS]` you need to add intents to the bot.
Intents also give your bot the ability to do stuff like read guild messages or dm messages, This is new in the version DJS v13.

```javascript
const Discord = require("discord.js"); // Importing/Requiring the discord.js npm
const { Intents } = Discord; // Making it so you can call 'Intents" instead of "Discord.Intents"

const intents = new Intents (); // Making the ability to get every single intent

for(const intent of Object.keys (Intents.FLAGS)){
intents.add(intent);
}

const client = new Discord.Client ({ // Starting up a client with the valid intents
  intents: intents
});
```
^ **You can also manually specify your intents**

> Something like this
```javascript
const { Client } = require('discord.js'); // Making it so you can call 'Client' insteda of 'Discord.Client'
const client = new Client({ // Creating a client with the intents you choose
  intents: [
    "GUILDS",
    "GUILD_MESSAGES"
  ]
})
```

> And then if you need to specify only guild permissions 

```javascript
const Discord = require ("discord.js");
const { Intents } = Discord;

const intents = new Intents ();

for(const intent of Object.keys (Intents.FLAGS)){
if (!intent.includes ("GUILD")) continue;
intents.add(intent);
}

const client = new Discord.Client ({
  intents: intents
});
```

## Valid Intents-
```JavaScript
- GUILDS
- GUILD_MEMBERS
- GUILD_BANS
- GUILD_EMOJIS_AND_STICKERS
- GUILD_INTEGRATIONS
- GUILD_WEBHOOKS
- GUILD_INVITES
- GUILD_VOICE_STATES
- GUILD_PRESENCES
- GUILD_MESSAGES
- GUILD_MESSAGE_REACTIONS
- GUILD_MESSAGE_TYPING
- DIRECT_MESSAGES
- DIRECT_MESSAGE_REACTIONS
- DIRECT_MESSAGE_TYPING
- GUILD_SCHEDULED_EVENTS
```
