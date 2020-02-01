const path = require('path');
module.exports = {
  name: path.basename(__filename).split('.').slice(0, -1).join('.'),
  description: 'Information about the arguments provided.',
  args: true,
  id: "text2",
  execute(client, message, args) {
    message.channel.send(`SERVER TEXT MESSAGE 2`);
    message.channel.send(this.id);

    const constants = require('consts');

    const authorization_command = require('authorization_command');
    const auth_command = new authorization_command(constants.DATA_DIRECTORY_PATH);
    
    auth_command.auth_remove_setting_command('test_settings');
  },
};
