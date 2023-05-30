require("dotenv").config();
const { Client, IntentsBitField} = require('discord.js');

const client = new Client({
    intents: [ //set of permissions a bot uses to access a set of events
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});

client.on('ready', (c) => {
    console.log(`${c.user.tag} is online.`);
})

client.on('messageCreate', (message) => {
    if(message.author.bot){
        return;
    }

    if(message.content === "binkus"){
        message.reply('bonkus');
    }
})

client.on('messageCreate', (message) => {
    if(message.author.bot){
        return;
    }

    console.log(message.content);

    if(message.content.toLowerCase() === "im binkus" || message.content.toLowerCase() === "i'm binkus" || message.content.toLowerCase() === "i am binkus"){
        if(message.author.id === '354317183628607488'){
            message.reply("Hi Binkus!!!")
        }
        else{
            message.reply("You're not Binkus 😡")
        }
    }
})

client.login(process.env.TOKEN);


