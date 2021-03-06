import dotenv from 'dotenv'
import Discord, { Message, MessageSelectMenu } from 'discord.js'
import { commandHandler } from './commands.js'

dotenv.config()

const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents })

// Logging into the Disord Bot
client.login(`${process.env.BOT_TOKEN}`)
// Bot is Online Notice when using Node.js
client.on('ready', () => {
  console.log('Bot is online')
})

client.on('messageCreate', commandHandler)
