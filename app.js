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

client.on('messageCreate', message => {
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
client.on("messageCreate", msg => {
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

client.on("messageCreate", msg => {
    if (msg.author.bot) return 

    if (msg.content === "$inspire") {
            getQuote().then(quote => msg.channel.send(quote))
        }

    if (sadWords.some(word => msg.content.includes(word))) {
        const encouragement = encouragements[Math.floor(Math.random() * encouragements.length)]
        msg.reply(encouragement)
        }
    
    if (msg.content.includes("#weather")) {
        const args = msg.content.slice(9).trim().split(/ +/g);
        const command = args.join(" ").toLowerCase();
        const commandString = JSON.stringify(command);
        getWeather(commandString).then(temp => msg.channel.send(temp));
        } 
    })

    //Example Link = https://api.openweathermap.org/data/2.5/weather?q=miami&units=imperial&appid=0eed50cd5ca81be23ba0c10b6d5a9373"
    async function getWeather(arg1) {
        let cityName = arg1.replace(/["]+/g, '');
        let cityNameCaps = cityName.split(" ");
        for (let i = 0; i < cityNameCaps.length; i++) {
            cityNameCaps[i] = cityNameCaps[i][0].toUpperCase() + cityNameCaps[i].substr(1);
        }
        let cityNameCapsRem = cityNameCaps.join(' ');
        let weatherLink = "https://api.openweathermap.org/data/2.5/weather?q=";
        let weatherUnits = '&units=imperial';
        let weatherApiKey = '&appid=0eed50cd5ca81be23ba0c10b6d5a9373'
        let weatherLinkFull = weatherLink + cityName + weatherUnits + weatherApiKey;
        const response = await fetch(weatherLinkFull);
        const data = await response.json();
        console.log(weatherLinkFull);
        return "It is " + data["main"]["temp"] + " degrees in " + cityNameCapsRem + ".";
    } 




