const Discord = require('discord.js')
const client = new Discord.Client({ intents: 131071 })
const { botid, token } = require("./ayarlar.json")
require("./slash")(client)

client.login(token);"MTA4MTMyNTAyNTI4NzczNzM5NQ.Gnh2XV.SdLpfS88-9qn9C639tZqhadtQgW_zfaO4JvneU"