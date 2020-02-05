const path = require('path');
module.exports = {
    name: path.basename(__filename).split('.').slice(0, -1).join('.'),
    description: 'Information about the arguments provided.',
    args: true,
    execute(client, message, args) {
        message.channel.send('```TEST MESSAGE```');
    },
};
