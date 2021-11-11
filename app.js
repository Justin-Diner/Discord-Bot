import fetch from 'node-fetch'
import axios from 'axios'
import Discord, { Message } from 'discord.js'
import { config } from './data/config.js';
import { pingPong } from './commands/ping.js'; 
import { leetCode } from './commands/leetcode.js'; 
import { jsMethods } from './commands/javascriptDefs.js';
import { jsLoops } from './commands/javascriptDefs.js';
import { inspireBot } from './commands/inspire.js';
import { sadWords } from './commands/sadwords.js';
import { rPS } from './commands/rps.js'
import { coinFlip } from './commands/coinflip.js'
import { weatherAPI } from './commands/weather.js';

const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents })

const prefix = config.prefix;

// Logging into my Disord Bot
client.login(config.token)
// Bot is Online Notice when using Node.js
client.on('ready', () => {
  console.log('Bot is online')
})

client.on('messageCreate', pingPong)
client.on('messageCreate', leetCode)
client.on('messageCreate', jsMethods);
client.on('messageCreate', jsLoops);
client.on('messageCreate', inspireBot);
client.on('messageCreate', sadWords);
client.on('messageCreate', rPS);
client.on('messageCreate', coinFlip);
client.on('messageCreate', weatherAPI);
