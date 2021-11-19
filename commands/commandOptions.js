import { config } from '../data/config.js'

export const commandOptions = msg => {
  if (msg.content.includes(config.prefix + 'commands')) {
    if (msg.author.bot) {
      return
    }
	const args = msg.content.substring(config.prefix.length).split(' ')
    if (!args[1]) {
      msg.channel.send('```You can enter the following commands:\n\n1: #algorithms\n2: #coinflip\n3: #inspire\n4 :#js-methods\n5: #js-loops\n6: #leetcode\n7: #ping\n8: #rps\n10: #weather ```')
      }
  }
}