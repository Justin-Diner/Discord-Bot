import { config } from '../data/config.js'

// Ping and Pong Response
export const pingPong = msg => {
  const args = msg.content.substring(config.prefix.length).split(' ')
  if (args === 'ping') {
    msg.channel.send('pong')
  }
}

export default pingPong
