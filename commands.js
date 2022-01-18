import { config } from './data/config.js'
import { pingPong } from './commands/ping.js'
import { leetCode } from './commands/leetcode.js'
import { jsMethods, jsLoops, jsClasses } from './commands/javascriptdefs.js'
import { inspireBot } from './commands/inspire.js'
import { rPS } from './commands/rps.js'
import { coinFlip } from './commands/coinflip.js'
import { weatherAPI } from './commands/weather.js'
import { algorithms } from './commands/algorithms.js'
import { commandOptions } from './commands/commandOptions.js'
import { sadText, sadWords } from './commands/sadwords.js'

const commands = {
  'ping': pingPong,
  'leetcode': leetCode,
  'js-methods': jsMethods,
  'js-loops': jsLoops,
  'js-classes': jsClasses,
  'inspire': inspireBot,
  'sad': sadWords,
  'rps': rPS,
  'coinflip': coinFlip,
  'weather': weatherAPI,
  'algorithms': algorithms,
  'commands': commandOptions
}

export const commandHandler = msg => {
  if (msg.author.bot) {
    return
  }
  try {
    if (sadText.some(word => msg.content.includes(word))) {
      commands['sad'](msg)
    }
    if (msg.content[0] !== '#') {
      return
    }
    const args = msg.content.substring(config.prefix.length).split(' ')
    const command = args[0].toString()
    commands[command](msg)
  } catch (err) {
    console.error(err)
    msg.channel.send(
      'There was an error, please type #commands for a list of eligible commands.'
    )
  }
}

export default commandHandler
