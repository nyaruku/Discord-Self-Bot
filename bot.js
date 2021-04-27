function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
let token = "YOUR_TOKEN";
let prefix = ">";
let BotVersion = "Test Bot";








client.on('ready', () => {
    //client.channels.cache.get(`630995793670701065`).send(`Ready...`)
    console.log(`Logged in as ${client.user.tag}!`);
    //	client.channels.cache.get(`630995793670701065`).send(`Logged in as ${client.user.tag}!`)
    client.user.setActivity(">=help | " + BotVersion);
});

client.on('message', msg => {
  

    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (msg.content === prefix + 'ping') {
        msg.reply(`Latency is ${Date.now() - msg.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);

    }
    if (msg.content.startsWith(prefix + 'help')) {
        if (!args.length) {
            // HELP
            const helpEmbed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Help')

             
                .setDescription('Here is a list of avaible Commands.')
           

                .addFields(
                    {
                        name: ">=help",
                        value: "Shows this message.",
                    },
                    {
                        name: ">=ping",
                        value: "Will show latency.",
                        inline: false
                    },


                    {
                        name: ">=roll",
                        value: "Will roll random number between 0 and 100",
                        inline: false
                    },
                    {
                        name: ">=gay",
                        value: "Shows in % how gay u are.",
                        inline: false
                    },


                )

                .setTimestamp()
                .setFooter('Do >=help (command) | for more help');
// ENDHELP
            msg.reply(helpEmbed);
            
            
        }
     
        else {
            return msg.reply("This command doesnt exist.");
        }
    }

    if (msg.content === prefix + 'gay') {
        msg.reply("You are: " + getRandomInt(100) + "% gay.")
    }

    if (msg.content.startsWith(prefix + 'roll')) {
        const args = msg.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        if (!args.length) {
            msg.reply(`${msg.author}` + " rolled: " + getRandomInt(100))
        }
        else {
            try {
                msg.reply(`${msg.author}` + " rolled: " + getRandomInt(args[0]))
            } catch (e) {
                return msg.reply(e.msg);
            }
        }
    }


 

    
    
   

}
)

client.login(token);