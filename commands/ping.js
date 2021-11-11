import { config } from '../data/config.js'

// Ping and Pong Response
export const pingPong = msg => {
  if (msg.content === config.prefix + 'ping') {
    msg.reply('pong')
  }
}
