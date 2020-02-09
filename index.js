const log_writer = require('log_writer');
const constants = require('consts');
const path = require('path');
const fs = require('fs');

const lw = new log_writer(constants.LOG_DIRECTORY_PATH);

const Discord = require('discord.js');
lw.log_message('load', 'Loaded discord.js');

lw.log_message('start', 'Creating client');
const client = new Discord.Client();

const commandsIdManager = require('commands_id_manager');
lw.log_message('start', 'Loaded commands_id_manager');
const comIdManager = new commandsIdManager();

lw.log_message('start', 'Syncing Server Commands');
client.serverCommand = new Discord.Collection();
const serverCommandFiles = fs.readdirSync(constants.SERVER_COMMANDS_DIRECTORY_PATH).filter(file => file.endsWith('.js'));

for (const file of serverCommandFiles) {
  const command = require(constants.SERVER_COMMANDS_DIRECTORY_PATH + `\\${file}`);
  lw.log_message('start', '---' + command.name + ' was synced');
  client.serverCommand.set(command.name, command);
  if (!comIdManager.has_id(command.name)) {
    comIdManager.create_id(command.name);
  }
}

lw.log_message('start', 'Syncing Personal Commands');
client.personalCommand = new Discord.Collection();
const personalCommandFiles = fs.readdirSync(constants.PERSONAL_COMMANDS_DIRECTORY_PATH).filter(file => file.endsWith('.js'));

for (const file of personalCommandFiles) {
  const command = require(constants.PERSONAL_COMMANDS_DIRECTORY_PATH + `\\${file}`);
  lw.log_message('start', '---' + command.name + ' was synced');
  client.personalCommand.set(command.name, command);
  if (!comIdManager.has_id(command.name)) {
    comIdManager.create_id(command.name);
  }
}

lw.log_message('start', 'Syncing General Commands');
client.generalCommand = new Discord.Collection();
const generalCommandFiles = fs.readdirSync(constants.GENERAL_COMMANDS_DIRECTORY_PATH).filter(file => file.endsWith('.js'));

for (const file of generalCommandFiles) {
  const command = require(constants.GENERAL_COMMANDS_DIRECTORY_PATH + `\\${file}`);
  lw.log_message('start', '---' + command.name + ' was synced');
  client.generalCommand.set(command.name, command);
  if (!comIdManager.has_id(command.name)) {
    comIdManager.create_id(command.name);
  }
}

const { prefix, token } = require('./config.json');

lw.log_message('start', 'Connecting to server');
client.login(token);
lw.log_message('start', 'Connected to server');

client.on('ready', function () {
  lw.log_split();
  lw.log_message('start', 'Bot is ready');
});

client.on('message', message => {
  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  try {
    lw.log_message('info', 'On message Start');

    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift();
    lw.log_message('debug', `${command} was called, with arguments: ${args}`);

    const authorizationCommandManager = require('authorization_command_manager');
    const authComManager = new authorizationCommandManager();

    const commandId = comIdManager.get_id(command);

    if (client.generalCommand.has(command)) { // Type General
      client.generalCommand.get(command).execute(client, message, args);
    } else if (message.channel.type === constants.CHANNELS_TYPES_DM) { // Type DM
      if (!client.personalCommand.has(command)) {
        error404(message);
        return;
      }

      if (authComManager.auth_dm_command(commandId, message.author)) { // Is allow to use
        // message.channel.send(`Member ${message.author.username} is allow to use the command.`);
        client.personalCommand.get(command).execute(client, message, args);
      } else { // Isn't allow to use
        // message.channel.send(`Member ${message.author.username} isn't allow to use the command.`);
      }

    } else if (message.channel.type === constants.CHANNELS_TYPES_TEXT) { // Type Text
      if (!client.serverCommand.has(command)) {
        error404(message);
        return;
      }

      if (authComManager.auth_text_command(commandId, message.member)) { // Is allow to use
        // message.channel.send(`Member ${message.member.user.username} is allow to use the command.`);
        client.serverCommand.get(command).execute(client, message, args);
      } else { // Isn't allow to use
        // message.channel.send(`Member ${message.member.user.username} isn't allow to use the command.`);
      }
    }

    lw.log_message('info', 'On message End');
  }
  catch (err) {
    lw.log_message('error', err);
  }
});

/**
 * Return a respose of command wasn't found
 * @param {Message} message - The object message from the 'message' event
 * @returns {void}
 */
function error404(message) {
  const constants = require('consts');
  if (constants.SHOW_ERORR_404) {
    message.channel.send(constants.MESSAGE_ERROR_404);
  }
}