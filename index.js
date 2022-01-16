const Discord = require("discord.js"); 
const config = require(`./config.json`);
const client = new Discord.Client({
    shards: "auto",
    allowedMentions: { parse: [ ], repliedUser: false },
    intents: [ 
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
    ],
});
//Sting command :work
client.login(config.token)


client.on("ready", () => {
    console.log(`Logged in ${client.user.tag}`)
   
    require("./globaly BlackgamerYt9578//