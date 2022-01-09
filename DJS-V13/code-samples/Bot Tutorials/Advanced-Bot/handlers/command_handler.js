const fs = require('fs');

module.exports = (client, Discord) => {
  const commandFiles = fs.readdirSync('../commands/').filter(file => file.endsWith('.js'));

  for (const file of commandFiles) {
    const command = require(`../commands/${file}`);
    if (command.name) {
      client.commands.set(command.name, command);
    } else {
      const n = file.split(".")[0]
      console.log(`A Command in ${n} was not loaded because something inside it is missing.`)
      continue;
    }
  }
}
