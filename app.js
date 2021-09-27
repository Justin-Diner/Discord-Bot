const Discord = require("discord.js");
const fetch = require("node-fetch");
const config = require("./data/config.json");
const intents = new Discord.Intents(32767);
const client = new Discord.Client({ intents });

const sadWords = ["sad", "depressed", "unhappy", "angry"];
const encouragements = [
    "Cheer up!",
    "Keep Going!",
    "You rock!"
];

function getQuote() {
    return fetch("https://zenquotes.io/api/random")
    .then(res => {
        return res.json()
    })
    .then(data => {
        return data[0]["q"]+ " -" + data[0]["a"]
    })
}

client.login(config.token);

client.on("ready", () => {
    console.log('Bot is online')
})

client.on("message", msg => {
    if (msg.content === "ping") {
        msg.reply("pong")
    }
})

client.on("message", msg => {
    if (msg.author.bot) return 

    if (msg.content === "$inspire") {
            getQuote().then(quote => msg.channel.send(quote))
        }

    if (sadWords.some(word => msg.content.includes(word))) {
        const encouragement = encouragements[Math.floor(Math.random() * encouragements.length)]
        msg.reply(encouragement)
    }
    }
)


