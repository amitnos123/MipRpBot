const path = require('path');
module.exports = {
    name: path.basename(__filename).split('.').slice(0, -1).join('.'),
    description: '',
    args: true,
    execute(client, message, args) {
        const constants = require('consts');
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
            authMessageList = authComManager.get(commandId);
        }

        // const jsonMessage = JSON.stringify(authMessageList, undefined, 2);

        // message.channel.send('```' + jsonMessage + '```');

        let sendMessage = '';

        for (let key in authMessageList) {
            if (authMessageList.hasOwnProperty(key)) {
                if (authMessageList[key] !== undefined) {
                    sendMessage += `**${key}**\n`;
                    sendMessage += `\`\`\`type = ${authMessageList[key].type}\n`;

                    if (authMessageList[key].roles !== undefined) {
                        sendMessage += `roles = ${JSON.stringify(authMessageList[key].roles, undefined, 2)}\n`;
                    }

                    if (authMessageList[key].settings !== undefined) {
                        sendMessage += `settings = ${JSON.stringify(authMessageList[key].settings, undefined, 2)}\n`;
                    }

                    sendMessage += `\`\`\`\n`;
                }
            }
        }

        message.channel.send(sendMessage);
    },
};
