import fetch from 'node-fetch'
import Discord, { Message } from 'discord.js'
import axios from 'axios'

import { config } from './data/config.js';
/* import { pingPong } from './commands/ping.js'; */

const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents })

const prefix = config.prefix;

// Logging into my Disord Bot
client.login(config.token)
// Bot is Online Notice when using Node.js
client.on('ready', () => {
  console.log('Bot is online')
})
// Sad Words for Motivational Bot
const sadWords = ['sad', 'depressed', 'unhappy', 'angry']
const encouragements = ['Cheer up!', 'Keep Going!', 'You rock!']

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
  if (msg.content == prefix + 'clog' + args[1]) {
    let emptyString = '';
    return msg.channel.send(emptyString + args[1]);
  }
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

// Loops
  if (msg.content.includes(prefix + 'loops')) {
    if (!args[1]) {
      return msg.channel.send("```In Javascript, there are five types of loops: \n \n (1) for \n (2) for/in \n (3) for/of \n (4) while \n (5) do/while \n \n Please Choose a Loop in the following format: \"#loops for\" ```")}
      if (args[1] === "for") {
       return msg.channel.send(
        "```The for loop, loops through a block of code a number of times. The for loop has the following syntax: \n \n (statement 1; statement 2; statement 3) \n \n For example: for (let i = 0; i < 5; i++) \{ \n text += \"The number is \" + i + \"<br>\"\;\n \}```") 
      }
      if (args[1] === "for/in") {
        return msg.channel.send ("```The for/in loop iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols) including inherited enumerable properties. \n \n const object = {a: 1, b: 2, c: 3 }; \n \n for (const property in object) { \n console.log(`${property}: ${object[property]}`); \n } \n \n The expected output would be a:1, b:2, c:3```")
      }
      if (args[1] === "for/of") {
        return msg.channel.send ("```The for/of statement creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables. It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object. \n \n const array1 = {'a', 'b', 'c'}; \n \n for (const element of array1) \n {console.log(element); \n } \n \n Expected Output: 'a', 'b', 'c'```");
      }
      if (args[1] === "while") {
        return msg.channel.send ("```The while loop, loops through a block of code as long as a specified condition is true. The while loops has the following syntax: \n \n while (condition) { code to be executed \n} \n \n For example: while (i<3) { \n text += \"The number is \" + i; \n i++;} \n \n Result: \n The number is 0 \n The number is 1 \n The number is 2```");
      }
      if (args[1] === "do/while") {
        return msg.channel.send ("```The do/while statement, creates a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once. \n \n let result = '' \n let i = 0 \n \n do { i = i + 1; \n result = result + i; \n } while (i < 5); \n \n console.log(result); \n Expected Result: \"12345\"```");
      }
  }
// Leetcode commands
  if (msg.content.includes(prefix + 'leetcode')) {
      if (!args[1]) {
      return msg.channel.send("Please enter the command with a type of problem: \n 1. #leetcode: two sum");
      } 
      if (!args[3]) {
      return msg.channel.send("Please provide a number in the following format: \n #leetcode two sum [array] target")
      }
      if (msg.content.includes(args[3])) {
      //RegEx for the nums argument array
      let randomVar = msg.content
      let tsRegex = /\[.*?\]/g; //RegEx to Find the numbers between the []
      let regExResult = randomVar.match(tsRegex);
      let emptyString2 = '';
      let regExResultsString = emptyString2 + regExResult; //Array result in a String
      let regExWithoutSpaces = regExResultsString.replace(/ /g, '');
      let ArrayNums = JSON.parse(regExWithoutSpaces); 
      let nums = ArrayNums;
      //Finding the target within the message
      let emptyString3 = '';
      let targetFinal = emptyString3 + randomVar;
      let targetNum = targetFinal.substr(targetFinal.indexOf("]") + 1);
      let target = targetNum; 
      twoSum(nums, target);
        function twoSum(nums, target) {
          for(let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                let sum = nums[i] + nums[j];
                if (sum == target) {
                  let finalAnswer = [i, j];
                  let finalAnswerString = JSON.stringify(finalAnswer);
                  msg.channel.send(finalAnswerString);
                }
            }
          }
        };
      };
    }
});

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

