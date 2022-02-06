const fs = require('fs');

module.exports = (client, Discord) => {
  const commandFiles = fs.readdirSync('../commands/').filter(file => file.endsWith('.js'));

  for (const file of commandFiles) {
    const command = require(`../commands/${file}`);
    let n = file.split(".")[0]
    let files = n.replace(".js", "");
    if (command.name) {
      client.commands.set(command.name, command);
      console.log(`${files} Was Loaded!`)
    } else {
      console.log(`${n} was not loaded because the command Name is missing!`)
      continue;
    }
  }
}
