const Discord = require("discord.js");
var fs = require("fs");
const client = new Discord.Client();
const token = fs.readFileSync("token.txt").toString();

client.login(token);