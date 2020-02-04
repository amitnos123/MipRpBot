const path = require('path');
module.exports = {
  name: path.basename(__filename).split('.').slice(0, -1).join('.'),
  description: 'Information about the arguments provided.',
  args: true,
  id: "text2",
  execute(client, message, args) {
    message.channel.send(`SERVER TEXT MESSAGE 2`);
    const commandsIdManager = require('commands_id_manager');
    const comIdManager = new commandsIdManager();
    message.channel.send(comIdManager.get_id(this.name));
  },
};
