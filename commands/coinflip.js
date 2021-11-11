import { config } from '../data/config.js'

// Coinflip 
export const coinFlip = (msg) => { 
  if (msg.content.includes(config.prefix + 'coinflip')) {
    let number = Math.floor(Math.random() * 2);
    if (number == 1) {
    msg.channel.send('Heads!');
    } else (msg.channel.send('Tails!')); 
  }
}