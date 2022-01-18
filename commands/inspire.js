import fetch from 'node-fetch'

// Returning quotes on the Motivational Bot (Connecting to Zenquotes API)
function getQuote() {
  return fetch('https://zenquotes.io/api/random')
    .then(res => {
      return res.json()
    })
    .then(data => {
      return `${data[0]['q']} - ${data[0]['a']}`
    })
}

export const inspireBot = msg => {
  getQuote().then(quote => msg.channel.send(quote))
}

export default inspireBot
