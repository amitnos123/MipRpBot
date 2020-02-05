const path = require('path');
module.exports = {
    name: path.basename(__filename).split('.').slice(0, -1).join('.'),
    description: 'Information about the arguments provided.',
    args: true,
    execute(client, message, args) {

        // const commandsIdManager = require('commands_id_manager');
        // const comIdManager = new commandsIdManager();

        // const authorizationCommandManager = require('authorization_command_manager');
        // const authComManager = new authorizationCommandManager();

        // if (authComManager.auth_text_command(comIdManager.get_id(this.name), message.member)) {
        //     message.channel.send(`Member ${message.member.user.username} is allow to use the command.`);
        // } else {
        //     message.channel.send(`Member ${message.member.user.username} isn't allow to use the command.`);
        // }
    },
};
