import fetch from 'node-fetch'
import Discord, { Message } from 'discord.js'
import axios from 'axios'

import { config } from './data/config.js'

const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents })
const prefix = '#';

// Logging into my Disord Bot
client.login(config.token)
// Bot is Online Notice when using Node.js
client.on('ready', () => {
  console.log('Bot is online')
})
// Sad Words for Motivational Bot
const sadWords = ['sad', 'depressed', 'unhappy', 'angry']
const encouragements = ['Cheer up!', 'Keep Going!', 'You rock!']
// Ping and Pong Response
client.on('messageCreate', msg => {
  if (msg.content === prefix + 'ping') {
    msg.reply('pong')
  }
})
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
// Messages Code
client.on('messageCreate', msg => {
  let args = msg.content.substring(prefix.length).split(' ');
// Inpsire
  if (msg.author.bot) return
  if (msg.content === prefix + 'inspire') {
    getQuote().then(quote => msg.channel.send(quote))
  }
  if (sadWords.some(word => msg.content.includes(word))) {
    const encouragement =
      encouragements[Math.floor(Math.random() * encouragements.length)]
    msg.reply(encouragement)
  }
// Rock, Paper, Scissors
  if (msg.content.includes(prefix + 'rps')) {
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
// Weather Pull
  if (msg.content.includes(prefix + 'weather')) {
    if (!args[1]) {
      return msg.channel.send('Please enter the command again and include a city.');
    }
    const city = msg.content
      .slice(9)
      .trim()
      .split(/ +/g)
    const command = city.join(' ').toLowerCase()
    const commandString = JSON.stringify(command)
    getWeather(commandString).then(temp => msg.channel.send(temp))
  }
// Coinflip 
if (msg.content.includes(prefix + 'coinflip')) {
  let number = Math.floor(Math.random() * 2);
  if (number == 1) {
    msg.channel.send('Heads!');
  } else (msg.channel.send('Tails!')); 
}
})
// Weather Function 
async function getWeather(arg1) {
  // Removing Quotes
  const cityName = arg1.replace(/["]+/g, '')
  // Capitalizing Each Word for City Titles
  const cityNameCaps = cityName.split(' ')
  for (let i = 0; i < cityNameCaps.length; i += 1) {
    cityNameCaps[i] =
      cityNameCaps[i][0].toUpperCase() + cityNameCaps[i].substr(1)
  }
  const cityNameCapsRem = cityNameCaps.join(' ')
  // Concating API Link for API Request
  const weatherLink = 'https://api.openweathermap.org/data/2.5/weather?q='
  const weatherUnits = '&units=imperial'
  const weatherApiKey = '&appid=0eed50cd5ca81be23ba0c10b6d5a9373'
  const weatherLinkFull = weatherLink + cityName + weatherUnits + weatherApiKey
  const response = await fetch(weatherLinkFull)
  const data = await response.json()
  return (
    'It is ' + data.main.temp + ' degrees in ' + cityNameCapsRem + '.'
  )
}
