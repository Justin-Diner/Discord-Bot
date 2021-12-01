import { config } from '../data/config.js'
// Coinflip
export const coinFlip = msg => {
  if (msg.content.includes(config.prefix + 'coinflip')) {
    if (msg.author.bot) {
      return
	}
    const number = Math.floor(Math.random() * 2);
	  if (number === 1) {
		msg.channel.send('Heads!');
      } 
	else (msg.channel.send('Tails!')) 
  }
}