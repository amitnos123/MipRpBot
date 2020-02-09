const path = require('path');
module.exports = {
    name: path.basename(__filename).split('.').slice(0, -1).join('.'),
    description: 'Destory items which character has.',
    args: true,
    execute(client, message, args) {
        message.channel.send('Implement');
    },
};
