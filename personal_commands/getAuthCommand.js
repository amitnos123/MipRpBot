const path = require('path');
module.exports = {
    name: path.basename(__filename).split('.').slice(0, -1).join('.'),
    description: '',
    args: true,
    execute(client, message, args) {
        const commandsIdManager = require('commands_id_manager');
        const authorizationCommandManager = require('authorization_command_manager');

        const authComManager = new authorizationCommandManager();
        const comIdManager = new commandsIdManager();
        let authMessageList = {};

        if (args.length === 0) {
            const authList = authComManager.get();
            const commandsId = comIdManager.get_id();

            for (let prop in commandsId) {
                if (commandsId.hasOwnProperty(prop)) {
                    authMessageList[prop] = authList[commandsId[prop]];
                }
            }
        } else {
            const commandId = comIdManager.get_id(args[0]);

            if (commandId === undefined) {
                message.channel.send('Command doesn\'t exist');
                return; // Finish command here
            }

            authMessageList = authComManager.get(commandId);
        }

        let sendMessage = '';

        for (let key in authMessageList) {
            if (authMessageList.hasOwnProperty(key)) {
                sendMessage += `**${key}**\n`;
                if (authMessageList[key] !== undefined) {
                    sendMessage += '```' + `type = ${authMessageList[key].type}\n`;

                    if (authMessageList[key].roles !== undefined) {
                        sendMessage += `roles = ${JSON.stringify(authMessageList[key].roles, undefined, 2)}\n`;
                    }

                    if (authMessageList[key].settings !== undefined) {
                        sendMessage += `settings = ${JSON.stringify(authMessageList[key].settings, undefined, 2)}\n`;
                    }

                    sendMessage += '```';
                } else {
                    sendMessage += '*Empty*';
                }
                sendMessage += '\n';
            }
        }

        if (authMessageList === undefined) {
            sendMessage = 'Command doesn\'t has authorization.';
        }

        console.log(sendMessage);

        message.channel.send(sendMessage);
    },
};
