import { config } from './data/config.js'
import { pingPong } from './commands/ping.js'
import { leetCode } from './commands/leetcode.js'
import { jsMethods, jsLoops } from './commands/javascriptdefs.js'
import { inspireBot } from './commands/inspire.js'
import { sadWords } from './commands/sadwords.js'
import { rPS } from './commands/rps.js'
import { coinFlip } from './commands/coinflip.js'
import { weatherAPI } from './commands/weather.js'
import { algorithms } from './commands/algorithms.js'
import { commandOptions } from './commands/commandOptions.js'
import { sadText, encouragements } from './commands/sadwords.js'

const commands = {
	'ping': pingPong,
	'leetcode': leetCode,
	'js-methods': jsMethods,
	'js-loops': jsLoops,
	'inspire': inspireBot,
	'sad': sadWords,
	'rps': rPS,
	'coinflip': coinFlip,
	'weather': weatherAPI,
	'algorithms': algorithms,
	'commands': commandOptions
}

export const commandHandler = (msg) => {
	if (msg.author.bot) {
		return
	}
	if (sadText.some(word => msg.content.includes(word)))  {
		return commands['sad'](msg);
	} 
	const args = msg.content.substring(config.prefix.length).split(' ')
	let command = args[0].toString();
	commands[command](msg);
}