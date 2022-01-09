module.exports = (Discord, client, message) => {
  const { prefix } = require('../../config.json');
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).split(/ +/g);
  const cmd = args.shift().toLowerCase();
  const command = client.commands.get(cmd);
  if (!command) return;
  try {
    command.execute(client, message, args, Discord)
  } catch (e) {
    console.log(e)
    message.channel.send(`I got into an Error, Sorry!`).then(msg => {
      setTimeout(() => msg.delete(), 7000)
    })
    return;
  }
  return;
}
