const path = require('path');
module.exports = {
    name: path.basename(__filename).split('.').slice(0, -1).join('.'),
    description: 'Get the all authorization settings or specific authorization settings',
    args: true,
    execute(client, message, args) {
        const authorizationCommandManager = require('authorization_command_manager');
        const authorizationSettings = new authorizationCommandManager.authorizationSettings();

        let messageSend = '';
        if (args.length === 0) { // Return all
            for (const settingName in authorizationSettings.authSettingsArr) {
                messageSend += message_single_setting(authorizationSettings.authSettingsArr[settingName], settingName);
                messageSend += '\n';
            }
        } else { // Givin spesific settings
            for (let index = 0; index < args.length; index++) {
                const settingName = args[index];
                const settingJson = authorizationSettings.get(settingName);
                if (settingJson !== undefined) {
                    messageSend += message_single_setting(settingJson, settingName);
                    messageSend += '\n';
                }
            }
        }

        message.channel.send(messageSend);
    },
};

/**
 * Function which return the message to send, for a given setting
 * @param {JSON} settingJson - Json of the setting that hold the authrazation data
 * @param {string} settingName - The name of the setting
 * @returns {string} - Return the message for a setting
 */
function message_single_setting(settingJson, settingName) {

    let message = "\`\`\`diff\n-★ " + `${settingName}\n`;

    if (settingJson.length > 0) {
        for (let innerIndex = 0; innerIndex < settingJson.length; innerIndex++) {
            const innerProp = settingJson[innerIndex];
            message += `${innerProp}, `;
        }
        message = message.substring(0, message.length - 2); // remove last 2 chars which are ", "
    } else {
        message += 'Empty';
    }
    message += "```";

    return message;
}