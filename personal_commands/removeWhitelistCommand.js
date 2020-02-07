const path = require('path');
module.exports = {
    name: path.basename(__filename).split('.').slice(0, -1).join('.'),
    description: '',
    args: true,
    execute(client, message, args) {
        if (args.length === 0) {
            message.channel.send('No arguments were sent.');
        } else {
            const commandName = args[0];

            const authorizationCommandManager = require('authorization_command_manager');
            const authComManager = new authorizationCommandManager();

            const commandsIdManager = require('commands_id_manager');
            const comIdManager = new commandsIdManager();

            const commandId = comIdManager.get_id(commandName);

            authComManager.auth_remove_command(commandId);

            message.channel.send('The command\'s authorization was deleted.');
        }
    },
};
