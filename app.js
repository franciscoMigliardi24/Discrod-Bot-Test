// Require discord.js package
const Discord = require("discord.js");

// Create a new client using the new keyword
const client = new Discord.Client();

// Token of the bot
const {
    token
} = require("./token.json");

// Display a message once the bot has started
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// Check messages for a specific command
client.on("message", msg => {
    // Send back a reply when the specific command has been written
    if (msg.content === "+hola") {
        msg.reply("Hola Turros!");
    }
    
    else if (msg.content === "+panchi") {
        msg.reply("panchi el fachaaaaa");
    }

    else if (msg.content === "+lucho") {
        msg.reply("gracias lucho por dejame entrar");
    }

    else if (msg.content === "+help") {
        msg.reply("soy un bot bastante percoz y solo tengo 4 comandos: +tuVieja - +lucho - +help - +hola");
    }

    else if (msg.content === "+tuVieja") {
        msg.reply("la de quien?... MILF MILF MILF MILF");
    }

});

// Log in the bot with the token
client.login(token);