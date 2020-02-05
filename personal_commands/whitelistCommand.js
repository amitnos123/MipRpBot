const path = require('path');
module.exports = {
    name: path.basename(__filename).split('.').slice(0, -1).join('.'),
    description: '',
    args: true,
    execute(client, message, args) {
        if (args.length === 0) {
            message.channel.send('No arguments were sent.');
        } else {
            const constants = require('consts');
            const commandsIdManager = require('commands_id_manager');
            const authorizationCommandManager = require('authorization_command_manager');

            const comIdManager = new commandsIdManager();
            const authComManager = new authorizationCommandManager();

            const commandId = comIdManager.get_id(this.name);

            // If auth for command doesn't exist
            if (!authComManager.auth_exists(commandId)) { authComManager.auth_create_command(commandId, constants.AUTHORIZATION_TYPE_ROLE, []); }

            if (args[0] !== constants.AUTHORIZATION_TYPE_ROLE || args[0] !== constants.AUTHORIZATION_TYPE_SETTINGS) {
                message.channel.send(`Type isn't valid. Type may be '${constants.AUTHORIZATION_TYPE_ROLE}', '${constants.AUTHORIZATION_TYPE_SETTINGS}'`);
            } else {
                authComManager.auth_update_command(commandId, args[0]);
            }
        }
    },
};
