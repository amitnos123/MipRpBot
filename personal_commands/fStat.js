const path = require('path');
module.exports = {
    name: path.basename(__filename).split('.').slice(0, -1).join('.'),
    description: 'Create\\Update an stat.',
    args: true,
    execute(client, message, args) {
        //CODE
        message.channel.send('Implement');
    },
};