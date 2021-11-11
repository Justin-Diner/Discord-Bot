import { config } from '../data/config.js'

const sadText = ['sad', 'depressed', 'unhappy', 'angry', 'miserable', 'depressing'];
const encouragements = ['Cheer up!', 'Keep Going!', 'You rock!'];

export const sadWords = (msg) => { 
if (sadText.some(word => msg.content.includes(word))) {
    const encouragement = encouragements[Math.floor(Math.random() * encouragements.length)];
    return msg.reply(encouragement);
  }
}