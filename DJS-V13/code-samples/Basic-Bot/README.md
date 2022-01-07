## Valid Intents-

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

## Some more issues related to Intents

1- If you get an Error like 'Invalid Bitfield or Flag provided', compare your intents to the List above.
There can be a small Typo causing the Issue
2- If you get an Error like 'Priviliged Intents are not enabled for the Client',

- Go to the [Discord Developer Portal](https://discord.com/developers/applications)
- Click on YOUR Bot Application
- Go to the "Bot" Section
- There should be a Section with the Heading "Priviliged Intents", there should be 3 Buttons in that Section.
  Toggle all the things there, that should fix the Issue
  [For More Information on Intents click Here](https://discord.com/developers/docs/topics/gateway)
