const path = require('path');
module.exports = {
  name: path.basename(__filename).split('.').slice(0, -1).join('.'),
  description: 'Information about the arguments provided.',
  args: true,
  execute(client, message, args) {

    message.channel.send(`SERVER TEXT MESSAGE`);

    const constants = require('consts');
    const authorization_command = require('authorization_command');
    const auth_command = new authorization_command(constants.DATA_DIRECTORY_PATH);
    auth_command.auth_text_command();
  },
};
