import dotenv from 'dotenv'
import fetch from 'node-fetch'
import { config } from '../data/config.js'

dotenv.config()

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
  const weatherApiKey = `${process.env.WEATHER_API}`
  const weatherLinkFull = weatherLink + cityName + weatherUnits + weatherApiKey
  const response = await fetch(weatherLinkFull)
  const data = await response.json()
  return (
    // eslint-disable-next-line prettier/prettier
    `It is ${data.main.temp} degrees fahrenheit in ${cityNameCapsRem}.`
  )
}
// Weather Pull
export const weatherAPI = msg => {
  const args = msg.content.substring(config.prefix.length).split(' ')
  if (msg.author.bot) {
    return
  }
  if (msg.content.includes(`${config.prefix}weather`)) {
    if (!args[1]) {
      msg.channel.send('Please enter the command again and include a city.')
    }
    const city = msg.content
      .slice(9)
      .trim()
      .split(/ +/g)
    const command = city.join(' ').toLowerCase()
    const commandString = JSON.stringify(command)
    getWeather(commandString).then(temp => msg.channel.send(temp))
  }
}

export default weatherAPI
