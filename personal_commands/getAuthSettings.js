const path = require('path');
module.exports = {
    name: path.basename(__filename).split('.').slice(0, -1).join('.'),
    description: '',
    args: true,
    execute(client, message, args) {
        const authorizationCommandManager = require('authorization_command_manager');
        const authorizationSettings = new authorizationCommandManager.authorizationSettings();

        const emptySettingMessage = '*Empty Setting*';

        let messageSend = '';
        if (args.length === 0) { // Return all
            for (const prop in authorizationSettings.authSettingsArr) {
                messageSend += `**${prop}** \n`;
                if (authorizationSettings.authSettingsArr[prop].length > 0) {
                    messageSend += '``` ';
                    for (let innerIndex = 0; innerIndex < authorizationSettings.authSettingsArr[prop].length; innerIndex++) {
                        const innerProp = authorizationSettings.authSettingsArr[prop][innerIndex];
                        messageSend += `${innerProp}, `;
                    }
                    messageSend = messageSend.substring(0, messageSend.length - 2); // remove last 2 chars which are ", "
                    messageSend += '```';
                } else {
                    messageSend += emptySettingMessage;
                }
                messageSend += '\n\n';
            }
        } else { // Givin spesific settings
            for (let index = 0; index < args.length; index++) {
                const prop = args[index];
                if (authorizationSettings.authSettingsArr[prop] !== undefined) {
                    messageSend += `**${prop}**\n`;
                    if (authorizationSettings.authSettingsArr[prop].length > 0) {
                        messageSend += '```';
                        for (let innerIndex = 0; innerIndex < authorizationSettings.authSettingsArr[prop].length; innerIndex++) {
                            const innerProp = authorizationSettings.authSettingsArr[prop][innerIndex];
                            messageSend += `${innerProp}, `;
                        }
                        messageSend = messageSend.substring(0, messageSend.length - 2); // remove last 2 chars which are ", "
                        messageSend += '```';
                    } else {
                        messageSend += emptySettingMessage;
                    }
                    messageSend += '\n\n';
                }
            }
        }

        message.channel.send(messageSend);
    },
};
