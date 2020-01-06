const log_writer = require('log_writer');
const path = require('path');

const lw = new log_writer(path.join(__dirname, 'log'));
//lw.logSplit();

const Discord = require('discord.js');
logMessage('load', 'Loaded discord.js');

logMessage('start', 'Creating client');
const client = new Discord.Client();

client.on('ready', function() {
  logSplit();
  logMessage('start', 'Bot is ready');
});
/*

logMessage('load', 'Loading config');
const { prefix, token } = require('./config.json');



const fs = require('fs');
logMessage('start', 'Loaded fs');

client.on('message', message => {
  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) {
    nonCommandMessage(message);
    return;
  }

  try {
    logMessage('info', 'On message Start');

    const args = message.content.slice(prefix.length).split(' ');
	

    logMessage('info', 'On message End');
  }
  catch (err) {
    logMessage('error', err);
  }
});*/