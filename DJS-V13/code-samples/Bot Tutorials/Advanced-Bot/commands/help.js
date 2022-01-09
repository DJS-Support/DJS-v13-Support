module.exports = {
  name: "help",
  description: "Shows all of my Commands!",
  execute(client, message, args, Discord) {
    const name = client.commands.map(a => {
      return `\`${a.name}\``
    })
    const config = client.config
    const embed = new Discord.MessageEmbed()
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .setTitle(`${client.user.username} Help Panel`)
      .setDescription("All of my Commands\n" + name.join(","))
      .setFooter(`Server Prefix \`${config.prefix}\``)
    message.reply({ embeds: [embed] })
  }
}