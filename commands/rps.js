import { config } from '../data/config.js'
// Rock, Paper, Scissors

export const rPS = (msg) => {
if (msg.content.includes(config.prefix + 'rps')) {
    let args = msg.content.substring(config.prefix.length).split(' ');
    if (!args[1]) {
      return msg.channel.send('Please inlcude your choice.')
    }
    let choices = ['rock', 'paper', 'scissors'];
    if (choices.includes((args[1]).toLowerCase())) {
      let number = Math.floor(Math.random() * 3);
      if (number == 1) {
        return msg.channel.send('TIE! We both had ' + (args[1]).toLocaleLowerCase() + '!');
      }
      if (number == 2) {
        if ((args[1]).toLowerCase() == 'rock') {
          return msg.channel.send ('You LOSE! I had paper.')
        }
        if ((args[1]).toLowerCase() == 'scissors') {
          return msg.channel.send ('You LOSE! I had rock.')
        }
        if ((args[1]).toLowerCase() == 'paper') {
          return msg.channel.send ('You LOSE! I had scissors.')
        }
      }
      if (number == 0) {
        if ((args[1]).toLowerCase() == 'rock') {
          return msg.channel.send ('You WON! I had scissors.')
        }
        if ((args[1]).toLowerCase() == 'scissors') {
          return msg.channel.send ('You WON! I had paper.')
        }
        if ((args[1]).toLowerCase() == 'paper') {
          return msg.channel.send ('You WON! I had rock.')
        }
      }
    }
  }
}