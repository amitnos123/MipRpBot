const path = require('path');
module.exports = {
    name: path.basename(__filename).split('.').slice(0, -1).join('.'),
    description: 'Crafts items. Will take items and will create new onces, base on the crafting recipes which are defined.',
    args: true,
    execute(client, message, args) {
        message.channel.send('Implement');
    },
};
