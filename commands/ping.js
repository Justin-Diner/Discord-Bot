// Ping and Pong Response
export const pingPong = msg => {
  if (msg.content === prefix + 'ping') {
    msg.reply('pong')
  }
}
