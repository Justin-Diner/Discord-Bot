import Discord, { Message, MessageSelectMenu } from 'discord.js'
import { config } from './data/config.js'
import { commandHandler } from './commands.js'

const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents })

// Logging into my Disord Bot
client.login(config.token)
// Bot is Online Notice when using Node.js
client.on('ready', () => {
  console.log('Bot is online')
})

client.on('messageCreate', commandHandler)
