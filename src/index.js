const Discord = require("discord.js");
const { loadCommands, loadEvents } = require("./classes/Client");
const { log } = require("./classes/Client");

const client = new Discord.Client();

client.config = require("../settings");

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.funcs = {};

client.login(client.config.token);

const init = async () => {
  client.startTime = new Date();
  client.funcs.log = log;
  await loadCommands(client);
  await loadEvents(client);
};

init();

process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception: ", err);
});

process.on("unhandledRejection", (err) => {
  console.error("Uncaught Promise Error: ", err);
});
