const path = require('path');
module.exports = {
    name: path.basename(__filename).split('.').slice(0, -1).join('.'),
    description: '',
    args: true,
    execute(client, message, args) {

        const Discord = require('discord.js');
        const embedMessage = new Discord.RichEmbed()
            .setColor('#0099ff')
            .setTitle('Commands List');

        // command[0] - key
        // command[1] - module

        let generalCommandMessage = '';
        for (const command of client.generalCommand) {
            generalCommandMessage += `**${command[0]}** - ${command[1].description}`;
            generalCommandMessage += '\n\n';
        }
        embedMessage.addField('__**General Commands**__', `${generalCommandMessage}`);

        let personCommandMessage = '';
        for (const command of client.personalCommand) {
            personCommandMessage += `**${command[0]}** - ${command[1].description}`;
            personCommandMessage += '\n\n';
        }
        embedMessage.addField('__**Person Commands**__', `${personCommandMessage}`);

        let serverCommandMessage = '';
        for (const command of client.serverCommand) {
            serverCommandMessage += `**${command[0]}** - ${command[1].description}`;
            serverCommandMessage += '\n\n';
        }
        embedMessage.addField('__**Server Commands**__', `${serverCommandMessage}`);

        message.channel.send(embedMessage);
    },
};