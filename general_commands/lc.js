const path = require('path');
const constants = require('consts');
const discord = require('discord.js');
module.exports = {
    name: path.basename(__filename).split('.').slice(0, -1).join('.'),
    help: 'Doesn\'t get a input',
    description: 'Returns list the bot\'s commands.',
    args: true,
    execute(client, message, args) {
        const embedCommandOptionsMessage = new discord.RichEmbed()
            .setColor('#ff0000') // RED
            .setTitle(':tools:  Commands\' Options');


        commandOptionsMessage = `\`${constants.COMMAND_OPTION_ADD}\`: ${constants.COMMAND_OPTION_ADD_DESCRIPTION}.`;
        commandOptionsMessage += '\n';
        commandOptionsMessage += `\`${constants.COMMAND_OPTION_DONT_CHANGE}\`: ${constants.COMMAND_OPTION_DONT_CHANGE_DESCRIPTION}`;
        commandOptionsMessage += '\n';
        commandOptionsMessage += `\`${constants.COMMAND_OPTION_ALL}\`: ${constants.COMMAND_OPTION_ALL_DESCRIPTION}`;
        embedCommandOptionsMessage.setDescription(commandOptionsMessage);
        message.channel.send(embedCommandOptionsMessage);

        message.channel.send(command_list_embed_message(client.generalCommand, ':globe_with_meridians: General Commands - Called from anywhere', '#ffff00')); // Yellow

        message.channel.send(command_list_embed_message(client.personalCommand, ':robot: Personal Commands - Called from DM', '#00ff00')); // Green

        message.channel.send(command_list_embed_message(client.serverCommand, ':desktop: Server Commands - Called from Server', '#00ffff')); // Cyan
    },
};

/**
 * Create a RichEmbed for the commands given
 * @param {discord.Collection} commands - The commands which will be in the list
 * @param {string} title - Title if the RichEmbed
 * @param {string} color - Color of the RichEmbed
 * @returns {discord.RichEmbed} - The RichEmbed which was created and defined from the given commands, title, color
 */
function command_list_embed_message(commands, title, color) {
    const embed = new discord.RichEmbed()
        .setColor(color)
        .setTitle(title);

    // command[0] - key
    // command[1] - module
    let messageDescription = '';
    for (const com of commands) {
        messageDescription += `\`${com[0]}\`: ${com[1].description}`;
        messageDescription += '\n\n';
    }
    embed.setDescription(messageDescription);
    return embed;
}