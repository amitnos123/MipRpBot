const path = require('path');
module.exports = {
    name: path.basename(__filename).split('.').slice(0, -1).join('.'),
    description: 'Give information on how to use the command and which options does it support.',
    args: true,
    execute(client, message, args) {
        //CODE
        message.channel.send('Implement');
    },
};