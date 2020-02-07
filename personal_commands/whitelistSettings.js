const path = require('path');
module.exports = {
    name: path.basename(__filename).split('.').slice(0, -1).join('.'),
    description: '',
    args: true,
    execute(client, message, args) {
        if (args.length === 0) {
            message.channel.send('No arguments were sent.');
        } else {

            constants = require('consts');

            // Get all command's options which were sent
            let commandOptions = [];
            while (args[0].startsWith(constants.COMMAND_OPTION_PREFIX)) {
                commandOptions.push(args.shift());
            }

            // Arguments
            const setting = args[0];

            const authorizationCommandManager = require('authorization_command_manager');
            const authorizationSettings = new authorizationCommandManager.authorizationSettings();

            if (!authorizationSettings.auth_settings_exists(setting)) {
                authorizationSettings.create(setting);
            }

            for (let index = 1; index < args.length; index++) {
                const element = args[index];
                authorizationSettings.add_user(setting, element);
            }

            client.personalCommand.get('getAuthSettings').execute(client, message, [setting]); // To show the the new settings
        }
    },
};
