const Discord = require("discord.js");
const fetch = require("node-fetch");
const config = require("./data/config.json");
const intents = new Discord.Intents(32767);
const client = new Discord.Client({ intents });
const axios = require('axios');
const command = require('./command');


// Logging into my Disord Bot 
client.login(config.token);

//Bot is Online Notice when using Node.js
client.on("ready", () => {
    console.log('Bot is online')

    command(client, 'ping', (message) => {
        message.channel.send('Pong!');
    })
})


client.on('message', message => {
    if (!message.content.startsWith(prefix))
    return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase;

    if (message.content === "pong", message) {
        message.channel.send("ping");
    }
})

//Sad Words for Motivational Bot
const sadWords = ["sad", "depressed", "unhappy", "angry"];
const encouragements = [
    "Cheer up!",
    "Keep Going!",
    "You rock!"
];


// Ping and Pong Response 
client.on("message", msg => {
    if (msg.content === "ping") {
        msg.reply("pong")
    }
})

// Returning quotes on the Motivational Bot (Connecting to Zenquotes API)
function getQuote() {
    return fetch("https://zenquotes.io/api/random")
    .then(res => {
        return res.json()
    })
    .then(data => {
        return data[0]["q"]+ " - " + data[0]["a"]
    })
}

//Messages Code 
client.on("message", msg => {
    if (msg.author.bot) return 

    if (msg.content === "$inspire") {
            getQuote().then(quote => msg.channel.send(quote))
        }

    if (sadWords.some(word => msg.content.includes(word))) {
        const encouragement = encouragements[Math.floor(Math.random() * encouragements.length)]
        msg.reply(encouragement)
        }
    
    if (msg.content === "#weather") {
        getWeather().then(temp => msg.channel.send(temp));
        }
    })

    async function getWeather() {
        const response = await fetch(weatherQuery);
        const weatherData = await response.json();
        return "It is " + data["main"]["temp"] + " degrees in";
    


        /*         return fetch(weatherQuery)
        .then(res => {
            return res.json()
        })
        .then(data => {
            return "It is " + data["main"]["temp"] + " degrees in";
        })
    } */
    
/*     if (msg.content === "$weather") {
    let getWeather = async () => {
    let response = await axios.get("https://api.openweathermap.org/data/2.5/weather?" + weatherCity + unitMeasure + weatherApiKey);
    let weather = response.data
    return weather;
    }
    } */

//Example Link = https://api.openweathermap.org/data/2.5/weather?q=miami&units=imperial&appid=0eed50cd5ca81be23ba0c10b6d5a9373"
//Returning Weather on the Bot
/* let weatherVar = "#weather" + "message";
let weatherSplice = weatherVar.split(' ', 2); */
/* let weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
let weatherCity = command 
let unitMeasure = "&units=imperial";
let weatherApiKey = "&appid=0eed50cd5ca81be23ba0c10b6d5a9373";
let weatherQuery = weatherUrl + weatherCity + unitMeasure + weatherApiKey; */