module.exports = {
  name: 'ping',
  description: 'Replies with Pong!',
  execute(client, message, args, Discord) {
    message.reply(`Pong!\nWebsocket Ping: ${client.ws.ping}`);
  }
}
