import { config } from '../data/config.js'

export const commandOptions = msg => {
  const args = msg.content.substring(config.prefix.length).split(' ')
  if (!args[1]) {
    msg.channel.send(
      '```You can enter the following commands:\n\nCoding Commands:\n1: #algorithms\n2: #js-loops\n3: #js-methods\n4: #leetcode\n\nOther Commands:\n1: #inspire\n2: #coinflip\n3: #ping\n4: #rps\n5: #weather```'
    )
  }
}

export default commandOptions
