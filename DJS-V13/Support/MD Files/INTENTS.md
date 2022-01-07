## Valid Intents-
```javascript
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

## Intent Related Issues
- [ ] If you get an Error like **:**
```
Invalid Bitfield or Flag provided
``` 
Compare your intents to the list above, if your intents aren't on that list they're invalid. Or if they're on that list check you typed it correctly **CAP SENSITIVE**

- [ ]  Or, If you get an Error like **:**
```
Priviliged Intents are not enabled for the Client
```

- Go to the [Discord Developer Portal](https://discord.com/developers/applications)
- Click on YOUR Bot Application
- Go to the "Bot" Section
- There should be a section with the Heading **Priviliged Intents**, there should be three buttons in that section.
  Toggle all three there, that should fix the issue.
  [For More Information on Intents click Here](https://discord.com/developers/docs/topics/gateway) 
