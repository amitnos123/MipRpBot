const path = require('path');
module.exports = {
  name: path.basename(__filename).split('.').slice(0, -1).join('.'),
  description: 'Information about the arguments provided.',
  args: true,
  execute(client, message, args) {
    message.channel.send(`SERVER TEXT MESSAGE`);

    const constants = require('consts');
    const itemsManager = require('items_manager');
    const itemsM = new itemsManager();
    itemsM.remove("item_code_test_create");
  },
};
