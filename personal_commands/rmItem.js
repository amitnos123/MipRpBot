const path = require('path');
module.exports = {
    name: path.basename(__filename).split('.').slice(0, -1).join('.'),
    description: 'Remove an item. The item\'s data would be deleted from the bot.',
    args: true,
    execute(client, message, args) {
        //CODE
        message.channel.send('Implement');
    },
};