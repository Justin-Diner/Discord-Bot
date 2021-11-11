import { config } from '../data/config.js'
import fetch from 'node-fetch'

export const inspireBot = (msg) => {
  if (msg.content.includes(config.prefix + 'inspire')) { 
    if (msg.author.bot) {
    return 
    } else {
    getQuote().then(quote => msg.channel.send(quote))
    }
  }
}

// Returning quotes on the Motivational Bot (Connecting to Zenquotes API)
function getQuote() {
  return fetch('https://zenquotes.io/api/random')
  .then(res => {
    return res.json()
    })
  .then(data => {
    return data[0]['q'] + ' - ' + data[0]['a']
    })
  }