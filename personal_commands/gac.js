const path = require('path');
module.exports = {
    name: path.basename(__filename).split('.').slice(0, -1).join('.'),
    description: 'Get the authorization for all the commands or for a specific commands.',
    help: '__Input__' +
        '\n' +
        '[commandName]' +
        '\n\n' +
        '__Argument__' +
        '\n' +
        '`[commandName]` - The name of the command which it\'s authorization will be retuned.' +
        '\n' +
        ' ** If not given**, it will return for all the commands',
    args: true,
    execute(client, message, args) {
        const commandsIdManager = require('commands_id_manager');
        const authorizationCommandManager = require('authorization_command_manager');

        const authComManager = new authorizationCommandManager();
        const comIdManager = new commandsIdManager();
        let authMessageList = {};

        let sendMessage = '';

        if (args.length === 0) {
            const authList = authComManager.get();
            const commandsId = comIdManager.get_id();

            for (let prop in commandsId) {
                if (commandsId.hasOwnProperty(prop)) {
                    authMessageList[prop] = authList[commandsId[prop]];
                }
            }

            for (let key in authMessageList) {
                if (authMessageList.hasOwnProperty(key)) {
                    sendMessage += message_single_command(authMessageList[key], key);
                    sendMessage += '\n';
                }
            }
        } else {
            const commandName = args[0];
            const commandId = comIdManager.get_id(commandName);

            if (commandId === undefined) {
                message.channel.send('Command doesn\'t exist');
                return; // Finish command here
            }

            authMessageList = authComManager.get(commandId);

            sendMessage += message_single_command(authMessageList, commandName);
            sendMessage += '\n';
        }

        if (authMessageList === undefined) {
            sendMessage = 'Command doesn\'t has authorization.';
        }

        message.channel.send(sendMessage);
    },
};

/**
 * Function which return the message to send, for a given command
 * @param {JSON} commandJson - Json of the command that hold the authrazation data on the command
 * @param {string} commandName - The name of the command
 * @returns {string} - Return the message for a command
 */
function message_single_command(commandJson, commandName) {
    let message = "\`\`\`md\n★ " + `${commandName}\n`;

    for (let index = 0; index < commandName.length; index++) {
        message += '=';
    }
    message += '==\n';

    if (commandJson !== undefined) {
        message += `type = ${commandJson.type}\n`;

        if (commandJson.roles !== undefined) {
            message += `roles = ${JSON.stringify(commandJson.roles)}\n`;
        }

        if (commandJson.settings !== undefined) {
            message += `settings = ${JSON.stringify(commandJson.settings)}\n`;
        }
    } else {
        message += 'Empty';
    }
    message += "\n```";
    return message;
}