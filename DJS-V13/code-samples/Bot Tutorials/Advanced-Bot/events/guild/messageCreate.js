module.exports = (Discord, client, message) =>{
  const { prefix } = require('../../config.json');
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/g);
  const cmd = args.shift().toLowerCase();

  const command = client.commands.get(cmd);

  if(command) command.execute(client, message, args, Discord);
}