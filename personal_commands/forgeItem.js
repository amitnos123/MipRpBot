const path = require('path');
module.exports = {
    name: path.basename(__filename).split('.').slice(0, -1).join('.'),
    description: '',
    args: true,
    execute(client, message, args) {
        if (args.length === 0) {
            message.channel.send('No arguments were sent.');
        } else {
            const itemName = args[0];
            const itemDescription = args[1];
            const itemQuantatiyAllowed = args[2];
            const itemType = args[3];
        }
    },
};
