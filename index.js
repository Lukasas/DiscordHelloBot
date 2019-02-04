const Discord = require("discord.js");
var fs = require("fs");
const client = new Discord.Client();
const token = fs.readFileSync("token.txt").toString();

client.on("guildMemberAdd", member => {
	member.createDM()
	.then(dmchanel => {
		dmchanel.send(`Welcome to the server ${member.displayName}`);
	})
	.catch(reason => {
		console.error(`Couldn't send a welcome message to the user because ${reason}.`);
	});
});

client.login(token);