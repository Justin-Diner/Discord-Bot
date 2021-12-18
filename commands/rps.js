import { config } from '../data/config.js'

// Rock, Paper, Scissors
export const rPS = msg => {
  if (msg.content.includes(config.prefix + 'rps')) {
    const args = msg.content.substring(config.prefix.length).split(' ')
    const choices = ['rock', 'paper', 'scissors']
    if (!args[1]) {
      msg.channel.send('Please inlcude your choice.')
    }
    if (choices.includes(args[1])) {
      const number = Math.floor(Math.random() * 3)
      if (number === 1) {
        msg.channel.send(`TIE! We both had ${args[1].toLocaleLowerCase()}!`)
      }
      if (number === 2) {
        if (args[1].toLowerCase() === 'rock') {
          msg.channel.send('You LOSE! I had paper.')
        }
        if (args[1].toLowerCase() === 'scissors') {
          msg.channel.send('You LOSE! I had rock.')
        }
        if (args[1].toLowerCase() === 'paper') {
          msg.channel.send('You LOSE! I had scissors.')
        }
      }
      if (number === 0) {
        if (args[1].toLowerCase() === 'rock') {
          msg.channel.send('You WON! I had scissors.')
        }
        if (args[1].toLowerCase() === 'scissors') {
          msg.channel.send('You WON! I had paper.')
        }
        if (args[1].toLowerCase() === 'paper') {
          msg.channel.send('You WON! I had rock.')
        }
      }
    }
  }
}

export default rPS
