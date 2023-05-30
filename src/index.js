require("dotenv").config();
const { Client, IntentsBitField, messageLink, ActivityType} = require('discord.js');

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

    if(message.content.toLowerCase() === "im binkus" || message.content.toLowerCase() === "i'm binkus" || message.content.toLowerCase() === "i am binkus"){
        if(message.author.id === '354317183628607488'){
            message.reply("Hi Binkus!!!")
        }
        else{
            message.reply("You're not Binkus 😡")
        }
    }
})

client.on('messageCreate', (message) => {
    if(message.author.bot){
        return;
    }

    //console.log(message);
    console.log(message.mentions);
    console.log(message.content);

    //binkusid = 1100220394633433189

    if((message.content.toLowerCase().substring(0, 6) == "fuck u" || message.content.toLowerCase().substring(0, 8) == "fuck you") && message.mentions.users.has('1100220394633433189')){
        message.reply("Binkus is sad :(");
        
        client.user.setActivity({
            name: "sad music :(",
            type: ActivityType.Listening,
        });
    }
})

client.on('messageCreate', (message) => {
    if(message.author.bot){
        return;
    }

    //console.log(message);
    console.log(message.mentions);
    console.log(message.content);

    //binkusid = 1100220394633433189

    if((message.content.toLowerCase().substring(0, 8) == "i love u" || message.content.toLowerCase().substring(0, 10) == "i love you") && message.mentions.users.has('1100220394633433189')){
        
        if(message.author.id === '354317183628607488'){
            message.reply("Binkus loves you too :)");
        }
        else{
            message.reply("Binkus is happy :)");
        }

        client.user.setActivity({
            name: "happy times :)",
            type: ActivityType.Playing,
        })

    }

})

client.login(process.env.TOKEN);


