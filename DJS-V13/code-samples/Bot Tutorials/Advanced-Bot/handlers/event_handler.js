const fs = require('fs');

module.exports = (client, Discord) => {
   const load_dir = (dirs) => {
      const eventFiles = fs.readdirSync(`../events/${dirs}`).filter(file => file.endsWith('.js'));
      for (const file of eventFiles) {
         const event = require(`../events/${dirs}/${file}`);
         client.on(event.name, event.bind(null, Discord, client));
      }
   }
   ['client', 'guild'].forEach(e => load_dir(e));
}
